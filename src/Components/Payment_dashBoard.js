import React, { useEffect, useState } from "react";
import users from "./Pictures/top/sort 1.png";
import eye from "./Pictures/top/eye 1.png";
import { useSelector } from "react-redux";
import "./Scss/Payment_dashBoard.scss";
const Payment_dashBoard = () => {
  const arrUserAdmin = useSelector((state) => state.admin.userArr_Admin);

  return (
    <div>
      <div className="student_form">
        <div className="head_btn" style={{ marginBottom: "10px" }}>
          <h1>Payment Details</h1>
          <img src={users} alt="" />
        </div>

        <div className="contain_table">
          <hr
            width="100%"
            align="center"
            style={{ padding: "0", margin: "0" }}
          />
          <div className="head_name">
            <div className="name_theads t1">Name</div>
            <div className="name_theads t2">Payment Schedule</div>
            <div className="name_theads t3">Bill Number</div>
            <div className="name_theads t4">Amount Paid</div>
            <div className="name_theads t5">Balance amount</div>
            <div className="name_theads t6">Date</div>
            <div className="name_theads t7"></div>
          </div>
          <div className="contain_head_list">
            {arrUserAdmin.map((item, index) => {
              return (
                <div className="head-list" key={index}>
                  <div className="item_datas t1">
                    {item.firstName}
                    {/* <img
                      className=""
                      src="https://picsum.photos/200"
                      alt="Image description"
                    /> */}
                  </div>
                  <div className="item_datas t2">{item.phoneNumber}</div>
                  <div className="item_datas t3">{item.ErollNumber}</div>
                  <div className="item_datas t4">{item.phoneNumber}</div>
                  <div className="item_datas t5">{item.password}</div>
                  <div className="item_datas t6">{item.days}</div>
                  <div className="item_data t7">
                    <img src={eye} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment_dashBoard;
