import React, { useState, useEffect } from "react";
import Select from "react-select";
import InpusCps from "./Input_cps";
import "./dsa.css";
import validator from "validator";

const Cps_Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [sex, setSex] = useState(null);
  const [formData, setFormData] = useState(null);
  const [inputErrorEmail, setInputErrorEmail] = useState(false);
  const [inputErrorPassWord, setInputErrorPassword] = useState(false); 
  const [inputErrorCity, setInputErrorCity] = useState(false); 
  const [inputErrorAddress, setInputErrorAddress] = useState(false); 
  const [inputErrorSelect, setInputErrorSelect] = useState(false); 
  const options = [
    { value: "Nam", label: "Nam" },
    { value: "Nữ", label: "Nữ" },
    { value: "Khác", label: "Khác" },
  ];

  const required = (value) => {
    if (!value.toString().trim().length) {
      return "require";
    }
  };

  const emailValidate = (value) => {
    return validator.isEmail(value);
  };

  const handleInput = (e, name) => {
    let value = e.target.value.trim();
    if (name === "email") {
      emailValidate(value);
      setEmail(e.target.value);
    } else if (name === "password") {
      setPassword(e.target.value);
    } else if (name === "address") {
      setAddress(e.target.value);
    } else if (name === "city") {
      setCity(e.target.value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: e.target.value,
    }));
  };

  const handleInputChange = (selectedOption) => {
    setSex(selectedOption);
    setFormData((prevFormData) => ({
      ...prevFormData,
      sex: selectedOption.value,
    }));
  };
  const handleInputValidation = (inputValue, setInputError, inputId) => {
    if (!inputValue) {
      setInputError(true);
      const inputElement = document.getElementById(inputId);
      inputElement && inputElement.focus();
      return false;
    } else {
      setInputError(false);
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!email) {
    //   setInputErrorEmail(true); // lí do đoạn set trực tiếp ở đây nên chạy xuống đây thì đoạn Input trên kia sẽ bị chạy hết
    //   const emailInput = document.getElementById("emailInput"); // khi đoạn này tiêm vào JSX thì điều gì xảy ra
    //   emailInput && emailInput.focus();
    //   return;
    // } else {
    //   setInputErrorEmail(false);
    // }

    // if (!password) {
    //   setInputErrorPassword(true);
    //   const passwordInput = document.getElementById("passwordInput");
    //   passwordInput && passwordInput.focus();
    //   return;
    // } else {
    //   setInputErrorPassword(false);
    // }
    // if (!address) {
    //   setInputErrorAddress(true);
    //   const addressInput = document.getElementById("addressInput");
    //   addressInput && addressInput.focus();
    //   return;
    // } else {
    //   setInputErrorAddress(false);
    // }
    // if (!city) {
    //   setInputErrorCity(true);
    //   const cityInput = document.getElementById("cityInput");
    //   cityInput && cityInput.focus();
    //   return;
    // } else {
    //   setInputErrorCity(false);
    // }
    // if (!sex) {
    //   setInputErrorSelect(true);
    //   const sexInput = document.getElementById("sexInput");
    //   sexInput && sexInput.focus();
    //   return;
    // } else {
    //   setInputErrorSelect(false);
    // }
  const isEmailValid = handleInputValidation(email, setInputErrorEmail, 'emailInput');
  const isPasswordValid = handleInputValidation(password, setInputErrorPassword, 'passwordInput');
  const isAddressValid = handleInputValidation(address, setInputErrorAddress, 'addressInput');
  const isCityValid = handleInputValidation(city, setInputErrorCity, 'cityInput');
  const isSexValid = handleInputValidation(sex, setInputErrorSelect, 'sexInput');

  if (isEmailValid && isPasswordValid && isAddressValid && isCityValid && isSexValid) {
    console.log(formData);
  }
    console.log(formData);
    
  };

  return (
    <div className="user-inf-container">
      <div className="container">
        <form id="form" className="row g-3">
          <InpusCps
            focuslableInPut="emailInput"
            nameLable="Email"
            type="email"
            value={email}
            placeholder="Pls enter the here :V "
            onChange={(e) => {
              handleInput(e, "email");
            }}
            validations={[required, emailValidate]}
            emailValidate={emailValidate(email)} 
            inputError={inputErrorEmail}
          />
          <InpusCps
            focuslableInPut="passwordInput"
            nameLable="Pass Word"
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => {
              handleInput(e, "password");
            }}
            placeholder="Pls enter your pass word"
            inputError={inputErrorPassWord}
          />
          <InpusCps
            focuslableInPut="addressInput"
            nameLable="Address"
            className="form-control"
            type="text"
            value={address}
            onChange={(e) => {
              handleInput(e, "address");
            }}
            placeholder="Pls enter your inputAddress"
            inputError={inputErrorAddress}
          />

          <InpusCps
            focuslableInPut="cityInput"
            nameLable="City"
            className="form-control"
            type="text"
            value={city}
            onChange={(e) => {
              handleInput(e, "city");
            }}
            placeholder="Pls enter your inputAddress"
            inputError={inputErrorCity}
          />

          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Giới Tính
            </label>
            <Select
              value={sex}
              options={options}
              onChange={(selectedOption) => {
                handleInputChange(selectedOption);
              }}
            />

            {inputErrorSelect && (
              <div className="errorDiv">Vui lòng chọn thành phố.</div>
            )}
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

export default Cps_Home;
