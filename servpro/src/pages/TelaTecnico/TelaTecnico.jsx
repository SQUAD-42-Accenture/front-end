import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { Download, Edit } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const TecnicoLista = () => {
  const location = useLocation();
  const ordensServico = location.state?.ordensServico || []; 

  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrdem, setSelectedOrdem] = useState(null);
  const [observacao, setObservacao] = useState("");
  const [novoStatus, setNovoStatus] = useState("");
  const [novaData, setNovaData] = useState("");
  const [novoHorario, setNovoHorario] = useState("");

  useEffect(() => {
    
  }, []);

  const filteredOrdens = ordensServico.filter((ordem) =>
    ordem.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const downloadPDF = (ordemId) => {
    const pdfUrl = `https://servpro.onrender.com/api/OrdemDeServico/${ordemId}/gerar-pdf`;
    window.open(pdfUrl, "_blank");
  };

  const handleOpenModal = (ordem) => {
    setSelectedOrdem(ordem);
    setNovoStatus(ordem.Status);
    setNovaData(ordem.dataAbertura.split("T")[0]);
    setNovoHorario(ordem.dataAbertura.split("T")[1].slice(0, 5));
    setObservacao("");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmarAlteracao = () => {
    axios
      .put(
        `https://servpro.onrender.com/api/OrdemDeServico/${selectedOrdem.Id}`,
        {
          Status: novoStatus,
          Observacao: observacao,
          DataAlteracao: novaData,
          HorarioAlteracao: novoHorario,
        }
      )
      .then(() => {
        setOpenModal(false);
      })
      .catch((error) => {
        console.error("Erro ao atualizar a ordem de serviço:", error);
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
              <TableCell style={{ textAlign: "center" }}>Número da OS</TableCell>
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
                <TableCell style={{ textAlign: "center" }}>{ordem.Id}</TableCell>
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
          <h3>Alterar Status</h3>
          <TextField
            label="Observação"
            fullWidth
            multiline
            rows={4}
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          />
          <TextField
            label="Novo Status"
            fullWidth
            value={novoStatus}
            onChange={(e) => setNovoStatus(e.target.value)}
            style={{ marginTop: "10px" }}
          />
          <TextField
            label="Nova Data"
            fullWidth
            type="date"
            value={novaData}
            onChange={(e) => setNovaData(e.target.value)}
            style={{ marginTop: "10px" }}
          />
          <TextField
            label="Novo Horário"
            fullWidth
            type="time"
            value={novoHorario}
            onChange={(e) => setNovoHorario(e.target.value)}
            style={{ marginTop: "10px" }}
          />
          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <Button onClick={handleCloseModal} color="secondary">
              Cancelar
            </Button>
            <Button
              onClick={handleConfirmarAlteracao}
              color="primary"
              style={{ marginLeft: "10px" }}
            >
              Confirmar
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Concluído':
      return 'green';  
    case 'Em Andamento':
      return 'blue';   
    case 'Pendente':
      return 'orange'; 
    case 'Cancelada':
      return 'red';   
    case 'Aberta':
      return 'light blue'; 
    default:
      return 'green'; 
  }
};

export default TecnicoLista;
