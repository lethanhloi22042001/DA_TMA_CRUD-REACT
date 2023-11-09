import './DangNhap.scss'
import InpusCps from '../Components/Input_cps'
import React, { useState, useEffect, useContext, createContext } from "react";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

import { useNavigate,Navigate, useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import useAuth from '../hooks/useAuth';


const DangNhap = ({setIsLogin,isLogin})=>{
    const [user, setUser] = useState(null);
    const [dataForm, setDataFrom] = useState({});
    const values = useSelector((state) => state.user.oneUser);
    const arrUserAdmin = useSelector((state) => state.admin.userArr_Admin);
    // console.log('Login arrUserAdmin',arrUserAdmin);


    const navigate = useNavigate();
    // const {setAuth} = useAuth();
    const { auth, setAuth,userArr_Admin  } = useAuth();

    // console.log('setAuth Dang Nhap',setAuth);
    // console.log('auth Dang Nhap',auth);
    // console.log('userArr_Admin Dang Nhap',userArr_Admin);
    // console.log('isLogin Dang Nhap',isLogin);
     
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
        } else if (data.email === oneItem.email && data.password !== oneItem.password) {
          alert('Password is wrong');
        } else if (data.email === oneItem.email && data.password === oneItem.password) {
          localStorage.setItem('Login_Success', true);
          //
          setAuth('Login_Success')
          //
          reset();
          setIsLogin(!isLogin);
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
                             value={'watchedValues.email'}
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