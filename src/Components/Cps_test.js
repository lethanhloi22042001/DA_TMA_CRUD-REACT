import React, { useState, useEffect } from "react";
import Select from "react-select";
import InpusCps from "./Input_cps";
import "./dsa.css";
import validator from "validator";

const Cps_test = () => {
   
  const [formData, setFormData] = useState({ //1. useState({}) nó là mảng cũng được nhưng hay dùng là object
                                             //1. Vì nó là Object nên phải dùng Object.keys(formData).map để loop các phần tử

                                             //2. việc setState ở trong 1 object
                                             //2. setFormData({...formData,sex: { value: selectedOption, error: false },});
                                             //2.=>
    email: { value: "", error: false },
    password: { value: "", error: false },
    address: { value: "", error: false },
    city: { value: "", error: false },
    sex: { value: null, error: false },
  });
  // bởi vì dữ liệu của options là 1 mảng chứa các object
  const options = [
    { value: "Nam", label: "Nam" },
    { value: "Nữ", label: "Nữ" },
    { value: "Khác", label: "Khác" },
  ];
  const required = (value) => {
      return !value.toString().trim().length ;
  };
  const emailValidate = (value) => {
    return validator.isEmail(value);
  };

  const handleInput = (e, name) => {
    const value = e.target.value.trim();
    setFormData({
      ...formData,
      [name]: { value : value, error: required(value) },
    });
  };
  const handleInputChange = (selectedOption) => {
    setFormData({
      ...formData,
      sex: { value: selectedOption, error: false },
    });
  };
  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(formData);
      Object.keys(formData).map((item)=>{
      console.log(typeof([item]),typeof(item));
    })
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!email) {
  //     setInputErrorEmail(true); // lí do đoạn set trực tiếp ở đây nên chạy xuống đây thì đoạn Input trên kia sẽ bị chạy hết
  //     const emailInput = document.getElementById("emailInput"); // khi đoạn này tiêm vào JSX thì điều gì xảy ra
  //     emailInput && emailInput.focus();
  //     return;
  //   } else {
  //     setInputErrorEmail(false);
  //   }

  //   if (!password) {
  //     setInputErrorPassword(true);
  //     const passwordInput = document.getElementById("passwordInput");
  //     passwordInput && passwordInput.focus();
  //     return;
  //   } else {
  //     setInputErrorPassword(false);
  //   }
  //   if (!address) {
  //     setInputErrorAddress(true);
  //     const addressInput = document.getElementById("addressInput");
  //     addressInput && addressInput.focus();
  //     return;
  //   } else {
  //     setInputErrorAddress(false);
  //   }
  //   if (!city) {
  //     setInputErrorCity(true);
  //     const cityInput = document.getElementById("cityInput");
  //     cityInput && cityInput.focus();
  //     return;
  //   } else {
  //     setInputErrorCity(false);
  //   }
  //   if (!sex) {
  //     setInputErrorSelect(true);
  //     const sexInput = document.getElementById("sexInput");
  //     sexInput && sexInput.focus();
  //     return;
  //   } else {
  //     setInputErrorSelect(false);
  //   }
  //   console.log(formData);
    
  // };

  return (
    <div className="user-inf-container">
      <div className="container">
        <form id="form" className="row g-3">
          <InpusCps
            focuslableInPut="emailInput"
            nameLable="Email"
            type="email"
            value= {formData['email'].value}
            placeholder="Pls enter the here :V "
            onChange={(e) => {
              handleInput(e, "email");
            }}
            validations={[required, emailValidate]}
            emailValidate={emailValidate(formData['email'].value)} 
            // inputError={inputErrorEmail}
          />
          <InpusCps
            focuslableInPut="passwordInput"
            nameLable="Pass Word"
            className="form-control"
            type="password"
            value= {formData['password'].value}
            onChange={(e) => {
              handleInput(e, "password");
            }}
            placeholder="Pls enter your pass word"
            // inputError={inputErrorPassWord}
          />
          <InpusCps
            focuslableInPut="addressInput"
            nameLable="Address"
            className="form-control"
            type="text"
            value= {formData['address'].value}
            onChange={(e) => {
              handleInput(e, "address");
            }}
            placeholder="Pls enter your inputAddress"
            // inputError={inputErrorAddress}
          />

          <InpusCps
            focuslableInPut="cityInput"
            nameLable="City"
            className="form-control"
            type="text"
            value= {formData['city'].value}
            onChange={(e) => {
              handleInput(e, "city");
            }}
            placeholder="Pls enter your inputAddress"
            // inputError={inputErrorCity}
          />

          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Giới Tính
            </label>
            <Select
              value= {formData['sex'].value}
              options={options}
              onChange={(selectedOption) => {
                handleInputChange(selectedOption);
              }}
            />

            {/* {inputErrorSelect && (
              <div className="errorDiv">Vui lòng chọn thành phố.</div>
            )} */}
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cps_test;
