import React, { useState } from "react";
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
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
  const [serial, setSerial] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [cpfEquipamento, setCpfEquipamento] = useState(""); 

  const navigate = useNavigate(); 
  const [errors, setErrors] = useState({});
  
  const handleSubmitCliente = async (event) => {
    event.preventDefault();

    const clienteData = {
      CPF: cpf,
      Nome: nome,
      Senha: senha,
      Email: email,
      Telefone: telefone,
      TipoUsuario: "Cliente",
      DataNascimento: nascimento?  new Date(nascimento).toISOString(): null,
      Bairro: bairro,
      Cidade: cidade,
      CEP: cep,
      Complemento: complemento
    };

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5238/api/Cliente', clienteData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      console.log('Cliente cadastrado com sucesso.');

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
        console.error('Erro ao cadastrar cliente:', error.message);
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
  
    const token = localStorage.getItem('token');
    console.log('Token:', token); 
  
    try {
      await axios.post('http://localhost:5238/api/Equipamento', equipamentoData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Equipamento cadastrado com sucesso.');
  
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
      console.error('Erro ao cadastrar equipamento:', error.message);
    }
  }
};
  

  const handleCloseModal = () => {
    setModalOpen(false); 
  };

  return (
    <div className="tela-cheia">
      <header className="header2"></header>
      <nav className="menu2"></nav>

      <div className="CadastroDeClientes">
        <div className="atualizacao">
          <p className="titulocliente">Cadastro de Cliente</p>
          <p>Data de cadastro: {new Date().toLocaleDateString()}</p>
        </div>

        <form onSubmit={handleSubmitCliente}>
          <section className="secaoDadosCliente">
            <p className="titulo-dados">Dados Cadastrais</p>
            <div className="containerDadosCadastrais">
              <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              {errors.Nome && <p className="error-message">{errors.Nome[0]}</p>}
              <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
              {errors.CPF && <p className="error-message">{errors.CPF[0]}</p>}
              <input type="date" placeholder="Data de Nascimento" value={nascimento} onChange={(e) => setNascimento(e.target.value)} />
              {errors.DataNascimento && <p className="error-message">{errors.DataNascimento[0]}</p>}
              <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.Email && <p className="error-message">{errors.Email[0]}</p>}
              <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              {errors.Telefone && <p className="error-message">{errors.Telefone[0]}</p>}
              <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
              {errors.Senha && <p className="error-message">{errors.Senha[0]}</p>}
            </div>

            <div className="containerDadosEndereco">
              <input type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
              {errors.CEP && <p className="error-message">{errors.CEP[0]}</p>}
              <input type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
              {errors.Bairro && <p className="error-message">{errors.Bairro[0]}</p>}
              <input type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
              {errors.Cidade && <p className="error-message">{errors.Cidade[0]}</p>}
              <input type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
            </div>
          </section>

          <button type="submit" className="submit-button2">Salvar Cliente</button> 
        </form>

        <form onSubmit={handleSubmitEquipamento}>
          <section className="secaoDadosEquipamento">
            <p className="tituloCadastroEquipamento">Cadastro de Equipamento</p>
            <div className="containerCadastroEquipamento">
              <input type="text" placeholder="CPF do Cliente" value={cpfEquipamento} onChange={(e) => setCpfEquipamento(e.target.value)} /> 
              {errors.ClienteCPF && <p className="error-message">{errors.ClienteCPF[0]}</p>}
              <input type="text" placeholder="Serial" value={serial} onChange={(e) => setSerial(e.target.value)} />
              {errors.Serial && <p className="error-message">{errors.Serial[0]}</p>}
              <input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
              {errors.Marca && <p className="error-message">{errors.Marca[0]}</p>}
              <input type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
              {errors.Modelo && <p className="error-message">{errors.Modelo[0]}</p>}
              <input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
              {errors.Descricao && <p className="error-message">{errors.Descricao[0]}</p>}
            </div>
          </section>

          <button type="submit" className="submit-button2">Salvar Equipamento</button>
        </form>

        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <p>Cliente cadastrado com sucesso! Agora cadastre seu equipamento.</p>
              <button onClick={handleCloseModal}>Ok</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CadastroCliente;


