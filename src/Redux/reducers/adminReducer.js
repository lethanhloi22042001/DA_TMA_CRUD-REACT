import actionTypes from "../actions/actionTypes";

export const initialState = {
  // cục dữ liệu
  userArr_Admin: [
    {
      id: "1",
      email: "42001@gmail.com",
      password: "123",
      address: "Quang Nam",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "2",
      email: "lethily@gmail.com",
      password: "123",
      address: "Quang Binh",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "3",
      email: "lethiA@gmail.com",
      password: "123",
      address: "Quang TRI",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "4",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "5",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "6",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "7",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "8",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "9",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "10",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "11",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "12",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "13",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "14",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "15",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "16",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "17",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "4",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
    {
      id: "4",
      email: "lethiB@gmail.com",
      password: "123",
      address: "HUe",
      firstName: "Lê",
      lastName: "Lợi",
    },
  ],
  user_Admin: {},
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
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
      state.userArr_Admin.splice(action.userId - 1, 1);

    case actionTypes.UPDATE_USER_ADMIN_SUCCESS:
      // console.log("action.data.email", action.data.email);
      console.log(action, "sction");
      const index = state.userArr_Admin.findIndex(
        (item) => item.id === action.data.id
      );
      console.log(index, "indexx");

      if (index !== -1) {
        let newObjectState = { ...state.userArr_Admin[index] };
        console.log("data INPUT ", action.data);
        newObjectState = {
          ...action.data,
        };
        console.log("new2", newObjectState);
        state.userArr_Admin.splice(index, 1, newObjectState);
        console.log("new 3", state.userArr_Admin);
      } else {
        console.log("index wrong", index);
      }
    // console.log(state.userArr_Admin[Index], '1');

    // state.userArr_Admin[Index] = {
    //   ...state.userArr_Admin[Index],
    //   email: action.data.email,
    //   firstName: action.data.firstName,
    //   lastName: action.data.lastName,
    //   address: action.data.address,
    // };

    default:
      return state;
  }
};

export default adminReducer;
