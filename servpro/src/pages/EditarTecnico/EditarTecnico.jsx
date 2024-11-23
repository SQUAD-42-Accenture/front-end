import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";

const EditarTecnico = () => {
  const location = useLocation();
  const { tecnico } = location.state || {};

  const [nome, setNome] = useState(tecnico ? tecnico.nome : "");
  const [cpf, setCpf] = useState(tecnico ? tecnico.cpf : "");
  const [email, setEmail] = useState(tecnico ? tecnico.email : "");
  const [telefone, setTelefone] = useState(tecnico ? tecnico.telefone : "");
  const [nascimento, setNascimento] = useState(
    tecnico ? tecnico.nascimento : ""
  );
  const [logradouro, setLogradouro] = useState(
    tecnico ? tecnico.logradouro : ""
  );
  const [cep, setCep] = useState(tecnico ? tecnico.cep : "");
  const [bairro, setBairro] = useState(tecnico ? tecnico.bairro : "");
  const [numero, setNumero] = useState(tecnico ? tecnico.numero : "");
  const [cidade, setCidade] = useState(tecnico ? tecnico.cidade : "");
  const [complemento, setComplemento] = useState(
    tecnico ? tecnico.complemento : ""
  );
  const [referencia, setReferencia] = useState(
    tecnico ? tecnico.referencia : ""
  );

  useEffect(() => {
    if (tecnico) {
      setNome(tecnico.nome);
      setCpf(tecnico.cpf);
      setEmail(tecnico.email);
      setTelefone(tecnico.telefone);
      setNascimento(tecnico.nascimento);
      setLogradouro(tecnico.logradouro);
      setCep(tecnico.cep);
      setBairro(tecnico.bairro);
      setNumero(tecnico.numero);
      setCidade(tecnico.cidade);
      setComplemento(tecnico.complemento);
      setReferencia(tecnico.referencia);
    }
  }, [tecnico]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados atualizados:", {
      nome,
      cpf,
      email,
      telefone,
      nascimento,
      logradouro,
      cep,
      bairro,
      numero,
      cidade,
      complemento,
      referencia,
    });
  };

  return (
    <div className="tela-cheia">
      <header className="header2"></header>
      <nav className="menu2"></nav>

      <div className="CadastroDeTecnico">
        <div className="atualizacao">
          <p className="titulocliente">Editar Técnico</p>
          <p>Data de edição: {new Date().toLocaleDateString()}</p>
        </div>

        <form onSubmit={handleSubmit} className="secaoDadosCliente">
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
          <div className="botaoContainer">
            <button type="button" className="botaoVoltar">
              Voltar
            </button>
            <button type="submit" className="botaoSalvar">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarTecnico;
