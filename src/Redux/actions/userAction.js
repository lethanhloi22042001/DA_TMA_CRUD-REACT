import actionTypes from "./actionTypes";
import userService from "../../Services/userService";

//Get 1 User
export const getOneUser = (data) => ({
  type: actionTypes.GET_ONE_USER_SUCCESS,
  data: data,
});

// Get All User
export const getAllUserSucess = (data) => ({
  data: data,
  type: actionTypes.GET_ALLUSER_SUCCESS,
});
export const getAllUserRedux = () => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.getAllUser("ALL");
      if (res && res.errCode === 0) {
        dispatch(getAllUserSucess(res.users.reverse()));
      } else {
        dispatch(getAllUserFail());
      }
    } catch (errCode) {
      dispatch(getAllUserFail());
      console.log("getAllUserFail", errCode);
    }
  };
};
export const getAllUserFail = () => ({
  type: actionTypes.GET_ALLUSER_FAIL,
});

// Create User

export const createUserRedux = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.createNewUserService(data);
      console.log("createUserRedux res", res);
      if (res && res.errCode === 0) {
        dispatch(createUserSuccess());
        dispatch(getAllUserRedux());
      } else {
        dispatch(createUserFail());
      }
    } catch (error) {
      dispatch(createUserFail());
      console.log("createUserFail");
    }
  };
};

export const createUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const createUserFail = () => ({
  type: actionTypes.CREATE_USER_FAIL,
});

// Delete User
export const deleteUserRedux = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.deleteNewUserService(userId);
      if (res && res.errCode === 0) {
        dispatch(deleteUserSuccess());
        dispatch(getAllUserRedux());
      } else {
        dispatch(deleteUserFail());
      }
    } catch (error) {
      dispatch(deleteUserFail());
      console.log("deleteUserFail");
    }
  };
};
export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUserFail = () => ({
  type: actionTypes.DELETE_USER_FAIL,
});

// Update User  
export const updateUserRedux = (data) => {
  return async (dispatch, getState) => {
    try {
      console.log('data Redux0',data);
      let res = await userService.updateUser(data);
      console.log('data Redux1',res);
      if (res && res.errCode === 0) {
        console.log('data Redux2',res);
        dispatch(updateUserSuccess(res));
        dispatch(getAllUserRedux());
      } else {
        dispatch(updateUserFail());
      }
    } catch (error) {
      dispatch(updateUserFail());
      console.log("updateUserFail");
    }
  };
};
export const updateUserSuccess = (data) => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
  data : data,
});

export const updateUserFail = () => ({
  type: actionTypes.UPDATE_USER_FAIL,
});
