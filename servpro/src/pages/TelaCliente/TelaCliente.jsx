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
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Button,
  Pagination,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const ClienteOrdens = () => {
  const [ordensServico, setOrdensServico] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Termo de busca
  const [cpf, setCpf] = useState(""); // CPF do cliente, será recuperado do token
  const [page, setPage] = useState(1); // Página para paginação
  const [rowsPerPage, setRowsPerPage] = useState(10); // Itens por página

  // Recuperar o token do localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decodifica o JWT
      setCpf(decodedToken.cpf); // Supondo que o JWT tenha o campo "cpf"
    }
  }, []);

  // Carregar as ordens de serviço assim que o CPF estiver disponível
  useEffect(() => {
    if (cpf) {
      const token = localStorage.getItem("token");

      if (token) {
        axios
          .get(`https://servpro.onrender.com/api/Cliente/ordens/${cpf}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setOrdensServico(response.data); // Definir as ordens de serviço do cliente
          })
          .catch((error) => {
            console.error("Erro ao carregar ordens de serviço", error);
          });
      } else {
        console.error("Token de autenticação não encontrado.");
      }
    }
  }, [cpf]);

  // Filtra as ordens com base no termo de busca
  const filteredOrdens = ordensServico.filter((ordem) =>
    ordem.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Função para realizar o download do PDF da ordem
  const downloadPDF = (ordemId) => {
    const pdfUrl = `https://servpro.onrender.com/api/OrdemDeServico/${ordemId}/gerar-pdf`;
    window.open(pdfUrl, "_blank");
  };

  // Função para lidar com a mudança da página
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Função para alterar o número de ordens exibidas por página
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // Resetar para a primeira página ao mudar o número de itens por página
  };

  return (
    <div style={{ padding: "20px", marginTop: "10px" }}>
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
          placeholder="Buscar Ordem"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            borderRadius: "100px",
            width: "300px",
            marginBottom: "10px",
          }}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
      </div>

      <TableContainer
        component={Paper}
        style={{ maxWidth: "100%", margin: "0 auto", marginTop: "20px" }}
      >
        <Table aria-label="Ordens de Serviço">
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center" }}>Número da OS</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Data de Abertura</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrdens
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((ordem) => (
                <TableRow key={ordem.Id}>
                  <TableCell style={{ textAlign: "center" }}>{ordem.Id}</TableCell>
                  <TableCell>{ordem.Descricao}</TableCell>
                  <TableCell>{ordem.Status}</TableCell>
                  <TableCell>{new Date(ordem.dataAbertura).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => downloadPDF(ordem.Id)}>
                      <Download />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={Math.ceil(filteredOrdens.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "end",
        }}
      />
    </div>
  );
};

export default ClienteOrdens;

