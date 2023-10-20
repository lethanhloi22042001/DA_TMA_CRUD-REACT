const initial_state = {
  arrUser: [],
  user: {},
};

const userReducer = (state = initial_state, action) => {

  console.log('Reducer action',action);
  switch (action.type) {
    //1 User
    case "GET_ONE_USER_SUCCESS":
      let copyUser = { ...state };
      copyUser.user = action.data;
      return { ...copyUser };

    // Users
    case "GET_ALLUSER_SUCCESS":
      let copyArrUser = { ...state };
      copyArrUser.arrUser = action.data;
      return { ...copyArrUser };

    case "GET_ALLUSER_FAIL":
      console.log("GET_ALLUSER_FAIL");
      return { ...state };

    case "CREATE_USER_SUCCESS":
      let copyCreateUser = { ...state };
      copyCreateUser = action;
      return { ...copyCreateUser };

    case "CREATE_USER_FAIL":
      console.log("CREATE_USER_FAIL");
      return { ...state };

    default:
      return state; // Trường hợp mặc định trả về state không thay đổi
  }
};

export default userReducer;
