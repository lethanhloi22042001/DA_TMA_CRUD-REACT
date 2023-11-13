import actionTypes from "../actions/actionTypes";

export const initialState = {
  // cục dữ liệu
  userArr_Admin: [
    {
      id: "1",
      email: "quangHuy@gmail.com",
      password: "123",
      address: "Quang Nam",
      firstName: "Lê",
      lastName: "Lợi",
      phoneNumber: "08766291022",
      ErollNumber: "9010923912838102",
      days: "22/04/2001",
    },
    {
      id: "2",
      email: "lethanhloi@gmail.com",
      password: "123",
      address: "Quang Nam",
      firstName: "Huy",
      lastName: "Lợi",
      phoneNumber: "08766291022",
      ErollNumber: "9010923912838102",
      days: "22/04/2001",
    },
    {
      id: "3",
      email: "quynhnhu@gmail.com",
      password: "123",
      address: "Quang Nam",
      firstName: "Hoàng",
      lastName: "Lợi",
      phoneNumber: "08766291022",
      ErollNumber: "9010923912838102",
      days: "22/04/2001",
    },
    {
      id: "4",
      email: "HoangNam@gmail.com",
      password: "123",
      address: "Quang Nam",
      firstName: "Lê",
      lastName: "Linh",
      phoneNumber: "08766291022",
      ErollNumber: "9010923912838102",
      days: "22/04/2001",
    },
  ],
  user_Admin: {},
  Login_Admin: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case actionTypes.LOGIN_USER_ADMIN_SUCCESS:
      let userAdmin_IsLogin = { ...state };
      userAdmin_IsLogin.Login_Admin =  action.data;
      return {
        ...userAdmin_IsLogin,
      };

      
    // CREATE
    case actionTypes.CREATE_USER_ADMIN_SUCCESS:
      let copyState = { ...state };
      copyState.userArr_Admin = [...copyState.userArr_Admin, action.data];
      return {
        ...copyState,
      };

    case actionTypes.CREATE_USER_ADMIN_FAILED:
      state.userArr_Admin = [];
    // DELETE
    case actionTypes.DELETE_USER_ADMIN_SUCCESS:
      const indexItem = state.userArr_Admin.indexOf(action.userId);
      // state.userArr_Admin.splice(indexItem, 1);
      let copyState_delete = { ...state };
      copyState_delete.userArr_Admin.splice(indexItem, 1);
      return {
        ...copyState_delete,
      };
    case actionTypes.UPDATE_USER_ADMIN_SUCCESS:
      const index = state.userArr_Admin.findIndex(
        (item) => item.id === action.data.id
      );
      console.log("index update", index);
      if (index !== -1) {
        let newObjectState = { ...state.userArr_Admin[index] };
        newObjectState = {
          ...action.data,
        };
        state.userArr_Admin.splice(index, 1, newObjectState);
      }
      state.userArr_Admin[index] = {
        ...state.userArr_Admin[index],
        email: action.data.email,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        address: action.data.address,
      };
    default:
      return state;
  }
};

export default adminReducer;
