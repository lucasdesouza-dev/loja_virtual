import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./layouts/NavBar";
import SideBar from "./layouts/SideBar";


function App() {
  return (
    <div className="App min-w-[500px]">
      <NavBar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
