import { FiHome, FiPackage, FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="w-64 h-[calc(100vh-96px)] bg-gray-400">
      <div className="text-xl">
        <div className="ml-4">
          <Link to="dashboard" className="flex items-center">
            <FiHome />
            <span className="m-4">Dashboard</span>
          </Link>
        </div>
        <div className="ml-4">
          <Link to="produtos" className="flex items-center">
            <FiPackage />
            <span className="m-4">Produtos</span>
          </Link>
        </div>
        <div className="ml-4">
          <Link to="vendas" className="flex items-center">
            <FiFileText />
            <span className="m-4">Vendas</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
