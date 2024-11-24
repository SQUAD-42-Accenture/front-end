// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   IconButton,
//   Pagination,
//   Modal,
//   Box,
//   Button,
// } from "@mui/material";
// import { Download, Edit } from "@mui/icons-material";
// import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios";

// const TecnicoLista = () => {
//   const location = useLocation();
//   const [ordensServico, setOrdensServico] = useState(location.state?.ordensServico || []); 

//   const [searchTerm, setSearchTerm] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedOrdem, setSelectedOrdem] = useState(null);
//   const [novoStatus, setNovoStatus] = useState("");

//   const filteredOrdens = ordensServico.filter((ordem) =>
//     ordem.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const downloadPDF = (ordemId) => {
//     const pdfUrl = `https://servpro.onrender.com/api/OrdemDeServico/${ordemId}/gerar-pdf`;
//     window.open(pdfUrl, "_blank");
//   };

//   const handleOpenModal = (ordem) => {
//     setSelectedOrdem(ordem);
//     setNovoStatus(ordem.Status);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const handleConfirmarAlteracao = () => {
//     if (!novoStatus) {
//       alert("Por favor, selecione um status.");
//       return;
//     }

//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Token não encontrado. Por favor, faça o login novamente.");
//       return;
//     }

//     console.log("Token encontrado:", token);

//     axios
//       .put(
//         `https://servpro.onrender.com/api/OrdemDeServico/${selectedOrdem.Id}`,
//         { Status: novoStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         alert("Status da Ordem de Serviço atualizado com sucesso!");
//         setOrdensServico((prevOrdens) =>
//           prevOrdens.map((ordem) =>
//             ordem.Id === selectedOrdem.Id ? { ...ordem, Status: novoStatus } : ordem
//           )
//         ); 
//         setOpenModal(false);
//       })
//       .catch((error) => {
//         console.error("Erro ao atualizar a ordem de serviço:", error);
//         alert("Erro ao atualizar a Ordem de Serviço. Tente novamente.");
//       });
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
//         <h2 style={{ color: "#727070", marginBottom: "10px" }}>
//           Listagem de Ordens de Serviço
//         </h2>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <TextField
//             variant="outlined"
//             placeholder="Buscar Ordem"
//             size="small"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: <SearchIcon />,
//             }}
//             style={{
//               borderRadius: "100px",
//               width: "300px",
//             }}
//           />
//         </div>
//       </div>

//       <TableContainer
//         component={Paper}
//         style={{ maxWidth: "100%", margin: "0 auto", marginTop: "20px" }}
//       >
//         <Table aria-label="Ordens de Serviço">
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ textAlign: "center" }}>
//                 Número da OS
//               </TableCell>
//               <TableCell>Cliente</TableCell>
//               <TableCell>Data de Abertura</TableCell>
//               <TableCell>Equipamento</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Ações</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredOrdens.map((ordem) => (
//               <TableRow key={ordem.Id}>
//                 <TableCell style={{ textAlign: "center" }}>
//                   {ordem.Id}
//                 </TableCell>
//                 <TableCell>{ordem.ClienteCPF}</TableCell>
//                 <TableCell>
//                   {new Date(ordem.dataAbertura).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell>{ordem.SerialEquipamento}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     style={{
//                       backgroundColor: getStatusColor(ordem.Status),
//                       width: "120px",
//                       textAlign: "center",
//                     }}
//                     onClick={() => handleOpenModal(ordem)}
//                   >
//                     {ordem.Status}
//                   </Button>
//                 </TableCell>
//                 <TableCell>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleOpenModal(ordem)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="primary"
//                     onClick={() => downloadPDF(ordem.Id)}
//                   >
//                     <Download />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Pagination
//         count={Math.ceil(filteredOrdens.length / 10)}
//         variant="outlined"
//         shape="rounded"
//         color="primary"
//         style={{
//           marginTop: "20px",
//           display: "flex",
//           justifyContent: "end",
//         }}
//       />

//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "white",
//             padding: "20px",
//             width: "400px",
//             boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h3>Alterar Status - Ordem ID: {selectedOrdem?.Id}</h3>
//           <TextField
//             select
//             label="Novo Status"
//             fullWidth
//             value={novoStatus}
//             onChange={(e) => setNovoStatus(e.target.value)}
//             variant="outlined"
//             SelectProps={{
//               native: true,
//             }}
//           >
//             <option value="Em Andamento">Andamento</option>
//             <option value="Aberta">Aberta</option>
//             <option value="Concluido">Concluído</option>
//             <option value="Pendente">Pendente</option>
//           </TextField>

