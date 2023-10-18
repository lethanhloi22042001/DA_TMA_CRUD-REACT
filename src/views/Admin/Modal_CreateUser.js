import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InpusCps from "../../Components/Input_cps";
import userService from "../../Services/userService";
import './Modal_CreateUser.scss'
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserRedux } from "../../Redux/actions";

const Modal_CreateUser = ({ modal, toggle }) => {
    const [dataForm, setDataFrom] = useState({});;
    const dispatch = useDispatch();

    const {
      handleSubmit,
      formState: { errors },
      register,
      setValue,
      getValues,
      reset,
      // onBlur,
      watch,
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
  
    const onSubmit = async () => {
      try {
        const valueFormSubmit = getValues();
        dispatch(createUserRedux(valueFormSubmit));
        alert("User created successfully!");
        reset();
        toggle();
      } catch (error) {
        console.error("Error creating user:", error);
      }
    };
    const watchedValues = watch();  
  

  return (
    <>
      <Button color="danger" onClick={toggle}>
        {"Add New User"}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={"this.props.className"}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
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
                    value={"watchedValues.email"}
                    errors={errors}
                  />
                </div>
                <div class="col-md-6 ">
                  <InpusCps
                    register={register}
                    label="password"
                    type="password"
                    placeholder="Pls enter the here :V "
                    value={"watchedValues.password"}
                    errors={errors}
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
                  />
                </div>
                <div class="col-md-6">
                  <InpusCps
                    register={register}
                    label="lastName"
                    type="lastname"
                    placeholder="Pls enter the here :V "
                    value={"watchedValues.lastname"}
                    errors={errors}
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
                    value={"watchedValues.address"}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit(onSubmit)}>
            Thêm
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Modal_CreateUser;
