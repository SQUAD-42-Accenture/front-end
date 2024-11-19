import React, { useState, useEffect } from "react";
import "./styles.css";  

const CadastroOrdemServico = () => {
  const [numeroOS, setNumeroOS] = useState(""); 
  const [clienteCPF, setClienteCPF] = useState(""); 
  const [tecnicoCPF, setTecnicoCPF] = useState("");  
  const [cliente, setCliente] = useState(null); 
  const [tecnico, setTecnico] = useState(null); 
  const [pagamento, setPagamento] = useState("");
  const [status, setStatus] = useState("");
  const [serialEquipamento, setSerialEquipamento] = useState(""); 
  const [descricao, setDescricao] = useState("");
  const [servicosProdutos, setServicosProdutos] = useState([]); 
  const [dataAbertura, setDataAbertura] = useState(""); 
  const [dataConclusao, setDataConclusao] = useState(""); 

  const formasPagamento = ["Boleto", "Cartão de Crédito", "Pix", "Transferência"];
  const statusOpcoes = ["Concluido", "Em Andamento", "Pendente", "Cancelada", "Aberta"];

  const buscarClientePorCPF = async (cpf) => {
    try {
      const response = await fetch(`http://localhost:5238/api/Cliente/${cpf}`);
      if (!response.ok) throw new Error("Erro ao buscar cliente");
      const data = await response.json();
      setCliente(data);  
    } catch (error) {
      console.error("Erro ao buscar cliente:", error);
      setCliente(null);
    }
  };

  const buscarTecnicoPorCPF = async (cpf) => {
    try {
      const response = await fetch(`http://localhost:5238/api/Tecnico/${cpf}`);
      if (!response.ok) throw new Error("Erro ao buscar técnico");
      const data = await response.json();
      setTecnico(data); 
    } catch (error) {
      console.error("Erro ao buscar técnico:", error);
      setTecnico(null); 
    }
  };

  const adicionarServicoProduto = () => {
    setServicosProdutos([...servicosProdutos, { ServicoId: 0, ProdutoId: 0, CustoProdutoNoServico: 0 }]);
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

    const metodosPermitidos = ["Boleto", "Cartão de Crédito", "Pix", "Transferência"];
    if (!metodosPermitidos.includes(pagamento)) {
      alert("Método de pagamento inválido.");
      return;
    }

   
    const ordemServicoData = {
      dataAbertura: dataAbertura,
      dataConclusao: dataConclusao,
      Descricao: descricao,
      MetodoPagamento: pagamento,
      ValorTotal: 0, 
      ClienteCPF: clienteCPF,
      SerialEquipamento: serialEquipamento,
      TecnicoCPF: tecnicoCPF,
      Status: status,
      ServicoProdutos: servicosProdutos,
    };

   
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
      alert("Ordem de serviço criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar ordem de serviço:", error);
      alert("Erro ao criar ordem de serviço. Tente novamente.");
    }
  };

  return (
    <div className="tela-cheia-os">
      <header className="header2"></header>
      <nav className="menu2"></nav>
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
                onChange={(e) => {
                  setClienteCPF(e.target.value);
                  buscarClientePorCPF(e.target.value); 
                }}
                placeholder="Digite o CPF do Cliente"
              />
              {cliente && <p>{`Cliente encontrado: ${cliente.Nome}`}</p>}
            </div>
            <div className="campoCpf-os">
              <label htmlFor="cpfTecnico">CPF do Técnico:</label>
              <input
                type="text"
                id="cpfTecnico"
                value={tecnicoCPF}
                onChange={(e) => {
                  setTecnicoCPF(e.target.value);
                  buscarTecnicoPorCPF(e.target.value); 
                }}
                placeholder="Digite o CPF do Técnico"
              />
              {tecnico && <p>{`Técnico encontrado: ${tecnico.Nome}`}</p>}
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
                type="date"
                id="dataAbertura"
                value={dataAbertura}
                onChange={(e) => setDataAbertura(e.target.value)}
              />
            </div>
            <div className="inputField-os">
              <label htmlFor="dataConclusao">Data de Conclusão:</label>
              <input
                type="date"
                id="dataConclusao"
                value={dataConclusao}
                onChange={(e) => setDataConclusao(e.target.value)}
              />
            </div>
          </section>

          <section className="servicosProdutos-os">
            <h3>Serviços e Produtos</h3>
            {servicosProdutos.map((sp, index) => (
              <div key={index}>
                <input
                  type="number"
                  value={sp.ServicoId}
                  onChange={(e) => {
                    const newServicosProdutos = [...servicosProdutos];
                    newServicosProdutos[index].ServicoId = e.target.value;
                    setServicosProdutos(newServicosProdutos);
                  }}
                  placeholder="ID do Serviço"
                />
                <input
                  type="number"
                  value={sp.ProdutoId}
                  onChange={(e) => {
                    const newServicosProdutos = [...servicosProdutos];
                    newServicosProdutos[index].ProdutoId = e.target.value;
                    setServicosProdutos(newServicosProdutos);
                  }}
                  placeholder="ID do Produto"
                />
                <input
                  type="number"
                  value={sp.CustoProdutoNoServico}
                  onChange={(e) => {
                    const newServicosProdutos = [...servicosProdutos];
                    newServicosProdutos[index].CustoProdutoNoServico = e.target.value;
                    setServicosProdutos(newServicosProdutos);
                  }}
                  placeholder="Custo do Produto"
                />
                <button type="button" onClick={() => removerServicoProduto(index)}>Remover</button>
              </div>
            ))}
            <button type="button" onClick={adicionarServicoProduto}>Adicionar Serviço/Produto</button>
          </section>

          <button type="submit">Criar Ordem de Serviço</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroOrdemServico;