//           <div style={{ marginTop: "20px", textAlign: "right" }}>
//             <Button onClick={handleCloseModal} color="secondary">
//               Cancelar
//             </Button>
//             <Button
//               onClick={handleConfirmarAlteracao}
//               color="primary"
//               style={{ marginLeft: "10px" }}
//             >
//               Confirmar
//             </Button>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// const getStatusColor = (status) => {
//   switch (status) {
//     case "Concluido":
//       return "green";
//     case "Em Andamento":
//       return "blue";
//     case "Pendente":
//       return "orange";
//     case "Cancelada":
//       return "red";
//     case "Aberta":
//       return "lightblue";
//     default:
//       return "gray";
//   }
// };

// export default TecnicoLista;


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   IconButton,
//   Pagination,
//   Modal,
//   Box,
//   Button,
// } from "@mui/material";
// import { Download, Edit } from "@mui/icons-material";
// import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios";

// const TecnicoLista = () => {
//   const location = useLocation();
//   const [ordensServico, setOrdensServico] = useState(location.state?.ordensServico || []);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedOrdem, setSelectedOrdem] = useState(null);
//   const [novoStatus, setNovoStatus] = useState("");
//   const [cpf, setCpf] = useState("");
//   const [data, setData] = useState("");
//   const [hora, setHora] = useState("");
//   const [comentario, setComentario] = useState("");

//   const filteredOrdens = ordensServico.filter((ordem) =>
//     ordem.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const downloadPDF = (ordemId) => {
//     const pdfUrl = `https://servpro.onrender.com/api/OrdemDeServico/${ordemId}/gerar-pdf`;
//     window.open(pdfUrl, "_blank");
//   };

//   const handleOpenModal = (ordem) => {
//     setSelectedOrdem(ordem);
//     setNovoStatus(ordem.Status);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const handleConfirmarAlteracao = () => {
//     if (!novoStatus || !cpf || !data || !hora || !comentario) {
//       alert("Por favor, preencha todos os campos.");
//       return;
//     }

//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Token não encontrado. Por favor, faça o login novamente.");
//       return;
//     }

//     console.log("Token encontrado:", token);

//     axios
//       .put(
//         `https://servpro.onrender.com/api/OrdemDeServico/${selectedOrdem.Id}`,
//         { Status: novoStatus, CPF: cpf, Data: data, Hora: hora, Comentario: comentario },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         alert("Status da Ordem de Serviço atualizado com sucesso!");
//         setOrdensServico((prevOrdens) =>
//           prevOrdens.map((ordem) =>
//             ordem.Id === selectedOrdem.Id ? { ...ordem, Status: novoStatus } : ordem
//           )
//         ); 
//         setOpenModal(false);
//       })
//       .catch((error) => {
//         console.error("Erro ao atualizar a ordem de serviço:", error);
//         alert("Erro ao atualizar a Ordem de Serviço. Tente novamente.");
//       });
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
//         <h2 style={{ color: "#727070", marginBottom: "10px" }}>
//           Listagem de Ordens de Serviço
//         </h2>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <TextField
//             variant="outlined"
//             placeholder="Buscar Ordem"
//             size="small"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: <SearchIcon />,
//             }}
//             style={{
//               borderRadius: "100px",
//               width: "300px",
//             }}
//           />
//         </div>
//       </div>

//       <TableContainer
//         component={Paper}
//         style={{ maxWidth: "100%", margin: "0 auto", marginTop: "20px" }}
//       >
//         <Table aria-label="Ordens de Serviço">
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ textAlign: "center" }}>
//                 Número da OS
//               </TableCell>
//               <TableCell>Cliente</TableCell>
//               <TableCell>Data de Abertura</TableCell>
//               <TableCell>Equipamento</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Ações</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredOrdens.map((ordem) => (
//               <TableRow key={ordem.Id}>
//                 <TableCell style={{ textAlign: "center" }}>
//                   {ordem.Id}
//                 </TableCell>
//                 <TableCell>{ordem.ClienteCPF}</TableCell>
//                 <TableCell>
//                   {new Date(ordem.dataAbertura).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell>{ordem.SerialEquipamento}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     style={{
//                       backgroundColor: getStatusColor(ordem.Status),
//                       width: "120px",
//                       textAlign: "center",
//                     }}
//                     onClick={() => handleOpenModal(ordem)}
//                   >
//                     {ordem.Status}
//                   </Button>
//                 </TableCell>
//                 <TableCell>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleOpenModal(ordem)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="primary"
//                     onClick={() => downloadPDF(ordem.Id)}
//                   >
//                     <Download />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Pagination
//         count={Math.ceil(filteredOrdens.length / 10)}
//         variant="outlined"
//         shape="rounded"
//         color="primary"
//         style={{
//           marginTop: "20px",
//           display: "flex",
//           justifyContent: "end",
//         }}
//       />

