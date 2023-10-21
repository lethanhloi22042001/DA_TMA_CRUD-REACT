import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InpusCps from "../Components/Input_cps";
import "../Components/Scss/Modal_CreateUser.scss";
import { useForm } from "react-hook-form";

const Modal_CreateInPut = ({
  onSubmit,
  modalValue,
  isOpenModal,
  setIsOpenModal,
  modalAction,   // Set Create - Edit
  setModalAction, // Set Create - Edit

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
  const handleCancle = () => {
    setIsOpenModal(false);
    reset();
  };

  //  ????
  useEffect(() => {
    if (modalValue) {
      setValue("email", modalValue.email);
      setValue("password", modalValue.password);
      setValue("address", modalValue.address);
      setValue("firstName", modalValue.firstName);
      setValue("lastName", modalValue.lastName);
    }
  }, [modalValue]); // bắn trên xuống -> be Changed , thì nạp lại

  const handleOnSubmit = handleSubmit((data) => {
    onSubmit(data, modalValue, reset); //modalValue nhận lại data 1 item đã được set
    //modalValue => Lấy từ Cha xuống
  });

  return (
    <>
      <Modal isOpen={isOpenModal} className={"this. className"}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <form>
            <div class="container">
              <div class="form-group row">
                <div class="col-md-6 mb-4">
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
                <div class="col-md-6 ">
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

              <div class="form-group row">
                <div class="col-md-6 mb-4">
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
                <div class="col-md-6">
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
              <div class="form-group row">
                <div class="col-md-12">
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
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleOnSubmit}>
            {modalAction ==='Create' ? "Create" : "Edit"}{" "}
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
