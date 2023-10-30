import actionTypes from "./actionTypes";
import userService from "../../Services/adminService";
import { initialState } from "../reducers/adminReducer";

//CREATE_USER_ADMIN_SUCCESS
export const createUserRedux_Admin = (data) => {
    return async (dispatch, getState) => {
      try {
        dispatch(createNewUserAdmin(data));
      } catch (error) {
        console.log("createUserFail",error);
      }
    };
  };

  export const createNewUserAdmin = (data) => ({
    type: actionTypes.CREATE_USER_ADMIN_SUCCESS,
    data : data,
  });
  
  //DELETE_USER_ADMIN_SUCCESS

  export const deleteUserRedux_Admin = (userId) => {
   
      try {
        const userToDelete = initialState.userArr_Admin.find((user) => user.id === userId);
        if (userToDelete) {
          const indexToDelete = initialState.userArr_Admin.indexOf(userToDelete);
          initialState.userArr_Admin.splice(indexToDelete, 1); 
          return(userToDelete);
        } else {
          return("User not found");
        }
      } catch (error) {
        console.log("Delete Faild",error);
      }
  };