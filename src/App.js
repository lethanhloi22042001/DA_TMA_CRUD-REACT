import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Chicken from "./Todo/Chicken";
import Dog from "./Todo/Dog";
import Duck from "./Todo/Duck";
import Cps_Home from "./Components/Cps_Home";
import About from "./Navigation/About";
import DangNhap from "./views/DangNhap";
import Dash_board from "./views/Admin/Dash_board";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* OUTLET */}
            <Route path="/input" element={<Cps_Home />}></Route>
            <Route path="/dog" element={<Dog />}></Route>
            <Route path="/chicken" element={<Chicken />}></Route>
            {/* <Route path="/model" element={<Duck />}></Route> */}
          </Route>
          <Route path="/admin/dash_board" element={<Dash_board />}></Route>
          <Route path="/login" element={<DangNhap />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
