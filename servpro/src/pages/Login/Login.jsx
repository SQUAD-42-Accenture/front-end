import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/LogoServPro.png';
import { FaUser, FaKey, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      login: cpf,
      senha: senha,
    };

    try {
      // Envia as credenciais para o login
      const loginResponse = await axios.post('https://servpro.onrender.com/api/Conta', credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const token = loginResponse.data.token;
      localStorage.setItem('token', token);
      console.log('Login successful:', token);

      // Verifica se o token foi armazenado corretamente
      const storedToken = localStorage.getItem('token');
      console.log('Token armazenado:', storedToken);

      // Solicita dados do usuário após login com o token
      const userResponse = await axios.get(`https://servpro.onrender.com/api/Usuarios?cpf=${cpf}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });

      console.log('Resposta do usuário:', userResponse);  // Verificando a resposta da API

      const perfil = userResponse.data.TipoUsuario;

      // Verifica o perfil do usuário para redirecionar
      if (perfil === 'Administrador') {
        navigate('/menu');
      } else if (perfil === 'Tecnico') {
        navigate('/tecnicolista');
      } else if (perfil === 'Cliente') {
        navigate('/cliente-dashboard');
      } else {
        setError('Perfil inválido. Contate o administrador do sistema.');
      }
    } catch (error) {
      console.error('Login failed:', error.response || error.message);
      setError('Login inválido. Verifique suas credenciais.');
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
                type={showPassword ? 'text' : 'password'}
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
            <button className="submit-button" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
