import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";

const EditarCliente = () => {
  const location = useLocation();
  const { client } = location.state || {};

  const [nome, setNome] = useState(client ? client.name : "");
  const [cpf, setCpf] = useState(client ? client.cpf : "");
  const [email, setEmail] = useState(client ? client.email : "");
  const [telefone, setTelefone] = useState(client ? client.phone : "");
  const [nascimento, setNascimento] = useState(client ? client.nascimento : "");
  const [logradouro, setLogradouro] = useState(client ? client.logradouro : "");
  const [cep, setCep] = useState(client ? client.cep : "");
  const [bairro, setBairro] = useState(client ? client.bairro : "");
  const [numero, setNumero] = useState(client ? client.numero : "");
  const [cidade, setCidade] = useState(client ? client.cidade : "");
  const [complemento, setComplemento] = useState(client ? client.complemento : "");
  const [referencia, setReferencia] = useState(client ? client.referencia : "");
  
  const [equipamentos, setEquipamentos] = useState([
    { numeroSerie: "12345", modelo: "Modelo X", marca: "Marca Y", status: "Ativo", dataConclusao: "2024-09-29" }
  ]);

  const handleSave = () => {
    const updatedClient = { nome, cpf, email, telefone, nascimento, logradouro, cep, bairro, numero, cidade, complemento, referencia };
    console.log("Dados editados:", updatedClient);
  };

  return (
    <div className="tela-cheia">
      <header className="header2"></header>
      <nav className="menu2"></nav>

      <div className="CadastroDeClientes">
        <div className="atualizacao">
          <p className="titulocliente2">Edição de Cliente</p>
          <p>Data de edição: {new Date().toLocaleDateString()}</p>
        </div>
        
        <section className="secaoDadosCliente">
          <p className="titulo-dados">Dados Pessoais</p>
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

        <section className="secaoEnderecoCliente">
          <p className="titulo-dados">Dados de Endereço</p>
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

        <section className="secaoHistoricoEquipamento">
          <p className="titulo-dados">Histórico de Equipamento</p>
          <table className="tabelaEquipamentos">
            <thead>
              <tr>
                <th>Número de Série</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Status</th>
                <th>Data de Conclusão</th>
              </tr>
            </thead>
            <tbody>
              {equipamentos.map((equipamento, index) => (
                <tr key={index}>
                  <td>{equipamento.numeroSerie}</td>
                  <td>{equipamento.modelo}</td>
                  <td>{equipamento.marca}</td>
                  <td>{equipamento.status}</td>
                  <td>{equipamento.dataConclusao}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="botaoCadastrarEquipamento">
            Cadastrar
          </button>
        </section>
      </div>
    </div>
  );
};

export default EditarCliente;


