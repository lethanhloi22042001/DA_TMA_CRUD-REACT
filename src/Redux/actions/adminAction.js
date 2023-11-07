import actionTypes from "./actionTypes";

//CREATE_USER_ADMIN_SUCCESS

  export const createNewUserAdmin = (data) => ({
    type: actionTypes.CREATE_USER_ADMIN_SUCCESS,
    data : data,
  });

  //DELETE_USER_ADMIN_SUCCESS
  export const deleteUserRedux_Admin = (userId) => ({
    type: actionTypes.DELETE_USER_ADMIN_SUCCESS,
    userId : userId,
  });
  export const updateUserAdmin = (data) => ({
    type: actionTypes.UPDATE_USER_ADMIN_SUCCESS,
    data : data,
  });

  //updateUserAdmin
  
  

 