import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Search } from "react-router-dom";
import App from "./App";
import "./index.css";
import Logado from "./pages/Logado";
import CriarConta from "./pages/CriarConta";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import SemMenu from "./pages/SemMenu";
import Vendas from "./pages/Vendas";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/home" element={<Logado />}>
            <Route path="" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="vendas" element={<Vendas />} />
          </Route>
          <Route path="/" element={<SemMenu />}>
            <Route path="criarconta" element={<CriarConta />} />
            <Route path="" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
