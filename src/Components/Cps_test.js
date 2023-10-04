// //1. useState({}) nó là mảng cũng được nhưng hay dùng là object
//     //Lấy dữ liệu động
//     //1. Lấy dữ liệu động input_cps['city'].value  <--> Lấy dữ liệu tĩnh city.value

//     //set dữ liệu động
//     //setInput_cps({...input_cps,[name]: { value : value, error: required(value) },});                                                                                  //1. Vì nó là Object nên phải dùng Object.keys(input_cps).map để loop các phần tử

//     //Loop 1 Object chứa các Object ==> cái này dùng cho useState vì nó chứa các Object
//     //Object.keys(input_cps).map

//     // khác nhau giữa {Object.keys(input_cps).map((item,index)=>())} và{Object.keys(input_cps).map((item,index)=>{})}
//     // ()=>{dùng để trả ra đối tượng}  <--> ()=>(dùng để trả ra render Hoặc trả về JSX hay Component)
// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import InpusCps from "./Input_cps";
// import "./dsa.css";
// import validator from "validator";

// const Cps_test = () => {
//   const [inputError, setInputError] = useState(false); // Thêm JSX báo lỗi
//   const [sex, setSex] = useState("");
//   const [input_cps, setInput_cps] = useState({
    
//     email: { value: "", error: false },
//     password: { value: "", error: false },
//     address: { value: "", error: false },
//     city: { value: "", error: false },
//   });
//   const [errorEmail,setInputErrorEmail] = useState(Boolean);
//   const [errorPassword,setInputErrorPassword] = useState(Boolean);
//   const [errorAddress,setInputErrorAddress] = useState(Boolean);
//   const [errorCity,setInputErrorCity] = useState(Boolean);

//   const options = [
//     { value: "Nam", label: "Nam" },
//     { value: "Nữ", label: "Nữ" },
//     { value: "Khác", label: "Khác" },
//   ];
//   const required = (value) => {
//     return !value.toString().trim().length;
//   };
//   const emailValidate = (value) => {
//     return validator.isEmail(value);
//   };

//   const handleInput = (e, name) => {
//     const value = e.target.value.trim();
//     setInput_cps({
//       ...input_cps,
//       [name]: { value: value, error: required(value) },
//     });
//     setInputError(false);
//   };

//   const handleSelectChange = (selectedOption) => {
//     setSex(selectedOption);
//   };
 
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) {
//       setInputErrorEmail(true); // lí do đoạn set trực tiếp ở đây nên chạy xuống đây thì đoạn Input trên kia sẽ bị chạy hết
//       const emailInput = document.getElementById("emailInput"); // khi đoạn này tiêm vào JSX thì điều gì xảy ra
//       emailInput && emailInput.focus();
//       return;
//     } else {
//       setInputErrorEmail(false);
//     }

//     if (!password) {
//       setInputErrorPassword(true);
//       const passwordInput = document.getElementById("passwordInput");
//       passwordInput && passwordInput.focus();
//       return;
//     } else {
//       setInputErrorPassword(false);
//     }
//     if (!address) {
//       setInputErrorAddress(true);
//       const addressInput = document.getElementById("addressInput");
//       addressInput && addressInput.focus();
//       return;
//     } else {
//       setInputErrorAddress(false);
//     }
//     if (!city) {
//       setInputErrorCity(true);
//       const cityInput = document.getElementById("cityInput");
//       cityInput && cityInput.focus();
//       return;
//     } else {
//       setInputErrorCity(false);
//     }
     
//     console.log(input_cps);

//   };
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const formValues = { ...input_cps, sex: sex ? sex.value : "" };
//   //   console.log(formValues);
//   //   // for (const key in input_cps) {
//   //   //   if (!input_cps[key].value) {
//   //   //     setInputError("false");
//   //   //     const inputElement = document.getElementById(`${key}Input`);
//   //   //     inputElement && inputElement.focus();
//   //   //   }
//   //   // }
    
//   // };
//   return (
//     <div className="user-inf-container">
//       <div className="container">
//         <form id="form" className="row g-3">
//           {Object.keys(input_cps).map((name, index) => (
//             <InpusCps
//               key={index}
//               focuslableInPut={`${name}Input`}
//               nameLable={name.charAt(0).toUpperCase() + name.slice(1)}
//               type={name === "password" ? "password" : "text"}
//               value={input_cps[name].value}
//               placeholder={`Pls enter your ${name}`}
//               onChange={(e) => handleInput(e, name)}
//               inputError={inputError} 
              
//             />
//           ))}

//           <div className="col-md-4">
//             <label htmlFor="inputState" className="form-label">
//               Giới Tính
//             </label>
//             <Select
//               value={sex}
//               options={options}
//               //  onChange={(e)=>{handleSelectChange(e.target.value)}}
//               onChange={(selectedOption) => handleSelectChange(selectedOption)}
//             />
//             {/* {inputError && <div className="errorDiv">Vui lòng chọn giới tính.</div>} */}
//           </div>

//           <div className="col-12">
//             <button
//               type="submit"
//               className="btn btn-primary"
//               onClick={(e) => {
//                 handleSubmit(e);
//               }}
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Cps_test;
/// TODAY









///
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
  const [inputError, setInputError] = useState(false);
  // const [inputErrorEmail, setInputErrorEmail] = useState(false);
  // const [inputErrorPassWord, setInputErrorPassword] = useState(false); 
  // const [inputErrorCity, setInputErrorCity] = useState(false); 
  // const [inputErrorAddress, setInputErrorAddress] = useState(false); 
  // const [inputErrorSelect, setInputErrorSelect] = useState(false); 
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
  const isEmailValid = handleInputValidation(email, setInputError, 'emailInput');
  const isPasswordValid = handleInputValidation(password, setInputError, 'passwordInput');
  const isAddressValid = handleInputValidation(address, setInputError, 'addressInput');
  const isCityValid = handleInputValidation(city, setInputError, 'cityInput');
  const isSexValid = handleInputValidation(sex, setInputError, 'sexInput');
  // const isEmailValid = handleInputValidation(email, setInputErrorEmail, 'emailInput');
  // const isPasswordValid = handleInputValidation(password, setInputErrorPassword, 'passwordInput');
  // const isAddressValid = handleInputValidation(address, setInputErrorAddress, 'addressInput');
  // const isCityValid = handleInputValidation(city, setInputErrorCity, 'cityInput');
  // const isSexValid = handleInputValidation(sex, setInputErrorSelect, 'sexInput');

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
            // inputError={inputErrorEmail}
            inputError={inputError}
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
            // inputError={inputErrorPassWord}
            inputError={inputError}
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
            inputError={inputError}
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
            inputError={inputError}
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

            {inputError && (
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
