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
import { AuthProvider } from './Context/AuthProvider';
import RequireAuth from "./hooks/RequireAuth";
import { userAdmin_IsLogin } from "./Redux/actions";
import { useSelector } from "react-redux";
//khi lưu dữ liệu trên kho reducer của redux, f5 là mất dữ liệu 
// dùng redux persistor để lưu dữ li
function App() {
  
  const [is_Login_Admin,setIs_Login_Admin] = useState(localStorage.getItem('Login_Success'));  
  const is_Login_AdminRedux = useSelector((state) => state.admin.Login_Admin); 
  console.log(' App',is_Login_Admin); 
  console.log(' Redux',is_Login_AdminRedux); 
  return (
    <div className="App" >
      <BrowserRouter>
        <AuthProvider  >
            <Routes>

               {/* Public this route */}
              <Route path="/login" element={is_Login_Admin ? (<Navigate to="/admin/dash_board" /> ) : (<DangNhap  /> )} />
                 
                {/* Protect this route */}
                {/*( is_Login_Admin === null) return <Navigate to="/login" else return <OutLet> */}
              <Route element={<RequireAuth  />}> 
                  <Route path="/admin/dash_board" element= {<Dash_board  />}></Route>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/dog" element={<Dog />}></Route>
                  <Route path="/chicken" element={<Chicken />}></Route>
                  <Route path="/duck" element={<Duck />}></Route>
                  <Route path="/childToParent" element={<ParentComponent />}></Route>
                  <Route path="/useContext" element={<ComponentA />}></Route>
                  <Route path="/CounterRedux_A" element={<CounterRedux_A />}></Route>
                  <Route path="/CounterRedux_B" element={<CounterRedux_B />}></Route>
                  <Route path="/ReDucerReact" element={<ReDucerReact />}></Route>
              </Route>
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
