import './DangNhap.scss'
import InpusCps from '../Components/Input_cps'
import React, { useState, useEffect, useContext, createContext } from "react";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import userService from "../Services/userService";


const DangNhap = ()=>{
    const [user, setUser] = useState(null);
    const [dataForm, setDataFrom] = useState({});
    const values = useSelector((state) => state.user.user);

    const {
        handleSubmit,
        formState: { errors },
        register,
        setValue,
        getValues,
        reset,
        // onBlur,
        watch,
      } = useForm({
        defaultValues: {
          email: "",
          password: "",
          address: "",
          firstName: "",
          lastName: "",
        },
        values, // Lấy dữ liệu API
        resetOptions: {},
      });
      const onSubmit = async () => {
        try {
          const values = getValues();
          console.log("values", values);
          await userService.createNewUserService(values);
          setDataFrom(values);
          alert("User created successfully!");
          reset();
        } catch (error) {
          console.error("Error creating user:", error);
        }
      };
      const watchedValues = watch();  
     

    return(
        <div className='form_login'>
            <form id="form"  className='form_contain' onSubmit={handleSubmit(onSubmit)}>
                <div className='logo'>
                    <h1>CRUD OPERATIONS</h1>
                    <div className="logo_text">
                        <div className="logo_text1">SIGN IN</div>
                        <div className="logo_text2">Enter yours credentials to access your account</div>
                    </div>
                </div>
                <div className='inps'>
                  <div className='inps_Chung inps_email'>
                     
                         <InpusCps
                             register={register}
                             label="email"
                             type="email"
                             placeholder="Pls enter the here :V "
                             value={'watchedValues.email'}
                             errors={errors}
                             />
                  </div>
                  <div className='inps_Chung inps_password'>
                         <InpusCps
                             register={register}
                             label="password"
                             type="password"
                             placeholder="Pls enter the here :V "
                             value={'watchedValues.password'}
                             errors={errors}
                             />
                  </div>
                    
                  <button className="inps_Chung " type=""> Submit</button>
                </div>
                <div className='footer'>
                    <div>Forgot your password?</div>
                    <a href="">Reset password</a>
                </div>
            </form>
        </div>
    )
}

export default DangNhap 