import './DangNhap.scss'
import InpusCps from '../Components/Input_cps'
import React, { useState, useEffect, useContext, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

import { useNavigate,Navigate, useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import {
  //ADMIN
  createNewUserAdmin,
  deleteUserRedux_Admin,
  updateUserAdmin,
  userAdmin_IsLogin
} from "../Redux/actions";


const DangNhap = ( )=>{
    const [user, setUser] = useState(null);
    const [dataForm, setDataFrom] = useState({});
    const values = useSelector((state) => state.user.oneUser);
    const arrUserAdmin = useSelector((state) => state.admin.userArr_Admin);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
 
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
          email: "",
          eassword: "",
        },
        values, // Lấy dữ liệu API
        resetOptions: {},
      });

      const handLogin = (data)=>{
        const oneItem = arrUserAdmin.find(item => item.email === data.email);
        if (!oneItem ) {
          alert('Email is wrong');
          // setValue("email", "");
        } else if (data.email === oneItem.email && data.password !== oneItem.password) {
          alert('Password is wrong');
        } else if (data.email === oneItem.email && data.password === oneItem.password) {
           
          localStorage.setItem('Login_Success', true);
          dispatch(userAdmin_IsLogin(true));
          reset();
          navigate('/admin/dash_board');
        } 
      }

      const onSubmit = async () => {
        try {
          const values = getValues();
          handLogin(values);
          
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
                  <div className='inps_Chung inps_Email'>
                     
                         <InpusCps
                             register={register}
                             label="email"
                             type="email"
                             placeholder="Enter your email"
                            //  value={'watchedValues.email'}
                              value={watch("email")}
                             errors={errors}
                             />
                  </div>
                  <div className='inps_Chung inps_password'>
                         <InpusCps
                             register={register}
                             label="password"
                             type="password"
                             placeholder="Enter your password "
                             value={'watchedValues.password'}
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