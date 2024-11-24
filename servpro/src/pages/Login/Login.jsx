import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/LogoServPro.png";
import { FaUser, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      login: cpf,
      senha: senha,
    };

    try {
      
      const loginResponse = await axios.post(
        "https://servpro.onrender.com/api/Conta",
        credentials,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const token = loginResponse.data.token;
      localStorage.setItem("token", token); 

      console.log("Login bem-sucedido. Token recebido:", token);

      
      const userResponse = await axios.get(
        `https://servpro.onrender.com/api/Usuarios/tipoUsuario/cpf/${cpf}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const usuarioLogado = userResponse.data;

      if (usuarioLogado && usuarioLogado.TipoUsuario) {
        const perfil = usuarioLogado.TipoUsuario;

        switch (perfil) {
          case "Administrador":
            navigate("/menu");
            break;

          case "Tecnico":
           
            const ordensResponse = await axios.get(
              `https://servpro.onrender.com/api/Tecnico/ordens/${cpf}`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );

            const ordensServico = ordensResponse.data;
            console.log("Ordens de Serviço do Técnico:", ordensServico);

            navigate("/tecnicolista", { state: { ordensServico } });
            break;

          case "Cliente":
            navigate("/cadastroos");
            break;

          default:
            setError("Perfil inválido. Contate o administrador do sistema.");
        }
      } else {
        setError("Usuário não encontrado. Verifique as credenciais.");
      }
    } catch (error) {
      console.error(
        "Erro ao realizar o login:",
        error.response?.data || error.message
      );
      setError("Login inválido. Verifique suas credenciais.");
    }
  };

  return (
    <div className="background">
      <img src={logo} alt="Logo" className="logo" />
      <div className="container">
        <div className="form-container">
          <h2 className="title">LOGIN</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <FaUser className="icon icon-gray" />
              <input
                className="input"
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <FaKey className="icon icon-gray" />
              <input
                className="input"
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="forgot-password">
              <a href="#">Esqueceu sua senha?</a>
            </div>
            <button className="submit-button" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


