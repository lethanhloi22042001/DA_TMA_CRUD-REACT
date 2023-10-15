 import React, { useState } from "react";

const InpusCps = ({ label, type, placeholder, errors, register,value }) => {
  const isEverythingGood =  !errors[label] && value !== '';
  return (
    <div className={`col-md-6 input-control`}>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={`form-control `}
        id={label}
        placeholder={placeholder}
        {...register(label, {
          required: `Vui lòng nhập vào ${label}`,
          // validate: { // validate cho phép customize  <=> của errors
          //   lookGood: (value) => {
          //     return value !== "test" ? "Everything looks good" : "";
          //   },
          // },     
          maxLength: {
            value: label === "password" || label === "email" ? 25 : null,
            message:
              label === "password" || label === "email"
                ? `${label} không được dài quá 25 ký tự`
                : null,
          },
        })}
      />
      <span>
        {errors[label] && errors[label].message}
        {errors[label] && errors[label].message && isEverythingGood && "Everything looks good"}
      </span>
       
    </div>
  );
};

export default InpusCps;

