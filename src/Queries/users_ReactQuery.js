import { useQuery, useMutation } from "react-query";
import instance from "../axios/axios";
import userService from "../Services/userService";

// Query để lấy tất cả người dùng
export const useGetAllUsers = () => {
  return useQuery("users", async () => {
    const response = await userService.getAllUser("ALL");
    return response.users;
  });
};

// Mutation để tạo người dùng mới
export const useCreateUser = () => {
  return useMutation((userData) => {
    return instance.post("/api/create-new-user", userData);
  });
};

// Mutation để xoá người dùng
export const useDeleteUser = () => {
  return useMutation((userId) => {
    return  userService.deleteNewUserService(userId);
  });
};
