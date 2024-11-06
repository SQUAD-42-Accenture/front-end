import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton, Pagination } from '@mui/material';
import { Download } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';

const ordensServico = [
  { ordem: 34567, cliente: 'Maria Costa', data: '2023-10-01', equipamento: 'Máquina 1', tecnico: 'João', orcamento: 'R$ 100,00', status: 'Concluído' },
  { ordem: 45678, cliente: 'Carlos Silva', data: '2023-10-03', equipamento: 'Máquina 3', tecnico: 'Maria', orcamento: 'R$ 200,00', status: 'Pendente' },
  { ordem: 56789, cliente: 'Ana Clara', data: '2023-10-04', equipamento: 'Máquina 4', tecnico: 'Pedro', orcamento: 'R$ 250,00', status: 'Cancelado' },
  { ordem: 67890, cliente: 'Lucas Mendes', data: '2023-10-05', equipamento: 'Máquina 5', tecnico: 'Ricardo', orcamento: 'R$ 300,00', status: 'Aberto' },
  { ordem: 34567, cliente: 'Maria Costa', data: '2023-10-01', equipamento: 'Máquina 1', tecnico: 'João', orcamento: 'R$ 100,00', status: 'Concluído' },
  { ordem: 56789, cliente: 'Ana Clara', data: '2023-10-04', equipamento: 'Máquina 4', tecnico: 'Pedro', orcamento: 'R$ 250,00', status: 'Cancelado' },
];

function ListagemOrdensServico() {
  return (
    <div style={{ padding: '20px', marginTop: '10px' }}> 
      <div style={{
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '20px',
      }}>
        <h2 style={{ color: '#727070', marginBottom: '10px' }}>Listagem de Ordens de Serviço</h2>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }}>
          <TextField
            variant="outlined"
            placeholder="Buscar Ordem"
            size="small"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            style={{
              borderRadius: '100px',
              width: '300px',
              marginRight: '500px'
            }}
          />
          <Link to="/cadastrarordemservico">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >
              Cadastrar Ordem de Serviço
            </Button>
          </Link>
        </div>
      </div>

      <TableContainer component={Paper} style={{ maxWidth: '100%', margin: '0 auto', marginTop: '20px' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ordem</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data da Solicitação</TableCell>
              <TableCell>Equipamento</TableCell>
              <TableCell>Técnico</TableCell>
              <TableCell>Orçamento</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordensServico.map((ordem) => (
              <TableRow key={ordem.ordem}>
                <TableCell>{ordem.ordem}</TableCell>
                <TableCell>{ordem.cliente}</TableCell>
                <TableCell>{ordem.data}</TableCell>
                <TableCell>{ordem.equipamento}</TableCell>
                <TableCell>{ordem.tecnico}</TableCell>
                <TableCell>{ordem.orcamento}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    style={{ 
                      backgroundColor: getStatusColor(ordem.status), 
                      width: '120px', 
                      textAlign: 'center' 
                    }}
                  >
                    {ordem.status}
                  </Button>
                </TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => downloadPDF(ordem.ordem)}>
                    <Download />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        color="primary"
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'end'
        }}
      />
    </div>
  );
}

const getStatusColor = (status) => {
  switch (status) {
    case 'Concluído':
      return 'green';
    case 'Em andamento':
      return 'blue';
    case 'Pendente':
      return 'orange';
    case 'Cancelado':
      return 'red';
    case 'Aberto':
      return 'gray';
    default:
      return 'transparent';
  }
};

const downloadPDF = (ordem) => {
  const pdfUrl = `http://localhost:5238/api/OrdemDeServico/${ordem}/gerar-pdf`;
  window.open(pdfUrl, '_blank');
};

export default ListagemOrdensServico;
