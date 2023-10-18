const initial_state = {
  arrUser : [],
  user : null,
};

const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    
    case 'GET_ALLUSER_SUCCESS' :
      let copyArrUser = {...state}
      copyArrUser.arrUser = action.data
      return {...copyArrUser}

    case 'GET_ALLUSER_FAIL' :
        console.log('GET_ALLUSER_FAIL');
        return {...state}

        

    case 'CREATE_USER_SUCCESS' :
      let copyCreateUser = {...state}
      copyCreateUser = action
      return {...copyCreateUser}

    case 'CREATE_USER_FAIL' :
        console.log('CREATE_USER_FAIL');
        return {...state}
    
    default:
      
      return state; // Trường hợp mặc định trả về state không thay đổi
  }
};

export default userReducer;
