import { Outlet } from "react-router-dom";

function SemMenu() {
  return (
    <div className=" min-w-[500px]">
      <Outlet />
    </div>
  );
}

export default SemMenu;
