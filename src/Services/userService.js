import instance from "../axios/axios";

const get_AllCode = (role) => {
  return instance.get(`/api/getallcode?type=${role}`);
};

const getAllUser = (inputId) => {
  return instance.get(`/api/get-all-users?id=${inputId}`,inputId);
};

const createNewUserService = (data) => {
  console.log('data API POST',data);
  return instance.post("/api/create-new-user", data);
};

const deleteNewUserService = (userId) => {
  return instance.delete("/api/delete-user", { data: { id: userId } });
};
const updateUser = (userId) => {
  return instance.put("/api/edit-user", userId );
};

const userService = {
  getAllUser,createNewUserService,deleteNewUserService ,updateUser,get_AllCode
}

export default userService ;