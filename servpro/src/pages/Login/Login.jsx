import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/LogoServPro.png';
import { FaUser, FaKey, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
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
              />
            </div>
            {!isClient && (
              <div className="input-wrapper">
                <FaKey className="icon icon-gray" />
                <input
                  className="input"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            )}
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

export default LoginForm;

