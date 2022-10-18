import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App min-w-[500px]">
      <Outlet />
    </div>
  );
}

export default App;
