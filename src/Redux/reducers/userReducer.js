const initial_state = {
  arrRole :[], 
  arrGender : [],
  arrUser: [], // giá trị khởi tạo , sẽ thay đổi theo thời gian khi các actions gữi đến Reducer
  oneUser: {}, 
};
const userReducer = (state = initial_state, action) => {
  
 
  switch (action.type) {
    //1 User
    case "GET_ONE_USER_SUCCESS":
      let copyUser = { ...state };
      copyUser.oneUser = action.data;
      return { ...copyUser };

    // Users
      // ARR ROLE
    case "GET_ROLE_SUCCESS":
      let copyArrRole = { ...state };
      // let passData_to_Role   = [...copyArrRole.arrRole, action.data]; 
        let convert =  action.data
        copyArrRole.arrRole   =   convert; 
      return { ...copyArrRole };

      // ARR Gender
    case "GET_GENDER_SUCCESS":
      let copyArrGender = { ...state };
      let convertGender =  action.data
      // let passData_to_Gender  =   action.data;
       copyArrGender.arrGender = convertGender ;
      return { ...copyArrGender };

      // 
    case "GET_ALLUSER_SUCCESS":
      let copyArrUser = {...state};
      copyArrUser.arrUser =  action.data;
      return { ...copyArrUser };

     
    case "CREATE_USER_SUCCESS":
      let copyCreateUser = { ...state };
      copyCreateUser = action;
      return { ...copyCreateUser };



    default:
      return state; // Trường hợp mặc định trả về state không thay đổi
  }
};

export default userReducer;
