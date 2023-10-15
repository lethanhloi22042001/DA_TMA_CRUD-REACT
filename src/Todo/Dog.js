import "./Dog.scss";
import React, { useEffect, useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userService from "../Services/userService";
//
import { CpsHomeContext } from '../Components/Cps_Home';

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

const Dog = ( props) => {
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
  const [isEdit,setIsEdit] = useState(false)
  const dispatch = useDispatch();
  const history = useNavigate();
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
      dispatch(getArrUser(data));
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
    dispatch(getUserRedux(user))
    history('/input');
    console.log('Item of Edit',user);
     
  };
   
 

  return (
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>
                {" "}
                Id{" "}
                <span className="icon-arrow">
                  <i className="fas fa-arrow-up"></i>
                </span>
              </th>
              <th>
                {" "}
                Email{" "}
                <span className="icon-arrow">
                  <i className="fas fa-arrow-up"></i>
                </span>
              </th>
              <th>
                {" "}
                Firs tName{" "}
                <span className="icon-arrow">
                  <i className="fas fa-arrow-up"></i>
                </span>
              </th>
              <th>
                {" "}
                Last Name{" "}
                <span className="icon-arrow">
                  <i className="fas fa-arrow-up"></i>
                </span>
              </th>
              <th>
                {" "}
                Address{" "}
                <span className="icon-arrow">
                  <i className="fas fa-arrow-up"></i>
                </span>
              </th>
              <th>
                {" "}
                Password{" "}
                <span className="icon-arrow">
                  <i className="fas fa-arrow-up"></i>
                </span>
              </th>
              <th>
                Handle Button{" "}
                <span className="icon-arrow">
                  <i className="fas fa-arrow-up"></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {arrUser &&
              arrUser.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td> {item.firstName}</td>
                    <td> {item.lastName} </td>
                    <td> {item.address} </td>
                    <td>
                      {" "}
                      <strong> {item.phonenumber} </strong>
                    </td>
                    <td className="btn-addDelete">
                      {/* <p className="status delivered">Delivered</p> */}
                      <button
                        className="status delivered asd1"
                        onClick={() => {
                          handledelete(item);
                        }}
                      >
                        Deleted
                      </button>

                      <button
                        className="status delivered asd"
                        onClick={() => {
                          handleEdit(item);
                        }}
                      >
                        Edit User
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
  );
};

export default Dog;
