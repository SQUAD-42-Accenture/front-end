// import React, { useState, useEffect } from "react";
// import "./styles.css";

// const CadastroOrdemServico = () => {
//   const [clienteCPF, setClienteCPF] = useState(""); 
//   const [tecnicoCPF, setTecnicoCPF] = useState("");  
//   const [descricao, setDescricao] = useState("");
//   const [pagamento, setPagamento] = useState("");
//   const [serialEquipamento, setSerialEquipamento] = useState(""); 
//   const [status, setStatus] = useState("Pendente");
//   const [dataAbertura, setDataAbertura] = useState("");
//   const [servicosProdutos, setServicosProdutos] = useState([{ ServicoId: 1, ProdutoId: 1, OrdemDeServicoId: 0 }]);

//   const formasPagamento = ["Boleto", "Cartão de Crédito", "Pix", "Transferência"];
//   const statusOpcoes = ["Concluido", "Em Andamento", "Pendente", "Cancelada", "Aberta"];

//   useEffect(() => {
//     const now = new Date();
//     setDataAbertura(now);
//   }, []);

//   const adicionarServicoProduto = () => {
//     setServicosProdutos([...servicosProdutos, { ServicoId: 0, ProdutoId: 0, OrdemDeServicoId: 0 }]);
//   };

//   const removerServicoProduto = (index) => {
//     const newServicosProdutos = servicosProdutos.filter((_, i) => i !== index);
//     setServicosProdutos(newServicosProdutos);
//   };

//   const enviarFormulario = async (e) => {
//     e.preventDefault();

//     if (clienteCPF.length !== 11 || !/^\d+$/.test(clienteCPF)) {
//       alert("CPF do Cliente inválido.");
//       return;
//     }
//     if (tecnicoCPF.length !== 11 || !/^\d+$/.test(tecnicoCPF)) {
//       alert("CPF do Técnico inválido.");
//       return;
//     }

//     const ordemServicoData = {
//       Descricao: descricao || "Descrição padrão", 
//       MetodoPagamento: pagamento || "Pix", 
//       ClienteCPF: clienteCPF,
//       SerialEquipamento: serialEquipamento || "Serial Padrão",
//       TecnicoCPF: tecnicoCPF,
//       Status: status || "Pendente", 
//       DataAbertura: dataAbertura ? dataAbertura.toISOString() : new Date().toISOString(), 
//       DataConclusao: null, 
//       ValorTotal: 0, 
//       ServicoProdutos: servicosProdutos.map(sp => ({
//         ServicoId: sp.ServicoId || 1, 
//         ProdutoId: sp.ProdutoId || 1, 
//         OrdemDeServicoId: sp.OrdemDeServicoId || 0, 
//       })),
//     };

//     console.log("Dados da requisição:", JSON.stringify(ordemServicoData, null, 2));

//     // Enviar para a API a requisição
//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Usuário não autenticado. Faça login novamente.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5238/api/OrdemDeServico", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify(ordemServicoData),
//       });

//       if (!response.ok) throw new Error("Erro ao criar ordem de serviço");

//       const data = await response.json();
//       console.log("Ordem de serviço criada com sucesso:", data);
//       alert("Ordem de serviço criada com sucesso!");
//     } catch (error) {
//       console.error("Erro ao criar ordem de serviço:", error);
//       alert("Erro ao criar ordem de serviço. Tente novamente.");
//     }
//   };

//   return (
//     <div className="tela-cheia-os">
//       <header className="header2"></header>
//       <nav className="menu2"></nav>
//       <div className="CadastroDeOS-os">
//         <div className="cabecalhoTitulo">Cadastro de Ordem de Serviço</div>
//         <form onSubmit={enviarFormulario}>
//           <div className="cabecalhoOrdem-os">
//             <div className="campoCpf-os">
//               <label htmlFor="cpfCliente">CPF do Cliente:</label>
//               <input
//                 type="text"
//                 id="cpfCliente"
//                 value={clienteCPF}
//                 onChange={(e) => setClienteCPF(e.target.value)}
//                 placeholder="Digite o CPF do Cliente"
//               />
//             </div>

//             <div className="campoCpf-os">
//               <label htmlFor="cpfTecnico">CPF do Técnico:</label>
//               <input
//                 type="text"
//                 id="cpfTecnico"
//                 value={tecnicoCPF}
//                 onChange={(e) => setTecnicoCPF(e.target.value)}
//                 placeholder="Digite o CPF do Técnico"
//               />
//             </div>

