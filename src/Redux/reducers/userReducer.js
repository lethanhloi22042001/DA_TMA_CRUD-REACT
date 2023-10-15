import { ADMIN_ARR,USER_ARR ,UPDATE_BOOK} from '../actions/userAction'; // Đảo từ adminArr thành ADMIN_ARR

const initial_state = {
  books: {
    id: 1, title: 'Old Title', author: 'Old Author' 
  },
  giam: {
    email: "củ chuối",
    name: 'đào'
  },
  reset : [2,3,1,6,7,4],
  number : {
    hello : 2,
    count : 0,
  },
  arrUser : [],
  user : null,
};

const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADMIN_ARR:  
      return { ...state, books :'hello' };
    case USER_ARR:  
      return { ...state, brr  :'wou ai ni'};
    case UPDATE_BOOK:  
    console.log('action of handle clcik',action);
      let copyState = {...state}
      copyState.books = action.payload
      console.log('copyState new',copyState);
      return { ...state, brr  :'wou ai ni'};
    case 'SET_NUMBER' : 
      let copyStates = {...state}
      copyStates.number.count = action.data ;
      return {...copyStates};
    case 'GET_ALL_USER' :
      let copyArrUser = {...state}
      copyArrUser.arrUser = action.data
      return {...copyArrUser}
    case 'DELETE_ONE_USER' : //Trường hợp này cần gọi lại hàm getAll
      let copyDeleteUser = {...state}
      copyDeleteUser.arrUser = action.data
      return {...copyDeleteUser}
    case 'GET_USER' :  
      let copyUser = {...state}
      console.log('action.data',action.data);
      copyUser.user = action.data
      return {...copyUser}
    
    default:
      
      return state; // Trường hợp mặc định trả về state không thay đổi
  }
};

export default userReducer;
