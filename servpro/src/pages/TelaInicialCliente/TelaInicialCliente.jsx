// TelaInicialCliente.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Menu, HelpCircle, Home, Search } from "lucide-react";
import "./style.css";

const TelaInicialCliente = () => {
  const [informacoes, setInformacoes] = useState({
    numeroOS: "",
    cep: "",
    municipio: "",
    bairro: "",
    cliente: "",
    cpf: "",
    celular: "",
    email: "",
  });

  const [tableData] = useState([
    {
      name: "Técnico",
      description: "Conserto de Notebook Asus XR 3000. HD parou e precisará ser trocado",
      status: "Aprovado",
    },
    {
      name: "Admin",
      description: "Cadastramento Equipamento",
      status: "Novo",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://servpro.onrender.com/api/Cliente"
        );
        setInformacoes(response.data);
      } catch (error) {
        console.error("Erro ao buscar as informações:", error);
      }
    };

    fetchData();
  }, []);

  const steps = [
    "Aberto",
    "Aguardando Análise",
    "Aprovado",
    "Aguardando Peça",
    "Em Andamento",
    "Concluído",
  ];
  const [currentStep] = useState(2); // Ajustado para mostrar 2 steps completos como na imagem

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <Menu className="menu-icon" />
          <img src="../assets/LogoServPro.png" alt="SERVPRO" className="logo" />
        </div>
        <div className="header-right">
          <HelpCircle className="help-icon" />
          <div className="user-profile">
            <div className="avatar">JD</div>
            <div className="user-info">
              <div className="user-name">JEFFERSON GOMES</div>
              <div className="user-email">jeffersongomes@gmail.com</div>
            </div>
          </div>
        </div>
      </header>

      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="nav-menu">
            <button className="nav-item active">
              <Home className="home-icon" />
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Client Info Card */}
          <section className="info-card">
            <h2 className="section-title">Informações Gerais</h2>
            <div className="info-grid">
              <InfoItem label="Nº da OS" value={informacoes.numeroOS} />
              <InfoItem label="CEP" value={informacoes.cep} />
              <InfoItem label="Município" value={informacoes.municipio} />
              <InfoItem label="Bairro" value={informacoes.bairro} />
              <InfoItem label="Cliente" value={informacoes.cliente} />
              <InfoItem label="CPF" value={informacoes.cpf} />
              <InfoItem label="Celular" value={informacoes.celular} />
              <InfoItem label="Email" value={informacoes.email} />
            </div>
          </section>

          {/* Progress Steps */}
          
          <div><h2 className="status-serviço">Status do Serviço</h2></div>
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-completed" 
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step ${index <= currentStep ? "active" : ""}`}
                >
                  {index <= currentStep ? "✓" : index + 1}
                  <div className="step-label: ">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Information Table */}
          <section className="table-container">
            <div className="table-header">
              <h2 className="section-title">Informações</h2>
              <div className="search-wrapper">
                <Search className="search-icon" />
                <input type="text" className="search-input" placeholder="Search..." />
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>NOME</th>
                  <th>DESCRIÇÃO</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                      <span className={`status-badge ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="info-item">
    <div className="info-label">{label}</div>
    <div className="info-value">{value || "-"}</div>
  </div>
);

export default TelaInicialCliente;