//             <div className="campoCpf-os">
//               <label htmlFor="pagamento">Pagamento:</label>
//               <select
//                 id="pagamento"
//                 value={pagamento}
//                 onChange={(e) => setPagamento(e.target.value)}
//               >
//                 {formasPagamento.map((p) => (
//                   <option key={p} value={p}>
//                     {p}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="campoCpf-os">
//               <label htmlFor="status">Status:</label>
//               <select
//                 id="status"
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//               >
//                 {statusOpcoes.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <section className="dadosCliente-os">
//             <div className="inputField-os">
//               <label htmlFor="serialEquipamento">Serial do Equipamento:</label>
//               <input
//                 type="text"
//                 id="serialEquipamento"
//                 value={serialEquipamento}
//                 onChange={(e) => setSerialEquipamento(e.target.value)}
//                 placeholder="Digite o Serial do Equipamento"
//               />
//             </div>
//             <div className="inputField-os">
//               <label htmlFor="descricao">Descrição:</label>
//               <textarea
//                 id="descricao"
//                 value={descricao}
//                 onChange={(e) => setDescricao(e.target.value)}
//                 placeholder="Descreva o serviço"
//               />
//             </div>
//             <div className="inputField-os">
//               <label htmlFor="dataAbertura">Data de Abertura:</label>
//               <input
//                 type="datetime-local"
//                 id="dataAbertura"
//                 value={dataAbertura ? dataAbertura.toISOString().slice(0, 16) : ""}
//                 readOnly
//               />
//             </div>
//           </section>

//           <section className="servicosProdutos-os">
//             <h3>Serviços e Produtos</h3>
//             {servicosProdutos.map((sp, index) => (
//               <div key={index}>
//                 <input
//                   type="number"
//                   value={sp.ServicoId}
//                   onChange={(e) => {
//                     const newServicosProdutos = [...servicosProdutos];
//                     newServicosProdutos[index].ServicoId = parseInt(e.target.value);
//                     setServicosProdutos(newServicosProdutos);
//                   }}
//                   placeholder="ID do Serviço"
//                 />
//                 <input
//                   type="number"
//                   value={sp.ProdutoId}
//                   onChange={(e) => {
//                     const newServicosProdutos = [...servicosProdutos];
//                     newServicosProdutos[index].ProdutoId = parseInt(e.target.value);
//                     setServicosProdutos(newServicosProdutos);
//                   }}
//                   placeholder="ID do Produto"
//                 />
//                 <button type="button" onClick={() => removerServicoProduto(index)}>Remover</button>
//               </div>
//             ))}
//             <button type="button" onClick={adicionarServicoProduto}>Adicionar Serviço/Produto</button>
//           </section>

//           <button type="submit">Criar Ordem de Serviço</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CadastroOrdemServico;


import React, { useState } from "react";
import "./styles.css";

