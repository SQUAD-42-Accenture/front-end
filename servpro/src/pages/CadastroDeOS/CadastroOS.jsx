import React, { useState } from "react";
import "./styles.css";

const CadastroOrdemServico = () => {
  const [numeroOS, setNumeroOS] = useState("5041987");
  const [cliente, setCliente] = useState("Roberto Dutra");
  const [tecnico, setTecnico] = useState("Henrique Souza");
  const [pagamento, setPagamento] = useState("Boleto");

  const tecnicos = ["Henrique Souza", "João Silva", "Maria Oliveira"];
  const formasPagamento = ["Boleto", "Cartão de Crédito", "Pix"];

  return (
    <div className="tela-cheia-os">
      <header className="header2-os"></header>
      <nav className="menu2-os"></nav>

      <div className="CadastroDeOS-os">
        <div className="cabecalhoOrdem-os">
          <div className="campoNumeroOS-os">
            <label htmlFor="numeroOS">Nº da OS:</label>
            <input
              type="text"
              id="numeroOS"
              value={numeroOS}
              onChange={(e) => setNumeroOS(e.target.value)}
              readOnly
            />
          </div>
          <div className="campoCliente-os">
            <label htmlFor="cliente">Cliente:</label>
            <input
              type="text"
              id="cliente"
              placeholder="Buscar Cliente"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
          </div>
          <div className="campoTecnico-os">
            <label htmlFor="tecnico">Técnico:</label>
            <select
              id="tecnico"
              value={tecnico}
              onChange={(e) => setTecnico(e.target.value)}
            >
              {tecnicos.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="campoPagamento-os">
            <label htmlFor="pagamento">Pagamento:</label>
            <select
              id="pagamento"
              value={pagamento}
              onChange={(e) => setPagamento(e.target.value)}
            >
              {formasPagamento.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        <section className="dadosCliente-os">
          <div className="inputField-os">
            <label htmlFor="genero">Gênero:</label>
            <select id="genero">
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>
          </div>
          <div className="inputField-os">
            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" placeholder="Digite o CEP" />
          </div>
          <div className="inputField-os">
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" placeholder="Digite o Endereço" />
          </div>
          <div className="inputField-os">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" placeholder="Nome Completo" />
          </div>
          <div className="inputField-os">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Digite o Email" />
          </div>
          <div className="inputField-os">
            <label htmlFor="telefone">Telefone:</label>
            <input type="text" id="telefone" placeholder="(XX) XXXX-XXXX" />
          </div>
          <div className="inputField-os">
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" placeholder="UF" />
          </div>
        </section>

        {/* Seção 2: Descrição e Equipamento */}
        <section className="descricaoEquipamento-os">
          <div className="campoDescricao-os">
            <label htmlFor="descricao">Descrição do Problema:</label>
            <textarea id="descricao" rows={4} placeholder="Descreva o problema" />
          </div>

          <div className="campoEquipamento-os">
            <div className="inputField-os">
              <label htmlFor="marca">Marca:</label>
              <input type="text" id="marca" placeholder="Marca do Equipamento" />
            </div>
            <div className="inputField-os">
              <label htmlFor="modelo">Modelo:</label>
              <input type="text" id="modelo" placeholder="Modelo do Equipamento" />
            </div>
            <div className="inputField-os">
              <label htmlFor="serie">Série:</label>
              <input type="text" id="serie" placeholder="Série do Equipamento" />
            </div>
          </div>

          <div className="campoDetalhes-os">
            <label htmlFor="detalhes">Detalhes do Equipamento:</label>
            <textarea id="detalhes" rows={4} placeholder="Escreva os detalhes" />
          </div>
        </section>

        <div className="botoes-os">
          <button className="botaoVoltar-os">Voltar</button>
          <button className="botaoSalvar-os">Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default CadastroOrdemServico;
