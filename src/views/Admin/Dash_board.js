import "./Dash_board.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal_CreateInPut from "../../Components/Modal_CreateInPut";
import { Button } from "reactstrap";

import {
  getAllUserRedux,
  deleteUserRedux,
  createUserRedux,
  updateUserRedux,
  getOneUser,
} from "../../Redux/actions";

const Dash_board = () => {
  const dispatch = useDispatch();
  const arrUsersss = useSelector((state) => state.user.arrUser); // Mảng user
  
  const [modalAction, setModalAction] = useState("Create");
  const [itemDataModal, setItemDataModal] = useState(null); //setItemDataModal data 1 Item
  const [openModal, setOpenModal] = useState(false); // Mở đóng toggle
  // const user = useSelector((state) => state.user.oneUser );

  
  useEffect(() => {
    dispatch(getAllUserRedux());
  }, [dispatch]);

  const handleDelete = (item) => {
    dispatch(deleteUserRedux(item.id));
    alert("Xoá Thành Công");
  };
  const handleEdit = (item) => {
    setOpenModal(true);
    setItemDataModal(item);
    dispatch(getOneUser(item));
  };
  const onSubmit = (data, value, reset) => {
    if (!value) {
      dispatch(createUserRedux(data));
      alert("User created successfully!");
      setOpenModal(false);
      reset();
    } else {
      dispatch(updateUserRedux({ ...data, id: value.id }));
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
          <div>
            <Button
              color="danger"
              onClick={() => {
                setOpenModal(true);
                setModalAction("Create");
              }}
            >
              {"Add New User"}
            </Button>
            <Modal_CreateInPut
              modalValue={itemDataModal} // itemEdit
              onSubmit={onSubmit}        //CallBack Fnc Submit

              setIsOpenModal={setOpenModal} // OpenToggle
              isOpenModal={openModal} // OpenToggle

              modalAction={modalAction} // Set Create - Edit
              setModalAction={setModalAction} // Set Create - Edit
            />
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
                            setModalAction("Edit");
                            handleEdit(item);
                            // setOpenModal(true);
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