//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "white",
//             padding: "20px",
//             width: "400px",
//             boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h3>Alterar Status - Ordem ID: {selectedOrdem?.Id}</h3>

//           <TextField
//             label="Número da Ordem"
//             fullWidth
//             value={selectedOrdem?.Id || ""}
//             variant="outlined"
//             disabled
//             style={{ marginBottom: "10px" }}
//           />

//           <TextField
//             label="CPF"
//             fullWidth
//             value={cpf}
//             onChange={(e) => setCpf(e.target.value)}
//             variant="outlined"
//             style={{ marginBottom: "10px" }}
//           />

//           <TextField
//             label="Data"
//             fullWidth
//             value={data}
//             onChange={(e) => setData(e.target.value)}
//             variant="outlined"
//             type="date"
//             style={{ marginBottom: "10px" }}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />

//           <TextField
//             label="Hora"
//             fullWidth
//             value={hora}
//             onChange={(e) => setHora(e.target.value)}
//             variant="outlined"
//             type="time"
//             style={{ marginBottom: "10px" }}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />

//           <TextField
//             label="Comentário"
//             fullWidth
//             value={comentario}
//             onChange={(e) => setComentario(e.target.value)}
//             variant="outlined"
//             multiline
//             rows={4}
//             style={{ marginBottom: "20px" }}
//           />

//           <div style={{ marginTop: "20px", textAlign: "right" }}>
//             <Button onClick={handleCloseModal} color="secondary">
//               Cancelar
//             </Button>
//             <Button
//               onClick={handleConfirmarAlteracao}
//               color="primary"
//               style={{ marginLeft: "10px" }}
//             >
//               Confirmar
//             </Button>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// };


// const getStatusColor = (status) => {
//   switch (status) {
//     case "Concluido":
//       return "green";
//     case "Em Andamento":
//       return "blue";
//     case "Pendente":
//       return "orange";
//     case "Cancelada":
//       return "red";
//     case "Aberta":
//       return "lightblue";
//     default:
//       return "gray";
//   }
// };

// export default TecnicoLista;



// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   IconButton,
//   Pagination,
//   Modal,
//   Box,
//   Button,
// } from "@mui/material";
// import { Download, Edit } from "@mui/icons-material";
// import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios";

// const TecnicoLista = () => {
//   const location = useLocation();
//   const [ordensServico, setOrdensServico] = useState(location.state?.ordensServico || []);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedOrdem, setSelectedOrdem] = useState(null);
//   const [novoStatus, setNovoStatus] = useState("");
//   const [cpf, setCpf] = useState("");
//   const [data, setData] = useState("");
//   const [hora, setHora] = useState("");
//   const [comentario, setComentario] = useState("");

//   const filteredOrdens = ordensServico.filter((ordem) =>
//     ordem.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const downloadPDF = (ordemId) => {
//     const pdfUrl = `https://servpro.onrender.com/api/OrdemDeServico/${ordemId}/gerar-pdf`;
//     window.open(pdfUrl, "_blank");
//   };

//   const handleOpenModal = (ordem) => {
//     setSelectedOrdem(ordem);
//     setNovoStatus(ordem.Status);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const handleConfirmarAlteracao = () => {
//     if (!novoStatus || !cpf || !data || !hora || !comentario) {
//       alert("Por favor, preencha todos os campos.");
//       return;
//     }

//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Token não encontrado. Por favor, faça o login novamente.");
//       return;
//     }

//     console.log("Token encontrado:", token);

//     axios
//       .put(
//         `https://servpro.onrender.com/api/OrdemDeServico/${selectedOrdem.Id}`,
//         { Status: novoStatus, CPF: cpf, Data: data, Hora: hora, Comentario: comentario },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         alert("Status da Ordem de Serviço atualizado com sucesso!");
//         setOrdensServico((prevOrdens) =>
//           prevOrdens.map((ordem) =>
//             ordem.Id === selectedOrdem.Id ? { ...ordem, Status: novoStatus } : ordem
//           )
//         ); 
//         setOpenModal(false);
//       })
//       .catch((error) => {
//         console.error("Erro ao atualizar a ordem de serviço:", error);
//         alert("Erro ao atualizar a Ordem de Serviço. Tente novamente.");
//       });
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
//         <h2 style={{ color: "#727070", marginBottom: "10px" }}>
//           Listagem de Ordens de Serviço
//         </h2>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <TextField
//             variant="outlined"
//             placeholder="Buscar Ordem"
//             size="small"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: <SearchIcon />,
//             }}
//             style={{
//               borderRadius: "100px",
//               width: "300px",
//             }}
//           />
//         </div>
//       </div>

