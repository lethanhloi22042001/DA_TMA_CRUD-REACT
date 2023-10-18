import React, { useState,useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InpusCps from "../Components/Input_cps";
import './Duck.scss'

import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import userService from "../Services/userService";
export const getArrUser = (number) => {
  return {
    type: "GET_ALL_USER",
    data: number,
  };
};
export const getDelete = (number) => {
  return {
    type: "DELETE_ONEL_USER",
    data: number,
  };
};

export const getUserRedux = (data)=>{
  return {
    type : "GET_USER",
    data : data
  }
}
const Duck = () => {
  const [modal, setModal] = useState(false);

  // const toggle = ()=> {
  //   setModal((prevModal) => (!prevModal));
  // };
  const toggle = () => {
    setModal(!modal);
  };
  const [arrUser, setarrUser] = useState([]);
    const [users,setUsers] = useState({
      address: "",
      email:  "",
      firstName :  "",
      gender: "",
      id : Number,
      lastName:  "",
      phonenumber : "",
    })
    // const user = useSelector();
    // console.log('user',user);
    
    useEffect(() => {
      getUser(arrUser);
    }, []);
  
    const getUser = async () => {
      try {
        console.log('getUser',getUser);
        const data = await userService.getAllUser("ALL");
        console.log('data of Dog Cps',data);
        setarrUser(data.users);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    const handledelete = async (item) => {
      try {
        await userService.deleteNewUserService(item.id);
        getUser();
        alert("Xoá Thành Công");
      } catch (error) {
        console.log("Xoá chưa thành công", error);
      }
     
    };
    const handleEdit = async (user) => {


      console.log('Item of Edit',user);
       
    };
    const [user, setUser] = useState(null);
    const [dataForm, setDataFrom] = useState({});
    const values = useSelector((state) => state.user.user);

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
        values, // Lấy dữ liệu API
        resetOptions: {},
      });
      const onSubmit = async () => {
        try {
          const values = getValues();
          console.log("values", values);
          await userService.createNewUserService(values);
          setDataFrom(values);
          alert("User created successfully!");
          reset();
        } catch (error) {
          console.error("Error creating user:", error);
        }
      };
      const watchedValues = watch();  
     


  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        {"Add New User"}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={"this.props.className"}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
           <form>
           <div class="container">
                <div class="form-group row">
                  <div class="col-md-6 mb-4">
                      <InpusCps  register={register}
                             label="email"
                             type="email"
                             placeholder="Pls enter the here :V "
                             value={'watchedValues.email'}
                             errors={errors}/>
                  </div>
                  <div class="col-md-6 ">
                      <InpusCps  register={register}
                             label="password"
                             type="password"
                             placeholder="Pls enter the here :V "
                             value={'watchedValues.password'}
                             errors={errors}/>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-6 mb-4">
                  <InpusCps  register={register}
                             label="firstName"
                             type="firstname"
                             placeholder="Pls enter the here :V "
                             value={'watchedValues.firstname'}
                             errors={errors}/>
                  </div>
                  <div class="col-md-6">
                  <InpusCps  register={register}
                             label="lastName"
                             type="lastname"
                             placeholder="Pls enter the here :V "
                             value={'watchedValues.lastname'}
                             errors={errors}/>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                  <InpusCps  register={register}
                             label="address"
                             type="address"
                             placeholder="Pls enter the here :V "
                             value={'watchedValues.address'}
                             errors={errors}/>
                  </div>
                   
                </div>
            </div>  
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
              Thêm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> */}
    </div>
  );
};

export default Duck;
