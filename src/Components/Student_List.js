import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Scss/Student_List.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal_CreateInPut from "./Modal_CreateInPut";
import { useDispatch, useSelector } from "react-redux";

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
} from "../Redux/actions";

const Student_List = () => {

  const dispatch = useDispatch();

  const [isOpen_Modal,setIsOpen_Modal] = useState(false); // mở modal
  const [modalAction,setModalAction] =   useState('Create'); // Create or Edit Text
  const arrUserAdmin = useSelector((state) => state.admin.userArr_Admin); // Mảng user
  const [userEdit,setUserEdit] = useState(null); // đẩy userEdit xuống cong
  const [isReLoad, setIsReLoad] = useState(false); // Reload lai trang

  useEffect(() => {
    if (isReLoad) {
      setIsReLoad(false);
    }
  }, [isReLoad]);
  

  const handleOnclick_Delete = (item)=>{
    console.log('item Delete',item);
    dispatch(deleteUserRedux_Admin(item));
    setIsReLoad(true); // reaload lai trang
  }
  const handleOnclick_Edit = (item)=>{
    setUserEdit(item);
    setModalAction("Edit")
    setIsOpen_Modal(true);
    setIsReLoad(false); // reaload lai trang
  }

  const onSubmit = (data,itemEdit,reset)=>{
    console.log('itemEdit co hay khong',itemEdit);
    if(itemEdit === null){
      dispatch(createNewUserAdmin(data));
      alert("Create Success");
      }else{
        
      dispatch(updateUserAdmin(data));
      alert("Update Success");
    }

  }
  return (
    <div className="student_form">
      <div className="head_btn" style={{ marginBottom: "10px" }}>
        <h1>Students List</h1>
        <div>
            <Button
              color="danger"
              onClick={() => {
                setUserEdit(null); // khi nhấn cú là cho itemEdit rỗng
                setIsOpen_Modal(true);
                setModalAction("Create");
              }}
            >
              {"Add New User"}
            </Button>
            <Modal_CreateInPut
              isOpenModal={isOpen_Modal} // OpenToggle
              setIsOpenModal={setIsOpen_Modal} //Set OpenToggle

              modalAction={modalAction} // Set Create - Edit
              setModalAction={setModalAction} // Set Create - Edit
              
              userEdit = {userEdit}
              setUserEdit = {setUserEdit}

              onSubmit = {onSubmit} // Function submit

              isReLoad = {isReLoad}
               setIsReLoad = {setIsReLoad}
            />
         
        </div>
      </div>

      <div className="contain_table">
        <hr width="100%" align="center" style={{ padding: "0", margin: "0" }} />
        <div className="head_name">
          <div className="name_thead t1"></div>
          <div className="name_thead t2">Name</div>
          <div className="name_thead t3">Email</div>
          <div className="name_thead t4">Phone</div>
          <div className="name_thead t5">Eroll Number</div>
          <div className="name_thead t6">Date of Admission</div>
          <div className="name_thead t7"></div>
          <div className="name_thead t7"></div>
        </div>
        <div className="contain_head_list">
            {arrUserAdmin.map( (item,index)=>{
              return(
                <div className="head-list" key={index}>
                  <div className="item_data t1">
                    <img
                      className=""
                      src="https://picsum.photos/200"
                      alt="Image description"
                    />
                  </div>
                  <div className="item_data t2">{item.firstName}</div>
                  <div className="item_data t3">{item.email}</div>
                  <div className="item_data t4">{item.phoneNumber}</div>
                  <div className="item_data t5">{item.ErollNumber}</div>
                  <div className="item_data t6">{item.days}</div>
                  <div className="item_data t7" onClick={()=>{handleOnclick_Edit(item)}}>
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                  <div className="item_data t7">
                    <FontAwesomeIcon icon={faTrash} onClick={()=>{handleOnclick_Delete(item)}}/>
                  </div>
              </div>
            )
            } )}
        </div>
      </div>
    </div>
  );
};

export default Student_List;
