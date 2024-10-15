import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/LogoServPro.png';
import { FaUser, FaKey, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      login: cpf,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:5238/api/Conta', credentials);
      
      console.log('Login successful:', response.data);

      navigate('/menu'); 
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials.');
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
