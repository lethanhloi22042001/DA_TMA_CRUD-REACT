const initial_state = {
  arrUser: [], //
  user: {}, //arrUser và user là hai phần của trạng thái (state) được quản lý bởi Redux
};

//userReducer là hàm để => thay đổi xử lí hàm trạng trái
//state = initial_state : Là nơi lưu trữ toàn bộ trạng thái của ứng dụng ở mức Global
//action : đối tượng trả về action có thể gồm "1 chuỗi String + data(được xử lí ở actions)"
//store chứa( state = initial_state) : chứa toàn bộ thông tin trạng thái của ứng dụng(arrUser,user)

const userReducer = (state = initial_state, action) => {
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
