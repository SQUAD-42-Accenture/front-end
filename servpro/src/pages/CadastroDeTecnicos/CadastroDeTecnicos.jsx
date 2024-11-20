// import React, { useState } from "react";
// import axios from 'axios'; 
// import { useNavigate } from 'react-router-dom'; 
// import "./style.css";

// const CadastroTecnico = () => {
//   const [nome, setNome] = useState("");
//   const [cpf, setCpf] = useState("");
//   const [email, setEmail] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [especialidade, setEspecialidade] = useState("");
//   const [senha, setSenha] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate(); 
  

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const tecnicoData = {
//       CPF: cpf,
//       Nome: nome,
//       Email: email,
//       Senha: senha,
//       TipoUsuario: "Tecnico",
//       Telefone: telefone,
//       Especialidade: especialidade
//     };

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:5238/api/Tecnico', tecnicoData, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       console.log('Técnico cadastrado com sucesso.');
      
//       setNome("");
//       setCpf("");
//       setEmail("");
//       setTelefone("");
//       setSenha("");
//       setEspecialidade("");

//       navigate("/menu"); 

//     } catch (error) {
//       if (error.response && error.response.data.errors) {
//         const validationErrors = error.response.data.errors;
//         setErrors(validationErrors); 
//       } else {
//         console.error('Erro ao cadastrar técnico:', error.message);
//       }
//     }
//   };

//   return (
//     <div className="tela-cheia">
//       <header className="header2"></header>
//       <nav className="menu2"></nav>

//       <div className="CadastroDeTecnicos">
//         <div className="atualizacao">
//           <p className="titulocliente">Cadastro de Técnico</p>
//           <p>Data de cadastro: {new Date().toLocaleDateString()}</p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <section className="secaoDadosTecnico">
//             <p className="titulo-dados">Dados Cadastrais</p>
//             <div className="containerDadosCadastrais">
//               <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
//               {errors.Nome && <p className="error-message">{errors.Nome[0]}</p>}
//               <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
//               {errors.CPF && <p className="error-message">{errors.CPF[0]}</p>}
//               <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
//               {errors.Email && <p className="error-message">{errors.Email[0]}</p>}
//               <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
//               {errors.Telefone && <p className="error-message">{errors.Telefone[0]}</p>}
//               <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
//               {errors.Senha && <p className="error-message">{errors.Senha[0]}</p>}
//               <input type="text" placeholder="Especialidade" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} />
//               {errors.Especialidade && <p className="error-message">{errors.Especialidade[0]}</p>}
//             </div>
//           </section>

//           <button type="submit" className="submit-button2">Salvar Técnico</button> 
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CadastroTecnico;


import React, { useState } from "react";
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import "./style.css";  

const CadastroTecnico = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const tecnicoData = {
      CPF: cpf,
      Nome: nome,
      Email: email,
      Senha: senha,
      TipoUsuario: "Tecnico",
      Telefone: telefone,
      Especialidade: especialidade
    };

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5238/api/Tecnico', tecnicoData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Técnico cadastrado com sucesso.');
      
      setNome("");
      setCpf("");
      setEmail("");
      setTelefone("");
      setSenha("");
      setEspecialidade("");

      navigate("/menu"); 

    } catch (error) {
      if (error.response && error.response.data.errors) {
        const validationErrors = error.response.data.errors;
        setErrors(validationErrors); 
      } else {
        console.error('Erro ao cadastrar técnico:', error.message);
      }
    }
  };

  return (
    <div className="tela-cheia-oss">
      <div className="CadastroDeOS-oss">
        <div className="cabecalhoTitulo">Cadastro de Técnico</div>
        <form onSubmit={handleSubmit}>
          <div className="cabecalhoOrdem-os">
            <div className="campoCpf-os">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome do Técnico"
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
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                 className="inputemail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o e-mail"
              />
              {errors.Email && <p className="error-message">{errors.Email[0]}</p>}
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
              {errors.Telefone && <p className="error-message">{errors.Telefone[0]}</p>}
            </div>

            <div className="campoCpf-os">
              <label htmlFor="especialidade">Especialidade:</label>
              <input
                type="text"
                id="especialidade"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
                placeholder="Digite a especialidade"
              />
              {errors.Especialidade && <p className="error-message">{errors.Especialidade[0]}</p>}
            </div>
            <div className="campoCpf-os">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                className="inputsenha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite a senha"
              />
              {errors.Senha && <p className="error-message">{errors.Senha[0]}</p>}
            </div>
          </div>
          <button type="submit202" className="submit-button4">Salvar Técnico</button> 
        </form>
      </div>
    </div>
  );
};

export default CadastroTecnico;
