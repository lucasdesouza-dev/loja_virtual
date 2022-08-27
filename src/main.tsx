import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Search } from "react-router-dom";
import App from "./App";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Produtos from "./pages/Produtos";
import Vendas from "./pages/Vendas";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/vendas" element={<Vendas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
