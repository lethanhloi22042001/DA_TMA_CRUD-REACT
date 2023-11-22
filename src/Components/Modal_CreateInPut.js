import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InpusCps from "../Components/Input_cps";
import Select from "react-select";
import "../Components/Scss/Modal_CreateUser.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Pictur_Base64 from "../utils/Pictur_Base64";
import { Buffer } from "buffer";

const Modal_CreateInPut = ({
  onSubmit,
  isOpenModal,
  setIsOpenModal,
  userEdit,
  setUserEdit,
  setIsReLoad,

  modalAction, //Set_Create Edit
  setModalAction, //Set_Create Edit
  setPreviewImgURL, //setPicture
  previewImgURL, //valuePicture
  setImage, //BLOB - String
  image, //BLOB - String

  genderArr, // mảng Selected gender
  roleArr, //mảng Selected roleId

  selectedGender, // 1 Object when select - Gender
  setSelectedGender, // 1 Object when Set-select
  selectedRole, // 1 Object when select - Role
  setSelectedRole, // 1 Object when Ser-select
}) => {
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
    },
    resetOptions: {},
  });

  const dispatch = useDispatch();
  const handleCancle = () => {
    setIsOpenModal(false);
    setUserEdit(null);

    //Reset
    setImage("");
    setPreviewImgURL("");
    setSelectedRole({});
    setSelectedGender({});
    reset();
  };
  const handle_Select = (inputData) => {
    let result = [];
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let Object = {};
        Object.label = item.valueVi;
        Object.value = item.keyMap;
        result.push(Object);
      });
    }
    return result;
  };
  const handle_BE = (inputData) => {
    let result = [];
    let Object = {};
    Object.label = inputData.valueVi;
    Object.value = inputData.keyMap;
    result.push(Object);

    return result[0];
  };

  console.log(genderArr, "model");

  useEffect(() => {
    if (userEdit) {
      let getValueEdit_gender = {};
      let getValueEdit_role = {};
      let imageBase64 = "";

      if (userEdit.image) {
        imageBase64 = new Buffer(userEdit.image, "base64").toString("binary");
      }
      // Lấy từ mảng Select -> so sánh gtri khi lấy BE lên
      genderArr.map((item) => {
        if (item.keyMap === userEdit.gender) {
          return (getValueEdit_gender = item);
        }
        return getValueEdit_gender;
      });
      roleArr.map((item) => {
        if (item.keyMap === userEdit.roleId) {
          return (getValueEdit_role = item);
        }
        return getValueEdit_role;
      });
      setValue("id", userEdit.id);
      setValue("email", userEdit.email);
      setValue("image", imageBase64);
      setValue("password", userEdit.password);
      setValue("address", userEdit.address);
      setValue("firstName", userEdit.firstName);
      setValue("lastName", userEdit.lastName);
      setValue("phoneNumber", userEdit.phoneNumber);
      setValue("ErollNumber", userEdit.ErollNumber);
      setValue("days", userEdit.days);
      setPreviewImgURL(imageBase64);
      setSelectedRole(handle_BE(getValueEdit_role));
      setSelectedGender(handle_BE(getValueEdit_gender));
    }
  }, [userEdit]); // bắn trên xuống -> be Changed , thì nạp lại
  const handleOnchangeIMG = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await Pictur_Base64(file); //đổi thành textBase64 truyền xuống BE
      let objectURL = URL.createObjectURL(file); // objectURL để chuyển ảnh thành đường link ==> giúp thấy hình ảnh hiện lên trên màn hình
      setPreviewImgURL(objectURL);
      setImage(base64); //Chuyển dữ liệu ảnh(tập tin) sang dạng base64 mới đẩy xuống BE được (và dưới BE đang kiểu BLOB nên kiểu avatar tiếp tục bị đổi thành dạng BUFFER)
    }
  };

  const handleChangeSelect_Gender = (selectedGender) => {
    setSelectedGender(selectedGender);
  };
  const handleChangeSelect_Role = (selectedRole) => {
    setSelectedRole(selectedRole);
  };

  const genderArrList = handle_Select(genderArr);
  const roleArrList = handle_Select(roleArr);

  const handleOnSubmit = handleSubmit((data) => {
    let allData = {
      ...data,
      image: image,
      gender: selectedGender.value,
      roleId: selectedRole.value,
    };
    onSubmit(allData, userEdit, reset);
    setIsReLoad(true); // Load Lại trang
    setIsOpenModal(false);

    setImage("");
    setPreviewImgURL("");
    setSelectedRole({});
    setSelectedGender({});
    reset();

    console.log("data SubMit", allData);
  });

  return (
    <>
      <Modal isOpen={isOpenModal} className={"this.className"}>
        <ModalHeader style={{ margin: "0 auto" }}>{modalAction}</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="form-group row">
              <div className="col-md-6 mb-4">
                <InpusCps
                  register={register}
                  label="email"
                  type="email"
                  placeholder="Pls enter the here :V "
                  defaultValue={""}
                  //   value={"watchedValues.email"}
                  errors={errors}
                />
              </div>
              <div className="col-md-6 ">
                <InpusCps
                  register={register}
                  label="password"
                  type="password"
                  placeholder="Pls enter the here :V "
                  //   value={"watchedValues.password"}
                  errors={errors}
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-6 mb-4">
                <InpusCps
                  register={register}
                  label="firstName"
                  type="firstname"
                  placeholder="Pls enter the here :V "
                  value={"watchedValues.firstname"}
                  errors={errors}
                  defaultValue={""}
                />
              </div>
              <div className="col-md-6">
                <InpusCps
                  register={register}
                  label="lastName"
                  type="lastname"
                  placeholder="Pls enter the here :V "
                  //   value={"watchedValues.lastname"}
                  errors={errors}
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-12 mb-4">
                <InpusCps
                  register={register}
                  label="address"
                  type="address"
                  placeholder="Pls enter the here :V "
                  //   value={"watchedValues.address"}
                  errors={errors}
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-6 mb-4">
                <label>Role</label>
                <Select
                  label="roleId"
                  type="roleId"
                  placeholder="Pls choose a position :V "
                  options={roleArrList}
                  onChange={(selectedRole) => {
                    handleChangeSelect_Role(selectedRole);
                  }}
                  value={selectedRole}
                />
              </div>

              <div className="col-md-6">
                <label>Gender</label>
                <Select
                  label="gender"
                  type="gender"
                  placeholder="Pls choose a Gender :V "
                  options={genderArr}
                  defaultValue={genderArr[0]}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label>Picture</label>
                <div className="preview-img-container">
                  <div className="upload-btn-wrapper">
                    {/* Input -> File*/}
                    <label className="label-upload" htmlFor="previewImgURL">
                      Tải Ảnh Lên{" "}
                    </label>
                    <input
                      type="file"
                      id="previewImgURL"
                      hidden
                      onChange={(e) => {
                        handleOnchangeIMG(e);
                      }}
                    />
                    {/* div -> hiển thị ảnh Preview */}
                    <div
                      className="preview-img"
                      style={{ backgroundImage: `url(${previewImgURL})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleOnSubmit}>
            {modalAction === "Create" ? "Create" : "Edit"}{" "}
          </Button>
          <Button color="secondary" onClick={handleCancle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Modal_CreateInPut;
