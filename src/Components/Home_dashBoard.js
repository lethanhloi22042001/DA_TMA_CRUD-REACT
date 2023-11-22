import React, { useEffect, useState } from "react";
import "./Scss/Home_dashBoard.scss";
import studentIcon from './Pictures/Outlets/Home/students.png'
import course from './Pictures/Outlets/Home/course.png'
import payments from './Pictures/Outlets/Home/payments.png'
import users from './Pictures/Outlets/Home/users.png'



const Home_dashBoard = ()=>{

    return (
        <>
              <div className="home_form">
                <div className="form_chung form-1">
                    <div className="top">
                        {/* <div className="contain_img"> */}
                            <img src={studentIcon} alt=""/>
                        {/* </div> */}
                        <h1>Students</h1>
                    </div>
                    <div className="bottom">
                        <div className="number">
                            243
                        </div>
                    </div>
                </div>
                <div className="form_chung form-2">
                    <div className="top">
                        <img src={course} alt=""/>
                        <h1>Students</h1>
                    </div>
                    <div className="bottom">
                        <div className="number">
                            243
                        </div>
                    </div>
                </div>
                <div className="form_chung form-3">
                    <div className="top">
                        <img src={payments} alt=""/>
                        <h1>Students</h1>
                    </div>
                    <div className="bottom">
                        <div className="number">
                            243
                        </div>
                    </div>
                </div>
                <div className="form_chung form-4">
                    <div className="top">
                        <img src={users} alt=""/>
                        <h1>Students</h1>
                    </div>
                    <div className="bottom">
                        <div className="number">
                            243
                        </div>
                    </div>
                </div>

                 

              </div>
        </>
    )

}

export default Home_dashBoard;