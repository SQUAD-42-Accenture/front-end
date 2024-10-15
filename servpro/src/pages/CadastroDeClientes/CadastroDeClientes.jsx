import React, { useState } from "react";
// import Menu from './components/Menu/Sidebar'; 

import "./style.css";

const MeuComponente = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");
  const [referencia, setReferencia] = useState("");
  const [numeroDeSerie, setNumeroDeSerie] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [tipoDeEquipamento, setTipoDeEquipamento] = useState("");
  const [cor, setCor] = useState("");
  const [dataDeAquisicao, setDataDeAquisacao] = useState("");
  const [observacao, setObservacao] = useState("");

  return (
    <div className="tela-cheia">
      {/* <Menu /> */}

      <div className="CadastroDeClientes">
        <div className="atualizacao">
          <p className="titulocliente">Cadastro de Cliente</p>
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
            <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="">Sexo</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
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
        <section className="secaoEquipamento">
          <p className="tituloCadastroEquipamento">
            Cadastro de Equipamentos
          </p>
          <div className="containerCadastroEquipamento">
            <input
              type="text"
              placeholder="Número de série"
              value={numeroDeSerie}
              onChange={(e) => setNumeroDeSerie(e.target.value)}
            />
            <input
              type="text"
              placeholder="Modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
            <input
              type="text"
              placeholder="Tipo de Equipamento"
              value={tipoDeEquipamento}
              onChange={(e) => setTipoDeEquipamento(e.target.value)}
            />
            <input
              type="text"
              placeholder="Cor"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
            />
            <input
              type="date"
              placeholder="Data de Aquisição"
              value={dataDeAquisicao}
              onChange={(e) => setDataDeAquisacao(e.target.value)}
            />
            <input
              type="text"
              placeholder="Observação"
              value={observacao}
              onChange={(e) => setObservacao(e.target.value)}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MeuComponente;
