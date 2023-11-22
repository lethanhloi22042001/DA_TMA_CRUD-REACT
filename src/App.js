import Home from "./Layouts/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import Chicken from "./Todo/Chicken";
import Dog from "./Todo/Dog";
import Duck from "./Todo/Duck";
import About from "./Layouts/Navigation/About";
import DangNhap from "./views/DangNhap";
import Dash_board from "./views/Admin/Dash_board";
import ParentComponent from "./Todo/ChildToParents/ParentComponent";
import ComponentA from "./Todo/UseContext/ComponentA";
import CounterRedux_A from "./Todo/ReduxLib_ReDucerReact/CounterRedux_A";
import CounterRedux_B from "./Todo/ReduxLib_ReDucerReact/CounterRedux_B";
import ReDucerReact from "./Todo/ReduxLib_ReDucerReact/ReDucerReact";
import { useEffect, useState } from "react";
import { AuthProvider } from "./Context/AuthProvider";
import RequireAuth from "./hooks/RequireAuth";
import Student_List from "./Components/Student_List";
import Home_dashBoard from "./Components/Home_dashBoard";
import Payment_dashBoard from "./Components/Payment_dashBoard";
import Create_User from "./views/Admin/CreateUser";
import { useSelector } from "react-redux";

function App() {
  const is_Login_Admin = useSelector((state) => state.admin.Login_Admin);

  useEffect(() => {

    if (is_Login_Admin === false) {

    }
  }, []); 
  

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public this route */}
            <Route path="/login" element={ is_Login_Admin ? ( <Navigate to="/admin/dash_board" /> ) : (<DangNhap /> ) } />

            {/* Protect this route */}
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Home />}>
                <Route path="/CounterRedux_A" element={<CounterRedux_A />} ></Route>
                <Route path="/CounterRedux_B" element={<CounterRedux_B />}></Route>
              </Route>

              <Route path="/admin/dash_board" element={<Dash_board />}>
                <Route path="student_list" element={<Student_List />}></Route>
                <Route path="createUser" element={<Create_User />}></Route>
                <Route path="payment" element={<Payment_dashBoard />}></Route>
                <Route path="home" element={<Home_dashBoard />}></Route> 
              </Route>

              <Route path="/childToParent" element={<ParentComponent />} ></Route>
              <Route path="/useContext" element={<ComponentA />}></Route>
              
              <Route path="/ReDucerReact" element={<ReDucerReact />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
