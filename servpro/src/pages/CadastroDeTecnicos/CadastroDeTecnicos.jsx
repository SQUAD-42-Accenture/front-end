import React, { useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./style.css";

const CadastroCliente = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");
  const [referencia, setReferencia] = useState("");

  const [equipamentos, setEquipamentos] = useState([{ id: 1 }]);

  const equipamentosRef = useRef(null);

  const adicionarEquipamento = () => {
    setEquipamentos([...equipamentos, { id: equipamentos.length + 1 }]);

    equipamentosRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="tela-cheia">
      <header className="header2"></header>
      <nav className="menu2"></nav>

      <div className="CadastroDeClientes">
        <div className="atualizacao">
          <p className="titulocliente">Cadastro de Técnico</p>
          <p>Data de cadastro: 29/09/2024</p>
          <p>Última Atualização: 29/09/2024 </p>
        </div>

        <section className="secaoDadosCliente">
          <p className="titulo-dados">Dados Cadastrais</p>

          <div className="containerDadosCadastrais">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <input
              type="date"
              placeholder="Data de Nascimento"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="containerDadosEndereco">
            <input
              type="text"
              placeholder="Logradouro"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
            />
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <input
              type="text"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
            <input
              type="text"
              placeholder="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <input
              type="text"
              placeholder="Complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ponto de Referência"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
            />
          </div>
        </section>
        <section className="secaoDadosCliente">
          <p className="titulo-dados">Dados Cadastrais</p>

          <div className="containerDadosCadastrais">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <input
              type="date"
              placeholder="Data de Nascimento"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CadastroCliente;
