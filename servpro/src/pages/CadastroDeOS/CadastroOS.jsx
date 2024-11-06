import React, { useState } from "react";
import "./styles.css";

const CadastroOrdemServico = () => {
  const [numeroOS, setNumeroOS] = useState("5041987");
  const [cliente, setCliente] = useState("Roberto Dutra");
  const [tecnico, setTecnico] = useState("Henrique Souza");
  const [pagamento, setPagamento] = useState("Boleto");
  const [nascimento, setNascimento] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");
  const [referencia, setReferencia] = useState("");

  const tecnicos = ["Henrique Souza", "João Silva", "Maria Oliveira"];
  const formasPagamento = ["Boleto", "Cartão de Crédito", "Pix"];

  return (
    <div className="tela-cheia">
      <header className="header2"></header>
      <nav className="menu2"></nav>
      <div className="CadastroDeOS-os">
        <h1 className="titulo">Ordens de Serviços</h1>
        <div className="cabecalhoTitulo">Cadastro de Ordem de Serviço</div>
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
            <label htmlFor="nascimento">Data de Nascimento:</label>
            <input
              type="date"
              id="nascimento"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />
          </div>
          <div className="inputField-os">
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              placeholder="Digite o CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div className="inputField-os">
            <label htmlFor="endereco">Endereço:</label>
            <input
              type="text"
              id="endereco"
              placeholder="Digite o Endereço"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
            />
          </div>
          <div className="inputField-os">
            <label htmlFor="bairro">Bairro:</label>
            <input
              type="text"
              id="bairro"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>
          <div className="inputField-os">
            <label htmlFor="numero">Número:</label>
            <input
              type="text"
              id="numero"
              placeholder="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div className="inputField-os">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="inputField-os">
            <label htmlFor="complemento">Complemento:</label>
            <input
              type="text"
              id="complemento"
              placeholder="Complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
          <div className="inputField-os">
            <label htmlFor="referencia">Ponto de Referência:</label>
            <input
              type="text"
              id="referencia"
              placeholder="Ponto de Referência"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
            />
          </div>
        </section>

        {/* 
        <section className="descricaoEquipamento-os">
          <div className="campoDescricao-os">
            <label htmlFor="descricao">Descrição do Problema:</label>
            <textarea id="descricao" rows={2} placeholder="Descreva o problema" />
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
        */}
      </div>
    </div>
  );
};

export default CadastroOrdemServico;
