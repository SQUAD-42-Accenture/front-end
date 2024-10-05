import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CadastroDeClientes from "./CadastroDeClientes/CadastroDeClientes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CadastroDeClientes />
  </StrictMode>
);
