import React, { useState } from "react";

const InpusCps = ({ label, type, placeholder, errors, register, value,defaultValue }) => {
  const isEverythingGood = !errors[label] && value !== ""; 
  // const inputStyles = {
  //   marginBottom: "20px",
  //   borderWidth: "1px 1px 1px 14px",
  //   borderStyle: "solid",
  //   borderColor:
  //     "rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)",
  //   borderImage: "initial",
  //   background: "rgb(251, 236, 242)",
  // };
  return (
    <>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        // style={errors[label] && errors[label].message && inputStyles}
        type={type}
        className={`form-control `}
        id={label}
        placeholder={placeholder}
        defaultValue = {defaultValue}
        {...register(label, {
          required: `Vui lòng nhập vào ${label}`,
          maxLength: {
            value: label === "password" || label === "email" ? 30 : null,
            message:
              label === "password" || label === "email"
                ? `${label} không được dài quá 25 ký tự`
                : null,
          },
            // validate: value => value === 'lethanha@gmail.com' || 'Everything look good'  
        })}
      />
      <span style={{color : 'red'}}>
        {/* {errors[label] && errors[label].validate} */}
        {errors[label] && errors[label].message}
        {errors[label] && errors[label].message && isEverythingGood && "Everything looks good"}
      </span>
    </>
  );
};

export default InpusCps;
