import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CadastroDeClientes from "./CadastroDeClientes/CadastroDeClientes.jsx";
import "./index.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from '../../servpro/src/pages/Login/Login.jsx'; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CadastroDeClientes />
    <Login />
  </StrictMode>
);
