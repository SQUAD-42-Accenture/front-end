import React from 'react';
import "./styles.css";


function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard para acompanhar seu sistema</h1>
      </header>

      <div className="info-cards">
        <div className="info-card blue">
          <p>Clientes Novos</p>
          <h2>+ 20 clientes</h2>
        </div>
        <div className="info-card purple">
          <p>Técnicos Cadastrados</p>
          <h2>+ 30 técnicos</h2>
        </div>
        <div className="info-card dark-blue">
          <p>Equipamentos</p>
          <h2>+ 35 equipamentos</h2>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart product-management">
          <h3>Gestão de Produto</h3>
          <div className="bar-chart">
            {/* Exemplo de um gráfico em barras; use bibliotecas como Chart.js para gráficos dinâmicos */}
            <div className="bar" style={{ height: '80%' }}>Impressora</div>
            <div className="bar" style={{ height: '70%' }}>Computador</div>
            <div className="bar" style={{ height: '50%' }}>Iphone</div>
            <div className="bar" style={{ height: '40%' }}>Tablet Lite</div>
            <div className="bar" style={{ height: '60%' }}>Notebook Samsung</div>
          </div>
        </div>

        <div className="chart order-status">
          <h3>Ordens de Serviços</h3>
          <div className="pie-chart">
            <div className="pie-slice green" style={{ '--percentage': '70%' }}></div>
            <div className="pie-slice red" style={{ '--percentage': '40%' }}></div>
            <div className="labels">
              <span>Concluídas</span>
              <span>Canceladas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
