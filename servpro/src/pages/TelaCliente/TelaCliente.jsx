// import React, { useState, useEffect } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton, Button } from "@mui/material";
// import { Download } from "@mui/icons-material";
// import axios from "axios";

// const ClienteOrdens = () => {
//   const [ordensServico, setOrdensServico] = useState([]);
//   const [cpf, setCpf] = useState(""); 
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     if (cpf) {
//       axios
//         .get(`https://servpro.onrender.com/api/Cliente/ordens/${cpf}`)
//         .then((response) => {
//           setOrdensServico(response.data); 
//         })
//         .catch((error) => {
//           console.error("Erro ao carregar ordens de serviço", error);
//         });
//     }
//   }, [cpf]); 

//   const filteredOrdens = ordensServico.filter((ordem) =>
//     ordem.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const downloadPDF = (ordemId) => {
//     const pdfUrl = `https://servpro.onrender.com/api/OrdemDeServico/${ordemId}/gerar-pdf`;
//     window.open(pdfUrl, "_blank");
//   };

//   return (
//     <div style={{ padding: "20px", marginTop: "10px" }}>
//       <div
//         style={{
//           backgroundColor: "white",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           padding: "20px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2 style={{ color: "#727070", marginBottom: "10px" }}>Minhas Ordens de Serviço</h2>
//         <TextField
//           variant="outlined"
//           placeholder="Buscar Ordem"
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             borderRadius: "100px",
//             width: "300px",
//             marginBottom: "10px",
//           }}
//         />
//       </div>

//       <TableContainer component={Paper} style={{ maxWidth: "100%", margin: "0 auto", marginTop: "20px" }}>
//         <Table aria-label="Ordens de Serviço">
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ textAlign: "center" }}>Número da OS</TableCell>
//               <TableCell>Descrição</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Data de Abertura</TableCell>
//               <TableCell>Ações</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredOrdens.map((ordem) => (
//               <TableRow key={ordem.Id}>
//                 <TableCell style={{ textAlign: "center" }}>{ordem.Id}</TableCell>
//                 <TableCell>{ordem.Descricao}</TableCell>
//                 <TableCell>{ordem.Status}</TableCell>
//                 <TableCell>{new Date(ordem.dataAbertura).toLocaleDateString()}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary" onClick={() => downloadPDF(ordem.Id)}>
//                     <Download />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default ClienteOrdens;



import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton } from "@mui/material";
import { Download } from "@mui/icons-material";
import axios from "axios";

const ClienteOrdens = () => {
  const [ordensServico, setOrdensServico] = useState([]);
  const [cpf, setCpf] = useState(""); 
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(""); 
  useEffect(() => {
    const token = localStorage.getItem("token"); 

  
    if (!token) {
      setError("Token de autenticação não encontrado. Usuário não está autenticado.");
      return; 
    }

 
    if (cpf) {
      axios
        .get(`https://servpro.onrender.com/api/Cliente/ordens/${cpf}`, {
          headers: {
            Authorization: `Bearer ${token}`,  
          },
        })
        .then((response) => {
          setOrdensServico(response.data); 
        })
        .catch((error) => {
          setError(" ");
          console.error("Erro ao carregar ordens de serviço", error);
        });
    }
  }, [cpf]);

  const filteredOrdens = ordensServico.filter((ordem) =>
    ordem.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const downloadPDF = (ordemId) => {
    const token = localStorage.getItem("token"); 

    if (!token) {
      setError("Token de autenticação não encontrado. Não é possível gerar o PDF.");
      return;  
    }

    if (ordemId) {
      const pdfUrl = `https://servpro.onrender.com/api/OrdemDeServico/${ordemId}/gerar-pdf`;  
      window.open(pdfUrl, "_blank");
    } else {
      setError("ID da ordem de serviço não encontrado!");
      console.error("ID da ordem de serviço não encontrado!");
    }
  };

 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR'); 
  };

  return (
    <div style={{ padding: "20px", marginTop: "10px" }}>
     
      {error && (
        <div style={{ color: 'red', marginBottom: '20px' }}>
          <strong>{error}</strong>
        </div>
      )}

      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ color: "#727070", marginBottom: "10px" }}>Minhas Ordens de Serviço</h2>
        <TextField
          variant="outlined"
          placeholder="Digite seu CPF"
          size="small"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          style={{
            borderRadius: "100px",
            width: "300px",
            marginBottom: "10px",
          }}
        />
        {/* <TextField
          variant="outlined"
          placeholder="Buscar Ordem"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            borderRadius: "100px",
            width: "300px",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        /> */}
      </div>

      <TableContainer component={Paper} style={{ maxWidth: "100%", margin: "0 auto", marginTop: "20px" }}>
        <Table aria-label="Ordens de Serviço">
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center" }}>Número da OS</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Data de Abertura</TableCell>
              <TableCell>Pagamento</TableCell>
              <TableCell>Equipamento</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrdens.length > 0 ? (
              filteredOrdens.map((ordem) => (
                <TableRow key={ordem.Id}>
                  <TableCell style={{ textAlign: "center" }}>{ordem.Id}</TableCell>
                  <TableCell>{ordem.Descricao}</TableCell>
                  <TableCell>{ordem.Status}</TableCell>
                  <TableCell>{formatDate(ordem.dataAbertura)}</TableCell>
                  <TableCell>{ordem.MetodoPagamento}</TableCell>
                  <TableCell>{ordem.SerialEquipamento}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => downloadPDF(ordem.Id)}>
                      <Download />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} style={{ textAlign: "center" }}>
                  Digite seu CPF e verifique se tem OS para você.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClienteOrdens;