//       <TableContainer
//         component={Paper}
//         style={{ maxWidth: "100%", margin: "0 auto", marginTop: "20px" }}
//       >
//         <Table aria-label="Ordens de Serviço">
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ textAlign: "center" }}>
//                 Número da OS
//               </TableCell>
//               <TableCell>Cliente</TableCell>
//               <TableCell>Data de Abertura</TableCell>
//               <TableCell>Equipamento</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Ações</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredOrdens.map((ordem) => (
//               <TableRow key={ordem.Id}>
//                 <TableCell style={{ textAlign: "center" }}>
//                   {ordem.Id}
//                 </TableCell>
//                 <TableCell>{ordem.ClienteCPF}</TableCell>
//                 <TableCell>
//                   {new Date(ordem.dataAbertura).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell>{ordem.SerialEquipamento}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     style={{
//                       backgroundColor: getStatusColor(ordem.Status),
//                       width: "120px",
//                       textAlign: "center",
//                     }}
//                     onClick={() => handleOpenModal(ordem)}
//                   >
//                     {ordem.Status}
//                   </Button>
//                 </TableCell>
//                 <TableCell>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleOpenModal(ordem)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="primary"
//                     onClick={() => downloadPDF(ordem.Id)}
//                   >
//                     <Download />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Pagination
//         count={Math.ceil(filteredOrdens.length / 10)}
//         variant="outlined"
//         shape="rounded"
//         color="primary"
//         style={{
//           marginTop: "20px",
//           display: "flex",
//           justifyContent: "end",
//         }}
//       />

//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "white",
//             padding: "20px",
//             width: "400px",
//             boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h3>Alterar Status - Ordem ID: {selectedOrdem?.Id}</h3>

//           <TextField
//             label="Número da Ordem"
//             fullWidth
//             value={selectedOrdem?.Id || ""}
//             variant="outlined"
//             disabled
//             style={{ marginBottom: "10px" }}
//           />

//           <TextField
//             label="CPF"
//             fullWidth
//             value={cpf}
//             onChange={(e) => setCpf(e.target.value)}
//             variant="outlined"
//             style={{ marginBottom: "10px" }}
//           />

//           <TextField
//             label="Data"
//             fullWidth
//             value={data}
//             onChange={(e) => setData(e.target.value)}
//             variant="outlined"
//             type="date"
//             style={{ marginBottom: "10px" }}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />

//           <TextField
//             label="Hora"
//             fullWidth
//             value={hora}
//             onChange={(e) => setHora(e.target.value)}
//             variant="outlined"
//             type="time"
//             style={{ marginBottom: "10px" }}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />

//           <TextField
//             label="Comentário"
//             fullWidth
//             value={comentario}
//             onChange={(e) => setComentario(e.target.value)}
//             variant="outlined"
//             multiline
//             rows={4}
//             style={{ marginBottom: "20px" }}
//           />

//           <div style={{ marginTop: "20px", textAlign: "right" }}>
//             <Button onClick={handleCloseModal} color="secondary">
//               Cancelar
//             </Button>
//             <Button
//               onClick={handleConfirmarAlteracao}
//               color="primary"
//               style={{ marginLeft: "10px" }}
//             >
//               Confirmar
//             </Button>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// // Função que define a cor do status
// const getStatusColor = (status) => {
//   switch (status) {
//     case "Concluido":
//       return "green";
//     case "Em Andamento":
//       return "blue";
//     case "Pendente":
//       return "orange";
//     case "Cancelada":
//       return "red";
//     case "Aberta":
//       return "lightblue";
//     default:
//       return "gray";
//   }
// };

// export default TecnicoLista;


