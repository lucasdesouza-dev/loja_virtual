import { Outlet } from "react-router-dom";

import NavBar from "../layouts/NavBar";
import SideBar from "../layouts/SideBar";

function Logado() {
  return (
    <div className=" min-w-[500px]">
      <NavBar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Logado;
