import adminReducer from "../Redux/reducers/adminReducer";
import { initialState } from "../Redux/reducers/adminReducer";
 
  const createNewUserAdmin = (data) => {
    return new Promise(async (resolve, reject) =>( {
        email: data.email,
        password:  data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: data.phonenumber,
        gender: data.gender,
        image: data.avatar
    }))
  };
  
  const deleteUserAdmin = (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const userToDelete = initialState.userArr_Admin.find((user) => user.id === userId);
        console.log('deleteUserAdmin initialState.userArr_Admin',initialState.userArr_Admin);
        if (userToDelete) {
          const indexToDelete = initialState.userArr_Admin.indexOf(userToDelete);
          initialState.userArr_Admin.splice(indexToDelete, 1); 
          resolve(userToDelete);
          console.log('userToDelete',initialState.userArr_Admin);
        } else {
          reject("User not found");
        }
      } catch (error) {
        reject(error);
      }
    });
};

  

  const adminService = {
        createNewUserAdmin,deleteUserAdmin
  }
  
  export default adminService ;