import Home from "./Layouts/Home/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* Định nghĩa các đường dẫn, đồng thời sử dụng OutLet để sử dụng chung CPS của HOME */}
        <Routes>
          <Route  path="/login" element={<DangNhap />}></Route>
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
          <Route path="/admin/dash_board" element={<Dash_board />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
