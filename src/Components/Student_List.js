import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Scss/Student_List.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal_CreateInPut from "./Modal_CreateInPut";
import { useSelector } from "react-redux";

const Student_List = ({openModal,setOpenModal,modalAction,setModalAction}) => {

  const arrUserAdmin = useSelector((state) => state.admin.userArr_Admin);
  const [userEdit,setUserEdit] = useState(null);

  const handleOnclick_Edit = (item)=>{
    console.log('da day duoc item ',item);
    setUserEdit(item);
    setModalAction("Edit")
    setOpenModal(true);
  }

  return (
    <div className="student_form">
      <div className="head_btn" style={{ marginBottom: "10px" }}>
        <h1>Students List</h1>
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
              modalValue={"itemDataModal"} // itemEdit
              onSubmit={"onSubmit"} //CallBack Fnc Submit
              setIsOpenModal={setOpenModal} // OpenToggle
              isOpenModal={openModal} // OpenToggle
              modalAction={modalAction} // Set Create - Edit
              setModalAction={setModalAction} // Set Create - Edit
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
                  <div className="item_data t7" onClick={(item)=>{handleOnclick_Edit(item)}}>
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                  <div className="item_data t7">
                    <FontAwesomeIcon icon={faTrash} />
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
