import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InpusCps from "../Components/Input_cps";
import "../Components/Scss/Modal_CreateUser.scss";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";

const Modal_CreateInPut = ({
  register,
  errors,
  isModal, // Open toggle Modle
  setIsModal,
  setAciton,
  onSubmit, 
  aciton,
  reset

  
}) => {
   
  
  return (
    <>
      <Button color="danger" onClick={()=>{setIsModal(true);setAciton("CREATE");reset()}}>
        {"Add New User"}
      </Button>
      <Modal isOpen={isModal} toggle={() =>{}}>
        <ModalHeader >Modal title</ModalHeader>
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
                    defaultValue={''}
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
                    defaultValue={''}
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
                    defaultValue={''}
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
                    defaultValue={''}
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
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit} >
            {aciton === 'CREATE' ? ' CREATE' : "UPDATE"}
          </Button>
          <Button color="secondary" onClick={()=>{setIsModal(false)}}>
        
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Modal_CreateInPut;
