import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";
import "./styles.css";

function Dashboard() {
  // Dados para o gráfico de barras
  const barData = [
    { name: "Impressora", quantidade: 200 },
    { name: "Computador", quantidade: 150 },
    { name: "Iphone", quantidade: 80 },
    { name: "Tablet Lite", quantidade: 60 },
    { name: "Notebook Samsung", quantidade: 100 },
  ];

  // Dados para o gráfico de pizza
  const pieData = [
    { name: "Concluídas", value: 70 },
    { name: "Canceladas", value: 40 },
  ];

  // Cores para o gráfico de barras
  const barColors = ["#C7417B", "#23306A", "#00FCA8", "#D8BFD8", "#9b59b6"];

  // Cores para o gráfico de pizza
  const pieColors = ["#2ecc71", "#e74c3c"];

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
        {/* Gráfico de Barras */}
        <div className="chart1">
          <h3>Gestão de Produto</h3>
          <BarChart width={650} height={300} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantidade">
              {barData.map((entry, index) => (
                <Cell key={`bar-cell-${index}`} fill={barColors[index % barColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* Gráfico de Pizza */}
        <div className="chart2">
          <h3>Ordens de Serviços</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`pie-cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
