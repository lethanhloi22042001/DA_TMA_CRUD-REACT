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

function App() {
  // const isLogin = localStorage.getItem("Login_Success");
  // console.log('isLogin',isLogin);
  const [isLogin, setIsLogin] = useState(localStorage.getItem('Login_Success'));
  console.log(isLogin);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={isLogin ? (<Navigate to="/admin/dash_board" /> ) : (<DangNhap isLogin={isLogin} setIsLogin={setIsLogin} /> )} />
          <Route path="/admin/dash_board" element={isLogin ? ( <Dash_board isLogin={isLogin} setIsLogin={setIsLogin} />) : (<Navigate to="/login" />)} />

              {/* Protect this route */}
          <Route path="/" element={<Home />}>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
