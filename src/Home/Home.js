import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";
import Footer from "../Footer/Footer";
import Cps_Home from "../Components/Cps_Home";

const Home = () => {
  return (
    <>
      <Header></Header>
      {/* <Cps_Home  />    */}
      <Outlet />

      <Footer></Footer>
    </>
  );
};

export default Home;
{
  /* <Outlet/>  Chứa các component của Todo (Nơi xuất dữ liệu) */
}
{
  /* <Cps_Home/>  Chứa các Input -> có thằng con là : Input_cps */
}
{
  /* Cái mình cần => Lấy dữ liệu từ Outlet nạp cho thằng  <Cps_Home/> */
}
