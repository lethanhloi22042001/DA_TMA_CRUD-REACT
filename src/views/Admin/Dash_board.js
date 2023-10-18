import "./Dash_board.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal_CreateUser from "./Modal_CreateUser";
import {getAllUserRedux,deleteUserRedux} from "../../Redux/actions";
 
const Dash_board = () => {
  const [users, setUsers] = useState({address: "",email: "",firstName: "",gender: "",id: Number,lastName: "",phonenumber: "",});
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const arrUsersss = useSelector((state) => state.user.arrUser);
  const toggle = () => { setModal(!modal) };
  useEffect( ()=>{
      dispatch(getAllUserRedux());
    },[dispatch] );

  useEffect( ()=>{
    if(arrUsersss){
      console.log('Effect Arr Redux');
    }
  },[arrUsersss] );

  const handleDelete = (item)=>{
    dispatch(deleteUserRedux(item.id));
    alert('Xoá Thành Công');
  }
  const handleEdit = (item)=>{
      toggle();


  }
  return (
    <div className="admin_form">
      {  console.log('JSX')}
      <div className="dashboard_left">
        <h1>CRUD OPERATIONS</h1>
        <div className="inf_user">
          {/* <div className="user_img" >
                    </div> */}
          <img
            className="user_img"
            src="https://picsum.photos/200"
            alt="Image description"
          />

          <div className="user_name">Lê Thanh Lợi</div>
          <div className="user_position">Admin</div>
        </div>
        <div className="user_btn">
          <button className="user_btn_chung" type="">
            Home
          </button>
          <button className="user_btn_chung" type="">
            Course
          </button>
          <button className="user_btn_chung" type="">
            Students
          </button>
          <button className="user_btn_chung" type="">
            Payment
          </button>
          <button className="user_btn_chung" type="">
            Report
          </button>
          <button className="user_btn_chung" type="">
            Settings
          </button>
        </div>
        <div className="user_loginOut">
          LogOut <FontAwesomeIcon icon={faArrowRight} bounce />
        </div>
      </div>
      <div className="dashboard_right">
        <div className="top_contain">
          <div className="btn_search" aria-label="Search">
            <span class="DocSearch-Button-Placeholder">Search</span>
            <span class="DocSearch-Button-Container">
              <svg
                width="20"
                height="20"
                class="DocSearch-Search-Icon"
                viewBox="0 0 20 20"
              >
                <path
                  d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                  stroke="currentColor"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div>
            <Modal_CreateUser modal={modal} toggle={toggle}   />
          </div>
        </div>
        <div className="bot_contain">
          <table>
            <thead>
              <tr>
                <th>
                  {" "}
                  Id{" "}
                  <span className="icon-arrow">
                    <i className="fas fa-arrow-up"></i>
                  </span>
                </th>
                <th>
                  {" "}
                  Email{" "}
                  <span className="icon-arrow">
                    <i className="fas fa-arrow-up"></i>
                  </span>
                </th>
                <th>
                  {" "}
                  Firs tName{" "}
                  <span className="icon-arrow">
                    <i className="fas fa-arrow-up"></i>
                  </span>
                </th>
                <th>
                  {" "}
                  Last Name{" "}
                  <span className="icon-arrow">
                    <i className="fas fa-arrow-up"></i>
                  </span>
                </th>
                <th>
                  {" "}
                  Address{" "}
                  <span className="icon-arrow">
                    <i className="fas fa-arrow-up"></i>
                  </span>
                </th>
                <th>
                  {" "}
                  Password{" "}
                  <span className="icon-arrow">
                    <i className="fas fa-arrow-up"></i>
                  </span>
                </th>
                <th>Handle Button </th>
              </tr>
            </thead>
            <tbody>
              {arrUsersss &&
                arrUsersss.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td> {item.firstName}</td>
                      <td> {item.lastName} </td>
                      <td> {item.address} </td>
                      <td>{/* <strong> {item.phonenumber} </strong> */}</td>
                      <td className="btn-addDelete">
                        {/* <p className="status delivered">Delivered</p> */}
                        <button
                          className="status delivered asd1"
                          onClick={() => {
                            handleDelete(item);
                          }}
                        >
                          Deleted
                        </button>

                        <button
                          className="status delivered asd"
                          onClick={() => {
                            handleEdit(item);
                          }}
                        >
                          Edit User
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dash_board;
