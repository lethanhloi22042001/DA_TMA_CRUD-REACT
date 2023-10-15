import React, { useState, useEffect, useContext, createContext } from "react";
import { useSelector } from "react-redux";
import InpusCps from "./Input_cps";
import { useForm, SubmitHandler } from "react-hook-form";
import "./dsa.css";
import userService from "../Services/userService";

const Cps_Home = () => {
  const [user, setUser] = useState(null);
  const [dataForm, setDataFrom] = useState({});
  const values = useSelector((state) => state.user.user);

  // useEffect(() => {
  //   setUser(getUser);
  // }, [ ]);

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
  const watchedValues = watch(); // kiểm tra Input rỗng

  return (
    <div className="user-inf-container">
      <form id="form" className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <InpusCps
          register={register}
          label="email"
          type="email"
          placeholder="Pls enter the here :V "
          value={watchedValues.email}
          // onBlur={onBlur}
          errors={errors}
        />
        <InpusCps
          register={register}
          label="password"
          type="password"
          placeholder="Pls enter Password here :V "
          value={watchedValues.password}
          errors={errors}
          // onBlur={onBlur}
        />
        <InpusCps
          register={register}
          label="firstName"
          type="text"
          placeholder="Pls enter First Name here :V "
          value={watchedValues.firstName}
          errors={errors}
          // onBlur={onBlur}
        />
        <InpusCps
          register={register}
          label="lastName"
          type="text"
          placeholder="Pls enter First Name here :V "
          value={watchedValues.lastName}
          errors={errors}
          // onBlur={onBlur}
        />
        <InpusCps
          register={register}
          label="address"
          type="text"
          placeholder="Pls enter Address here :V "
          value={watchedValues.address}
          errors={errors}
          // onBlur={onBlur}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Cps_Home;
