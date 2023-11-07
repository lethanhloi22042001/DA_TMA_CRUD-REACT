import './DangNhap.scss'
import InpusCps from '../Components/Input_cps'
import React, { useState, useEffect, useContext, createContext } from "react";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import userService from "../Services/userService";

import { useNavigate } from 'react-router-dom';

const DangNhap = ()=>{
    const [user, setUser] = useState(null);
    const [dataForm, setDataFrom] = useState({});
    const values = useSelector((state) => state.user.oneUser);

    const navigate = useNavigate();
    const {
        handleSubmit,
        formState: { errors },
        register,
        setValue,
        getValues,
        reset,
        watch,
      } = useForm({
        defaultValues: {
          Email: "",
          Password: "",
        },
        values, // Lấy dữ liệu API
        resetOptions: {},
      });

     

      const onSubmit = async () => {
        try {
          const values = getValues();
          console.log("values", values);
          navigate('/admin/dash_board');
          reset();
          
        } catch (error) {
          console.error("Error creating user:", error);
        }
      };
    return(
        <div className='form_login'>
          
            <form id="form"  className='form_contain'  onSubmit={handleSubmit(onSubmit)} >
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
                             label="Email"
                             type="Email"
                             placeholder="Enter your email"
                             value={'watchedValues.Email'}
                             errors={errors}
                             />
                  </div>
                  <div className='inps_Chung inps_password'>
                         <InpusCps
                             register={register}
                             label="Password"
                             type="Password"
                             placeholder="Enter your password "
                             value={'watchedValues.Password'}
                             errors={errors}
                             />
                  </div>
                    
                  <button className="inps_Chung "> Submit</button>
                </div>
                <div className='footer'>
                    <div className='forgotPass'>Forgot your password?</div>
                    <a href=""> Reset password</a>
                </div>
            </form>
        </div>
    )
}

export default DangNhap 