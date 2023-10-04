import logo from "../logo.svg";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";
import Footer from "../Footer/Footer";
import Cps_Home from "../Components/Cps_Home";
// import Cps_test from "../Components/Cps_test";

const Home = () => {
  return (
    <>
    <Header></Header>
      <Outlet/>
      <Cps_Home></Cps_Home>
      {/* <Cps_test></Cps_test> */}
    <Footer></Footer>
    </>
  );
};

export default Home;
