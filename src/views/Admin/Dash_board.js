import "./Dash_board.scss";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBell,
  faMagnifyingGlass,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal_CreateInPut from "../../Components/Modal_CreateInPut";
import { Button } from "reactstrap";
import Student_List from "../../Components/Student_List";
import backImg from "../../Components/Pictures/top/back.png";
import Course_img from "../../Components/Pictures/Left/Course.png";
import Home_img from "../../Components/Pictures/Left/Home.png";
import Payment_img from "../../Components/Pictures/Left/Payment.png";
import Report_img from "../../Components/Pictures/Left/Report.png";
import Setting_img from "../../Components/Pictures/Left/Setting.png";
import Students_img from "../../Components/Pictures/Left/Students.png";
import Sign_out from "../../Components/Pictures/Left/Sign-out.png";
import { useNavigate,Navigate } from 'react-router-dom';
import { userAdmin_IsLogin } from "../../Redux/actions";

const Dash_board = () => {
  const is_Login_AdminRedux = useSelector((state) => state.admin.Login_Admin); 
   
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handle_Logout = ()=>{
      dispatch(userAdmin_IsLogin(false));
      localStorage.removeItem("Login_Success");
      navigate('/login');
  }
  const handleOnclick = ()=>{
    navigate('chicken');
    // return <Navigate to="/chicken"></Navigate>
  }
  
  const handleOnclick2 = ()=>{
    navigate('student_list');
  }
  const handleOnclick4 = ()=>{
    navigate('payment');
  }
  const handleOnclickHome = ()=>{
    navigate('home');
  }
  const handleOnclickCreateUser = ()=>{
    navigate('createUser');
  }

  
  return (
    <div className="admin_form">
      <div className="dashboard_left">
        <h1>CRUD OPERATIONS</h1>
        <div className="inf_user">
          <img className="user_img" src="https://picsum.photos/200" alt="Image description" />
          <div className="user_name">Lê Thanh Lợi</div>
          <div className="user_position">Admin</div>
        </div>
        <div className="user_btn">
          <div className="user_btn_chung user_btn_flex" onClick={()=>{handleOnclickHome()}}>
            <div className="home_fix">
              <img className="img_btn" src={Home_img} />
            </div>
            <div className="text_btn"> Home</div>
          </div>
          <div className="user_btn_chung user_btn_flex" onClick={()=>{handleOnclickCreateUser()}}>
            <div className="home_fix">
              <img className="img_btn" src={Setting_img} />
            </div>
            <div className="text_btn"> Create_User</div>
          </div>

          <div className="user_btn_chung user_btn_flex" onClick={()=>{handleOnclick()}}>
            <div className="home_fix" >
              <img className="img_btn" src={Course_img} />
            </div>
            <div className="text_btn"> Teacher</div>
          </div>

          <div className="user_btn_chung user_btn_flex" onClick={()=>{handleOnclick2()}}>
            <div className="home_fix">
              <img className="img_btn" src={Students_img} />
            </div>
            <div className="text_btn"> Students</div>
          </div>
          <div className="user_btn_chung user_btn_flex"  onClick={()=>{handleOnclick4()}}>
            <div className="home_fix">
              <img className="img_btn" src={Payment_img} />
            </div>
            <div className="text_btn"> Payment</div>
          </div>

          <div className="user_btn_chung user_btn_flex">
            <div className="home_fix">
              <img className="img_btn" src={Report_img} />
            </div>
            <div className="text_btn"> Reports</div>
          </div>
         
        </div>
        <div className="user_loginOut" onClick={ ()=>{handle_Logout()}}>
          LogOut <img className="img_btn" src={Sign_out} />
        </div>
      </div>
      <div className="dashboard_right">
        {/* HEADER */}
        <div className="top_contain">
          <div className="left_btn">
            <div className="btn_back">
              <img src={backImg} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="right_btn">
            <div className="btn_search">
              <input placeholder="Search" className="input_search" />
              <div className="btn_find">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
            <div className="btn_ring">
              <div className="btn_Search">
                <FontAwesomeIcon icon={faBell} />
              </div>
            </div>
          </div>
         
        </div>
        {/* Body->Right */}
        <div className="bot_contain">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dash_board;
