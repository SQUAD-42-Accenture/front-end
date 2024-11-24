import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const EditarCliente = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { client } = location.state || {};

  const [nome, setNome] = useState(client?.Nome || "");
  const [cpf, setCpf] = useState(client?.CPF || "");
  const [email, setEmail] = useState(client?.Email || "");
  const [telefone, setTelefone] = useState(client?.Telefone || "");
  const [nascimento, setNascimento] = useState(client?.DataNascimento || "");
  const [cep, setCep] = useState(client?.CEP || "");
  const [bairro, setBairro] = useState(client?.Bairro || "");
  const [cidade, setCidade] = useState(client?.Cidade || "");
  const [complemento, setComplemento] = useState(client?.Complemento || "");
  const [senha, setSenha] = useState(""); 

  const handleSave = async (event) => {
    event.preventDefault();

    const clienteData = {
      Nome: nome,
      CPF: cpf,
      Email: email,
      Telefone: telefone,
      DataNascimento: nascimento,
      CEP: cep,
      Bairro: bairro,
      Cidade: cidade,
      Complemento: complemento,
      Senha: senha, 
    };

    const token = localStorage.getItem("token");

    try {
      await axios.put(
        `https://servpro.onrender.com/api/Cliente/${client.CPF}`,
        clienteData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Cliente atualizado com sucesso.");
      navigate("/menu");
    } catch (error) {
      console.error("Erro ao salvar cliente:", error.message);
    }
  };

  const handleCancel = () => {
    navigate("/menu"); 
  };

  return (
    <div className="tela-cheia-os">
      <div className="CadastroDeOS-os">
        <div className="cabecalhoTitulo">Edição de Cliente</div>
        <form onSubmit={handleSave}>
          <div className="campo-horizontal">
            <div className="campoCpf-os1">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome do Cliente"
              />
            </div>

            <div className="campoCpf-os1">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                disabled
                placeholder="CPF não pode ser editado"
              />
            </div>
          </div>

          <div className="campo-horizontal">
            <div className="campoCpf-os1">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o e-mail"
              />
            </div>

            <div className="campoCpf-os1">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Digite o telefone"
              />
            </div>
          </div>

          <div className="campoCpf-os1">
            <label htmlFor="nascimento">Data de Nascimento:</label>
            <input
              type="date"
              id="nascimento"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />
          </div>

          <div className="campoCpf-os1">
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Digite o CEP"
            />
          </div>

          <div className="campoCpf-os1">
            <label htmlFor="bairro">Bairro:</label>
            <input
              type="text"
              id="bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              placeholder="Digite o bairro"
            />
          </div>

          <div className="campoCpf-os1">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder="Digite a cidade"
            />
          </div>

          <div className="campoCpf-os1">
            <label htmlFor="complemento">Complemento:</label>
            <input
              type="text"
              id="complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              placeholder="Digite o complemento"
            />
          </div>

          <div className="campoCpf-os1">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite a senha"
            />
          </div>

          <div className="botoes">
            <button type="submit202">Salvar</button>
            <button type="submit202" onClick={handleCancel}>
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarCliente;
