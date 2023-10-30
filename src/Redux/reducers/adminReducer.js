import actionTypes from "../actions/actionTypes";

export const initialState = { // cục dữ liệu
  userArr_Admin : [
  {id :'1',email: '42001@gmail.com', password: '123', address: 'Quang Nam', firstName: 'Lê', lastName: 'Lợi'},
  {id :'2',email: 'lethily@gmail.com', password: '123', address: 'Quang Binh', firstName: 'Lê', lastName: 'Lợi'},
  {id :'3',email: 'lethiA@gmail.com', password: '123', address: 'Quang TRI', firstName: 'Lê', lastName: 'Lợi'},
  {id :'4',email: 'lethiB@gmail.com', password: '123', address: 'HUe', firstName: 'Lê', lastName: 'Lợi'},
 
],
  user_Admin: {},
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) { 
    // CREATE
    case actionTypes.CREATE_USER_ADMIN_SUCCESS:
      let copyState = {...state} ; 
      console.log('action.data',action.data);
      copyState.userArr_Admin = [...copyState.userArr_Admin, action.data] ; 
      return {
        ...copyState
      };
    case actionTypes.CREATE_USER_ADMIN_FAILED:
      return {
        ...state,
      };
    // DELETE
    case actionTypes.DELETE_USER_ADMIN_SUCCESS:
      const userIdToDelete = action.userId;
      
      const updatedUserArr = state.userArr_Admin.filter(
        (user) => user.id !== userIdToDelete
      );

      return {
        ...state,
        userArr_Admin: updatedUserArr, // Cập nhật userArr_Admin với mảng đã cập nhật
      };

       
    default:
      return state;
  }
};

export default adminReducer;
