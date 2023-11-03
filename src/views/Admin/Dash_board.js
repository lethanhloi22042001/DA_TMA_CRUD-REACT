import "./Dash_board.scss";
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


import {
  getAllUserRedux,
  deleteUserRedux,
  createUserRedux,
  updateUserRedux,
  getOneUser,
  //ADMIN
  createNewUserAdmin,
  deleteUserRedux_Admin,
  updateUserAdmin,
} from "../../Redux/actions";

const Dash_board = () => {
  const dispatch = useDispatch();
  const arrUsersss = useSelector((state) => state.admin.userArr_Admin); // // React-Redux
  const [modalAction, setModalAction] = useState("Create");
  const [itemDataModal, setItemDataModal] = useState(null); //setItemDataModal data 1 Item
  const [openModal, setOpenModal] = useState(false); // Mở đóng toggle

  const [isReLoad, setIsReLoad] = useState(false);
  console.log("arrUsersss", arrUsersss);
  useEffect(() => {
    if (isReLoad) {
      setIsReLoad(false);
    }
  }, [isReLoad]);

  const handleDelete = async (item) => {
    console.log("item,", item.id);
    dispatch(deleteUserRedux_Admin(item.id));
    setIsReLoad(true);
    alert("Xoá Thành Công");
  };
  const handleEdit = (item) => {
    console.log("item Edit", item);
    setOpenModal(true);
    setItemDataModal(item);
  };
  const onSubmit = async (data, value, reset) => {
    if (!value) {
      dispatch(createNewUserAdmin(data));
      alert("User created successfully!");
      setOpenModal(false);
      reset();
    } else {
      //updateUserAdmin
      dispatch(updateUserAdmin(data));
      alert("User edit successfully!");
      setOpenModal(false);
      reset();
    }
  };
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
          <div className="user_btn_chung user_btn_flex">
            <div className="home_fix">
              <img className="img_btn" src={Home_img} />
            </div>
            <div className="text_btn"> Home</div>
          </div>

          <div className="user_btn_chung user_btn_flex">
            <div className="home_fix">
              <img className="img_btn" src={Course_img} />
            </div>
            <div className="text_btn"> Home</div>
          </div>

          <div className="user_btn_chung user_btn_flex">
            <div className="home_fix">
              <img className="img_btn" src={Students_img} />
            </div>
            <div className="text_btn"> Students</div>
          </div>
          <div className="user_btn_chung user_btn_flex">
            <div className="home_fix">
              <img className="img_btn" src={Payment_img} />
            </div>
            <div className="text_btn"> Payment</div>
          </div>

          <div className="user_btn_chung user_btn_flex">
            <div className="home_fix">
              <img className="img_btn" src={Report_img} />
            </div>
            <div className="text_btn"> Students</div>
          </div>
          <div className="user_btn_chung user_btn_flex">
            <div className="home_fix">
              <img className="img_btn" src={Setting_img} />
            </div>
            <div className="text_btn"> Payment</div>
          </div>
        </div>
        <div className="user_loginOut">
          LogOut <img className="img_btn" src={Sign_out} />
        </div>
      </div>
      <div className="dashboard_right">
        <div className="top_contain">
          <div className="left_btn">
            <div className="btn_back">
              <img src={backImg} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="right_btn">
            <div className="btn_search">
              <input placeholder="Search" className="input_search" value="" />
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
        <div className="bot_contain">
          <Student_List></Student_List>
        </div>
      </div>
    </div>
  );
};

export default Dash_board;