const CadastroOrdemServico = () => {
  const [clienteCPF, setClienteCPF] = useState(""); 
  const [tecnicoCPF, setTecnicoCPF] = useState("");  
  const [descricao, setDescricao] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [serialEquipamento, setSerialEquipamento] = useState(""); 
  const [status, setStatus] = useState("Pendente");
  const [dataAbertura, setDataAbertura] = useState("");
  const [servicosProdutos, setServicosProdutos] = useState([{ ServicoId: 1, ProdutoId: 1, OrdemDeServicoId: 0 }]);

  const formasPagamento = ["Boleto", "Cartão de Crédito", "Pix", "Transferência"];
  const statusOpcoes = ["Concluido", "Em Andamento", "Pendente", "Cancelada", "Aberta"];

  const adicionarServicoProduto = () => {
    setServicosProdutos([...servicosProdutos, { ServicoId: 0, ProdutoId: 0, OrdemDeServicoId: 0 }]);
  };

  const removerServicoProduto = (index) => {
    const newServicosProdutos = servicosProdutos.filter((_, i) => i !== index);
    setServicosProdutos(newServicosProdutos);
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    if (clienteCPF.length !== 11 || !/^\d+$/.test(clienteCPF)) {
      alert("CPF do Cliente inválido.");
      return;
    }
    if (tecnicoCPF.length !== 11 || !/^\d+$/.test(tecnicoCPF)) {
      alert("CPF do Técnico inválido.");
      return;
    }

    const ordemServicoData = {
      Descricao: descricao || "Descrição padrão", 
      MetodoPagamento: pagamento || "Pix", 
      ClienteCPF: clienteCPF,
      SerialEquipamento: serialEquipamento || "Serial Padrão",
      TecnicoCPF: tecnicoCPF,
      Status: status || "Pendente", 
      DataAbertura: dataAbertura ? dataAbertura.toISOString() : new Date().toISOString(), 
      DataConclusao: null, 
      ValorTotal: 0, 
      ServicoProdutos: servicosProdutos.map(sp => ({
        ServicoId: sp.ServicoId || 1, 
        ProdutoId: sp.ProdutoId || 1, 
        OrdemDeServicoId: sp.OrdemDeServicoId || 0, 
      })),
    };

    console.log("Dados da requisição:", JSON.stringify(ordemServicoData, null, 2));

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Usuário não autenticado. Faça login novamente.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5238/api/OrdemDeServico", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(ordemServicoData),
      });

      if (!response.ok) throw new Error("Erro ao criar ordem de serviço");

      const data = await response.json();
      console.log("Ordem de serviço criada com sucesso:", data);

    
      const confirmacao = window.confirm("Cadastro de OS realizado com sucesso!");
      if (confirmacao) {
       
        window.location.href = "/menu"; 
      }
    } catch (error) {
      console.error("Erro ao criar ordem de serviço:", error);
      alert("Erro ao criar ordem de serviço. Tente novamente.");
    }
  };

  return (
    <div className="tela-cheia-os">
      <div className="CadastroDeOS-os">
        <div className="cabecalhoTitulo">Cadastro de Ordem de Serviço</div>
        <form onSubmit={enviarFormulario}>
          <div className="cabecalhoOrdem-os">
            <div className="campoCpf-os">
              <label htmlFor="cpfCliente">CPF do Cliente:</label>
              <input
                type="text"
                id="cpfCliente"
                value={clienteCPF}
                onChange={(e) => setClienteCPF(e.target.value)}
                placeholder="Digite o CPF do Cliente"
              />
            </div>

            <div className="campoCpf-os">
              <label htmlFor="cpfTecnico">CPF do Técnico:</label>
              <input
                type="text"
                id="cpfTecnico"
                value={tecnicoCPF}
                onChange={(e) => setTecnicoCPF(e.target.value)}
                placeholder="Digite o CPF do Técnico"
              />
            </div>

            <div className="campoCpf-os">
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

            <div className="campoCpf-os">
              <label htmlFor="status">Status:</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {statusOpcoes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <section className="dadosCliente-os">
            <div className="inputField-os">
              <label htmlFor="serialEquipamento">Serial do Equipamento:</label>
              <input
                type="text"
                id="serialEquipamento"
                value={serialEquipamento}
                onChange={(e) => setSerialEquipamento(e.target.value)}
                placeholder="Digite o Serial do Equipamento"
              />
            </div>
            <div className="inputField-os">
              <label htmlFor="descricao">Descrição:</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descreva o serviço"
              />
            </div>
            <div className="inputField-os">
              <label htmlFor="dataAbertura">Data de Abertura:</label>
              <input
                type="datetime-local"
                id="dataAbertura"
                value={dataAbertura ? dataAbertura.toISOString().slice(0, 16) : ""}
                onChange={(e) => setDataAbertura(new Date(e.target.value))}
              />
            </div>
          </section>

          <section className="servicosProdutos-os">
            <h3>Serviços e Produtos</h3>
            {servicosProdutos.map((sp, index) => (
              <div key={index} className="servicoProduto-item">
                <div className="servicoProduto-container">
                  <div className="input-wrapper">
                    <label htmlFor={`ServicoId-${index}`}>Digite o ID do Serviço:</label>
                    <input
                      type="number"
                      id={`ServicoId-${index}`}
                      value={sp.ServicoId}
                      onChange={(e) => {
                        const newServicosProdutos = [...servicosProdutos];
                        newServicosProdutos[index].ServicoId = parseInt(e.target.value);
                        setServicosProdutos(newServicosProdutos);
                      }}
                      placeholder="ID do Serviço"
                    />
                  </div>

                  <div className="input-wrapper">
                    <label htmlFor={`ProdutoId-${index}`}>Digite o ID do Produto:</label>
                    <input
                      type="number"
                      id={`ProdutoId-${index}`}
                      value={sp.ProdutoId}
                      onChange={(e) => {
                        const newServicosProdutos = [...servicosProdutos];
                        newServicosProdutos[index].ProdutoId = parseInt(e.target.value);
                        setServicosProdutos(newServicosProdutos);
                      }}
                      placeholder="ID do Produto"
                    />
                  </div>

                  <button type="button66" onClick={() => removerServicoProduto(index)}>
                    Remover
                  </button>
                </div>
              </div>
            ))}
            <button type="button" onClick={adicionarServicoProduto}>
              Adicionar Serviço/Produto
            </button>
          </section>
          <button type="submit202">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroOrdemServico;