import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
  Pagination,
  Modal,
  Box,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Download, Edit } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const TecnicoLista = () => {
  const location = useLocation();
  const [ordensServico, setOrdensServico] = useState(location.state?.ordensServico || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrdem, setSelectedOrdem] = useState(null);
  const [novoStatus, setNovoStatus] = useState("");
  const [cpf, setCpf] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [comentario, setComentario] = useState("");

  const filteredOrdens = ordensServico.filter((ordem) =>
    ordem.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const downloadPDF = (ordemId) => {
    const pdfUrl = `https://servpro.onrender.com/api/OrdemDeServico/${ordemId}/gerar-pdf`;
    window.open(pdfUrl, "_blank");
  };

  const handleOpenModal = (ordem) => {
    setSelectedOrdem(ordem);
    setNovoStatus(ordem.Status); // Atualiza o status inicial
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmarAlteracao = () => {
    if (!novoStatus || !cpf || !data || !hora || !comentario) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token não encontrado. Por favor, faça o login novamente.");
      return;
    }

    axios
      .put(
        `https://servpro.onrender.com/api/OrdemDeServico/${selectedOrdem.Id}`,
        { Status: novoStatus, CPF: cpf, Data: data, Hora: hora, Comentario: comentario },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        alert("Status da Ordem de Serviço atualizado com sucesso!");
        setOrdensServico((prevOrdens) =>
          prevOrdens.map((ordem) =>
            ordem.Id === selectedOrdem.Id ? { ...ordem, Status: novoStatus } : ordem
          )
        );
        setOpenModal(false);
      })
      .catch((error) => {
        console.error("Erro ao atualizar a ordem de serviço:", error);
        alert("Erro ao atualizar a Ordem de Serviço. Tente novamente.");
      });
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
        <h2 style={{ color: "#727070", marginBottom: "10px" }}>
          Listagem de Ordens de Serviço
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            variant="outlined"
            placeholder="Buscar Ordem"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            style={{
              borderRadius: "100px",
              width: "300px",
            }}
          />
        </div>
      </div>

      <TableContainer
        component={Paper}
        style={{ maxWidth: "100%", margin: "0 auto", marginTop: "20px" }}
      >
        <Table aria-label="Ordens de Serviço">
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center" }}>
                Número da OS
              </TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data de Abertura</TableCell>
              <TableCell>Equipamento</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrdens.map((ordem) => (
              <TableRow key={ordem.Id}>
                <TableCell style={{ textAlign: "center" }}>
                  {ordem.Id}
                </TableCell>
                <TableCell>{ordem.ClienteCPF}</TableCell>
                <TableCell>
                  {new Date(ordem.dataAbertura).toLocaleDateString()}
                </TableCell>
                <TableCell>{ordem.SerialEquipamento}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: getStatusColor(ordem.Status),
                      width: "120px",
                      textAlign: "center",
                    }}
                    onClick={() => handleOpenModal(ordem)}
                  >
                    {ordem.Status}
                  </Button>
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenModal(ordem)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => downloadPDF(ordem.Id)}
                  >
                    <Download />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={Math.ceil(filteredOrdens.length / 10)}
        variant="outlined"
        shape="rounded"
        color="primary"
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "end",
        }}
      />

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            width: "400px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Alterar Status - Ordem ID: {selectedOrdem?.Id}</h3>

          <TextField
            label="Número da Ordem"
            fullWidth
            value={selectedOrdem?.Id || ""}
            variant="outlined"
            disabled
            style={{ marginBottom: "10px" }}
          />

          <FormControl fullWidth style={{ marginBottom: "10px" }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={novoStatus}
              onChange={(e) => setNovoStatus(e.target.value)}
            >
              <MenuItem value="Aberta">Aberta</MenuItem>
              <MenuItem value="Em Andamento">Em Andamento</MenuItem>
              <MenuItem value="Concluido">Concluído</MenuItem>
              <MenuItem value="Cancelada">Cancelada</MenuItem>
              <MenuItem value="Pendente">Pendente</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="CPF"
            fullWidth
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            variant="outlined"
            style={{ marginBottom: "10px" }}
          />

          <TextField
            label="Data"
            fullWidth
            value={data}
            onChange={(e) => setData(e.target.value)}
            variant="outlined"
            type="date"
            style={{ marginBottom: "10px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Hora"
            fullWidth
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            variant="outlined"
            type="time"
            style={{ marginBottom: "10px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Comentário"
            fullWidth
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            variant="outlined"
            multiline
            rows={4}
            style={{ marginBottom: "10px" }}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleConfirmarAlteracao}
          >
            Confirmar Alteração
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Aberta":
      return "#3f51b5";
    case "Em Andamento":
      return "#fbc02d";
    case "Concluido":
      return "#4caf50";
    case "Cancelada":
      return "#e53935";
    case "Pendente":
      return "#9e9e9e";
    default:
      return "#9e9e9e";
  }
};

export default TecnicoLista;
