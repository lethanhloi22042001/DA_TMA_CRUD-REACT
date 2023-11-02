import React from "react";


const Student_List = ()=>{
    return(
        <div className="student_form">
           <div className="head_btn">
                <h1>Student_List</h1>
                <button >Add New Student</button>
           </div>
           <hr  width="60%" align="center" />
           <div className="head-name">
                    <div className="name_thead">Name</div>
                    <div className="name_thead">Email</div>
                    <div className="name_thead">Phone</div>
                    <div className="name_thead">Eroll Number</div>
                    <div className="name_thead">Date of Admission</div>
           </div>
           <div className="head-list">
                <div className="contain_item">
                        <div className="item_data">IMG</div>
                        <div className="item_data">Name</div>
                        <div className="item_data">Lethanhloi22042001@gmail.com</div>
                        <div className="item_data">09728920831</div>
                        <div className="item_data">91929390129319094</div>
                        <div className="item_data">22/04/2001</div>
                        <button  className="item_data" >Sửa</button>
                        <button  className="item_data" >Xoá</button>
                </div>
           </div>
        </div>
    );

}

export default Student_List ;