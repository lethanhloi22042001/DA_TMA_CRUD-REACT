import React, { useEffect, useState, useContext } from "react";
import userService from "../../Services/userService";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Create_User.scss";
import InpusCps from "../../Components/Input_cps";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Modal_CreateInPut from "../../Components/Modal_CreateInPut";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Buffer } from "buffer";
// Buffer.from('anything','base64');
import {
  //Admin without BE-> useRedux handle
  createNewUserAdmin,
  deleteUserRedux_Admin,
  updateUserAdmin,
  //User BE
  getOneUser,
  getAllUserRedux,
  createUserRedux,
  deleteUserRedux,
  updateUserRedux,
  getGender,
  getRole,
} from "../../Redux/actions";
const Create_User = () => {
  const dispatch = useDispatch();
  const genderArr = useSelector((state) =>
    state.user?.arrGender ? state.user.arrGender : []
  ); // Mảng Selector Giới Tính
  const roleArr = useSelector((state) => state.user.arrRole); // Mảng Selector Chức Danh
  console.log("genderArr", genderArr);

  const [selectedGender, setSelectedGender] = useState({});
  const [selectedRole, setSelectedRole] = useState({});
  const [previewImgURL, setPreviewImgURL] = useState(""); // Lấy ảnh hiển thị ở máy người dùng
  const [image, setImage] = useState(""); // trả kiểu BLOB Xuống BE

  const [isOpen, setIsOpen] = useState(false); // True/False Mở LightBox Img preview
  const [userEditId, setUserEditId] = useState(false); // Lấy Id trong listUser
  const [action, setAction] = useState(""); // TextButton-> Create Or Update

  const [isOpen_Modal, setIsOpen_Modal] = useState(false); // mở modal
  const [modalAction, setModalAction] = useState("Create"); // Create or Edit Text
  const arrUserAdmin = useSelector((state) => state.user.arrUser); // Mảng user
  const [userEdit, setUserEdit] = useState(null); // đẩy userEdit xuống cong
  const [isReLoad, setIsReLoad] = useState(false); // Reload lai trang

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      address: "",
      firstName: "",
      lastName: "",
      phonenumber: "",
      gender: "",
      image: "",
      positionId: "",
    },
    resetOptions: {},
  });

  useEffect(() => {
    if (arrUserAdmin?.length === 0) {
      dispatch(getAllUserRedux("ALL"));
    }
  }, [arrUserAdmin]);

  useEffect(() => {
    if (genderArr?.length === 0) {
      dispatch(getGender("GENDER"));
    }
    //   }
    // //   if (roleArr?.length === 0) {
    // //     dispatch(getRole("ROLE"));
    // //   }
  }, [genderArr]);

  useEffect(() => {
    if (isReLoad) {
      setIsReLoad(false);
    }
  }, [isReLoad]);

  const handleOnclick_Delete = (item) => {
    dispatch(deleteUserRedux(item.id));
    setIsReLoad(true); // reaload lai trang
  };
  const handleOnclick_Edit = (item) => {
    setUserEdit(item);
    setModalAction("Edit");
    setIsOpen_Modal(true);
    setIsReLoad(false); // reaload lai trang
  };

  const onSubmit = (data, itemEdit, reset) => {
    if (itemEdit === null) {
      dispatch(createUserRedux(data));
      dispatch(getAllUserRedux());
      alert("Create Success");
    } else {
      dispatch(updateUserRedux(data));
      alert("Update Success");
    }
  };

  const handle_Select = (inputData) => {
    let result = [];
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        result.push({
          id: item.id,
          value: item.keyMap,
          label: item.valueVi,
        });
      });
    }
    return result;
  };

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
            userEdit={userEdit}
            setUserEdit={setUserEdit}
            onSubmit={onSubmit} // Function submit
            isReLoad={isReLoad}
            setIsReLoad={setIsReLoad}
            previewImgURL={previewImgURL} // Lấy ảnh
            setPreviewImgURL={setPreviewImgURL} //value Ảnh
            setImage={setImage}
            image={image}
            genderArr={genderArr}
            roleArr={roleArr ? roleArr : []}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
          />
        </div>
      </div>

      <div className="contain_table">
        <hr width="100%" align="center" style={{ padding: "0", margin: "0" }} />
        <div className="head_name">
          <div className="name_thead t1"></div>
          <div className="name_thead t2">Name</div>
          <div className="name_thead t3">Email</div>
          <div className="name_thead t4">Last Name</div>
          <div className="name_thead t5">Pass Word</div>
          <div className="name_thead t6">Address</div>
          <div className="name_thead t7"></div>
          <div className="name_thead t7"></div>
        </div>
        <div className="contain_head_list">
          {arrUserAdmin?.map((item, index) => {
            let imageBase64 = "";
            if (item.image) {
              imageBase64 = new Buffer(item.image, "base64").toString("binary");
            }
            return (
              <div className="head-list" key={index}>
                <div className="item_data t1">
                  <img className="" src={imageBase64} />
                </div>
                <div className="item_data t2">{item.firstName}</div>
                <div className="item_data t3">{item.email}</div>
                <div className="item_data t4">{item.lastName}</div>
                <div className="item_data t5">{item.password}</div>
                <div className="item_data t6">{item.address}</div>
                <div
                  className="item_data t7"
                  onClick={() => {
                    handleOnclick_Edit(item);
                  }}
                >
                  <FontAwesomeIcon icon={faPen} />
                </div>
                <div className="item_data t7">
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      handleOnclick_Delete(item);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Create_User;
