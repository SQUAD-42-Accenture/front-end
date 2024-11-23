import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CadastroCliente = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");
  const [senha, setSenha] = useState("");
  const [cpfEquipamento, setCpfEquipamento] = useState("");
  const [serial, setSerial] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmitCliente = async (event) => {
    event.preventDefault();

    const clienteData = {
      CPF: cpf,
      Nome: nome,
      Senha: senha,
      Email: email,
      Telefone: telefone,
      TipoUsuario: "Cliente",
      DataNascimento: nascimento ? new Date(nascimento).toISOString() : null,
      Bairro: bairro,
      Cidade: cidade,
      CEP: cep,
      Complemento: complemento,
    };

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "https://servpro.onrender.com/api/Cliente",
        clienteData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setNome("");
      setCpf("");
      setEmail("");
      setTelefone("");
      setNascimento("");
      setCep("");
      setBairro("");
      setCidade("");
      setComplemento("");
      setSenha("");

      setModalOpen(true);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const validationErrors = error.response.data.errors;
        setErrors(validationErrors);
      } else {
        console.error("Erro ao cadastrar cliente:", error.message);
      }
    }
  };

  const handleSubmitEquipamento = async (event) => {
    event.preventDefault();

    const equipamentoData = {
      Serial: serial,
      Marca: marca,
      Modelo: modelo,
      Descricao: descricao,
      ClienteCPF: cpfEquipamento,
    };

    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "https://servpro.onrender.com/api/Equipamento",
        equipamentoData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Equipamento cadastrado com sucesso.");

      setSerial("");
      setMarca("");
      setModelo("");
      setDescricao("");

      navigate("/menu");
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const validationErrors = error.response.data.errors;
        setErrors(validationErrors);
      } else {
        console.error("Erro ao cadastrar equipamento:", error.message);
      }
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="tela-cheia-osss">
      <div className="CadastroDeOS-osss">
        <div className="cabecalhoTituloo">Cadastro de Cliente</div>
        <form onSubmit={handleSubmitCliente}>
          <div className="cabecalhoOrdem-osss">
            <div className="campoCpf-os">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome do Cliente"
              />
              {errors.Nome && <p className="error-message">{errors.Nome[0]}</p>}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Digite o CPF"
              />
              {errors.CPF && <p className="error-message">{errors.CPF[0]}</p>}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="nascimento">Data de Nascimento:</label>
              <input
                type="date"
                id="nascimento"
                className="inputnascimento"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
                placeholder="Digite a Data de Nascimento"
              />
              {errors.DataNascimento && (
                <p className="error-message">{errors.DataNascimento[0]}</p>
              )}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                className="inputemail"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o e-mail"
              />
              {errors.Email && (
                <p className="error-message">{errors.Email[0]}</p>
              )}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Digite o telefone"
              />
              {errors.Telefone && (
                <p className="error-message">{errors.Telefone[0]}</p>
              )}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                className="inputsenha"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite a senha"
              />
              {errors.Senha && (
                <p className="error-message">{errors.Senha[0]}</p>
              )}
            </div>
          </div>

          <div className="cabecalhoOrdem-os">
            <div className="campoCpf-os">
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="Digite o CEP"
              />
              {errors.CEP && <p className="error-message">{errors.CEP[0]}</p>}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="bairro">Bairro:</label>
              <input
                type="text"
                id="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="Digite o Bairro"
              />
              {errors.Bairro && (
                <p className="error-message">{errors.Bairro[0]}</p>
              )}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Digite a Cidade"
              />
              {errors.Cidade && (
                <p className="error-message">{errors.Cidade[0]}</p>
              )}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="complemento">Complemento:</label>
              <input
                type="text"
                id="complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                placeholder="Digite o Complemento"
              />
            </div>
          </div>

          <button type="submit2022" className="submit-button4">
            Salvar Cliente
          </button>
        </form>

        {/* <div className="cabecalhoTituloo">Cadastro de Equipamento</div> */}
        <h3 className="servicosProdutos-osss">Cadastre o Equipamento</h3>
        <form onSubmit={handleSubmitEquipamento}>
          <section className="dadosCliente-osss">
            <div className="inputField-os">
              <label htmlFor="cpfEquipamento">CPF do Cliente:</label>
              <input
                type="text"
                id="cpfEquipamento"
                value={cpfEquipamento}
                onChange={(e) => setCpfEquipamento(e.target.value)}
                placeholder="Digite o CPF do Cliente"
              />
              {errors.ClienteCPF && (
                <p className="error-message">{errors.ClienteCPF[0]}</p>
              )}
            </div>

            <div className="inputField-os">
              <label htmlFor="serial">Serial:</label>
              <input
                type="text"
                id="serial"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                placeholder="Digite o Serial"
              />
              {errors.Serial && (
                <p className="error-message">{errors.Serial[0]}</p>
              )}
            </div>

            <div className="inputField-os">
              <label htmlFor="marca">Marca:</label>
              <input
                type="text"
                id="marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                placeholder="Digite a Marca"
              />
              {errors.Marca && (
                <p className="error-message">{errors.Marca[0]}</p>
              )}
            </div>

            <div className="inputField-os">
              <label htmlFor="modelo">Modelo:</label>
              <input
                type="text"
                id="modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                placeholder="Digite o Modelo"
              />
              {errors.Modelo && (
                <p className="error-message">{errors.Modelo[0]}</p>
              )}
            </div>

            <div className="inputField-os">
              <label htmlFor="descricao">Descrição:</label>
              <input
                type="text"
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Digite a Descrição"
              />
              {errors.Descricao && (
                <p className="error-message">{errors.Descricao[0]}</p>
              )}
            </div>
            <button type="submit20222" className="submit-button4">Cadastrar Equipamento</button>

          </section>
        </form>

        {/* <div className="cabecalhoTituloo">Cadastro de Equipamento</div>
        <form onSubmit={handleSubmitEquipamento}>
          <div className="cabecalhoOrdem-os">
            <div className="campoCpf-os">
              <label htmlFor="cpfEquipamento">CPF do Cliente:</label>
              <input
                type="text"
                id="cpfEquipamento"
                value={cpfEquipamento}
                onChange={(e) => setCpfEquipamento(e.target.value)}
                placeholder="Digite o CPF do Cliente"
              />
              {errors.ClienteCPF && <p className="error-message">{errors.ClienteCPF[0]}</p>}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="serial">Serial:</label>
              <input
                type="text"
                id="serial"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                placeholder="Digite o Serial"
              />
              {errors.Serial && <p className="error-message">{errors.Serial[0]}</p>}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="marca">Marca:</label>
              <input
                type="text"
                id="marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                placeholder="Digite a Marca"
              />
              {errors.Marca && <p className="error-message">{errors.Marca[0]}</p>}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="modelo">Modelo:</label>
              <input
                type="text"
                id="modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                placeholder="Digite o Modelo"
              />
              {errors.Modelo && <p className="error-message">{errors.Modelo[0]}</p>}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="descricao">Descrição:</label>
              <input
                type="text"
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Digite a Descrição"
              />
              {errors.Descricao && <p className="error-message">{errors.Descricao[0]}</p>}
            </div>
          </div>

          <button type="submit" className="submit-button4">Cadastrar Equipamento</button>
        </form> */}
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Cliente Cadastrado com Sucesso!</h3>
            <p>
              O cliente foi registrado. Agora, cadastre um equipamento para ele.
            </p>
            <button onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CadastroCliente;
