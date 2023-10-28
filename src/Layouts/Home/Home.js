import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      {/* <Footer></Footer> */}
    </>
  );
};

export default Home;