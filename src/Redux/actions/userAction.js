import actionTypes from "./actionTypes";
import userService from "../../Services/userService";

//========= Get 1 User===============
export const getOneUser = (data) => ({
  type: actionTypes.GET_ONE_USER_SUCCESS,
  data: data,
});
//========= Get All CODE===============
export const getGENDERSucess = (data) => ({
  data: data,
  type: actionTypes.GET_GENDER_SUCCESS,
});

export const getGender = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.get_AllCode(data);
      console.log(res, "res");
      dispatch(getGENDERSucess(res.data));
    } catch (errCode) {
      console.log("getAllUserFail", errCode);
    }
  };
};

export const getRole = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.get_AllCode(data);
      let convert = res.data;
      dispatch(getRoleSucess(convert));
    } catch (errCode) {
      console.log("getRole Fail", errCode);
    }
  };
};
export const getRoleSucess = (data) => ({
  data: data,
  type: actionTypes.GET_ROLE_SUCCESS,
});

//========= Get All User===============
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
        // dispatch(getGender("GENDER"));
        // dispatch(getRole('ROLE'));
      }
    } catch (errCode) {
      console.log("getAllUserFail", errCode);
    }
  };
};

//========= CREATE USER===============

export const createUserRedux = (data) => {
  return async (dispatch, getState) => {
    try {
      console.log("data", data);
      let res = await userService.createNewUserService(data);
      if (res && res.errCode === 0) {
        dispatch(createUserSuccess());
        dispatch(getAllUserRedux());
      }
    } catch (error) {
      console.log("createUserFail", error);
    }
  };
};

export const createUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

// ========= DELETE===============
export const deleteUserRedux = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.deleteNewUserService(userId);
      console.log("trsRES", res);
      if (res && res.errCode === 0) {
        dispatch(deleteUserSuccess());
        dispatch(getAllUserRedux());
      }
    } catch (error) {
      console.log("deleteUserFail", error);
    }
  };
};
export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

// ========= UpDATE===============
export const updateUserRedux = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.updateUser(data);
      if (res && res.errCode === 0) {
        dispatch(updateUserSuccess(res));
        dispatch(getAllUserRedux());
      }
    } catch (error) {
      console.log("error Update", error);
    }
  };
};
export const updateUserSuccess = (data) => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
  data: data,
});
