import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

//interceptor để xử lý lỗi từ phản hồi của API (dùng then catch)
instance.interceptors.response.use((response) => {
  // console.log(response, "1");
  const { data } = response;
  return response.data;
});
instance.interceptors.request.use((config) => {
  // console.log(config, "2");
  return config;
});

export default instance;
