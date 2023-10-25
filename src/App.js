import Home from "./Home/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Chicken from "./Todo/Chicken";
import Dog from "./Todo/Dog";
import Duck from "./Todo/Duck";
import Cps_Home from "./Components/Cps_Home";
import About from "./Navigation/About";
import DangNhap from "./views/DangNhap";
import Dash_board from "./views/Admin/Dash_board";
import ParentComponent from "./Todo/ChildToParents/ParentComponent";
import ComponentA from "./Todo/UseContext/ComponentA";
import CounterReduxStore from "./Todo/ReduxLib_ReDucerReact/CounterReduxStore";
import ReDucerReact from "./Todo/ReduxLib_ReDucerReact/ReDucerReact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/input" element={<Cps_Home />}></Route>
            <Route path="/dog" element={<Dog />}></Route>
            <Route path="/chicken" element={<Chicken />}></Route>
            <Route path="/duck" element={<Duck />}></Route>
            <Route path="/childToParent" element={<ParentComponent />}></Route>
            <Route path="/useContext" element={<ComponentA />}></Route>
            <Route path="/CounterReduxStore" element={<CounterReduxStore />}></Route>
            <Route path="/ReDucerReact" element={<ReDucerReact />}></Route>
          </Route>
          <Route path="/admin/dash_board" element={<Dash_board />}></Route>
          <Route path="/login" element={<DangNhap />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
