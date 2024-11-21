import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton, Pagination, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/PersonAdd';
import { Link, useNavigate } from 'react-router-dom';

function ListagemClientes() {
  const [clients, setClients] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const navigate = useNavigate();

  const fetchClients = async () => {
    try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:5238/api/Cliente', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setClients(response.data); 
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
    }
};


  useEffect(() => {
    fetchClients();
  }, []);

  const handleClickOpen = (client) => {
    setSelectedClient(client);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedClient(null);
  };

  const handleDelete = async () => {
    try {
      if (selectedClient && selectedClient.CPF) {
        const token = localStorage.getItem('token'); 
        const response = await axios.delete(`http://localhost:5238/api/Cliente/${selectedClient.CPF}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Cliente excluído com sucesso:', response.data);
        fetchClients(); 
        handleClose();
      } else {
        console.error('CPF do cliente não encontrado para exclusão.');
      }
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    }
  };
  
  

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '20px',
      }}>
        <h2 style={{ color: '#727070', marginBottom: '10px' }}>Listagem de Clientes</h2>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }}>
          <TextField
            variant="outlined"
            placeholder="CPF"
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
          <Link to="/clientecadastro">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >
              Cadastrar Novo Cliente
            </Button>
          </Link>
        </div>
      </div>

      <TableContainer component={Paper} style={{ maxWidth: '100%', margin: '0 auto', marginTop: '20px' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>CPF</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client, index) => (
              <TableRow key={index}>
                <TableCell>{client.CPF}</TableCell>
                <TableCell>{client.Nome}</TableCell>
                <TableCell>{client.Telefone}</TableCell>
                <TableCell>{client.Email}</TableCell>
                <TableCell>{client.Bairro}, {client.Cidade}</TableCell>
                <TableCell>
                  <Link to={{ pathname: "/editarcliente", state: { client } }}>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                  </Link>
                  <IconButton color="primary" onClick={() => handleClickOpen(client)}>
                    <Delete />
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmação de Exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Você tem certeza que deseja excluir o cliente {selectedClient?.Nome}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="primary">
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ListagemClientes;
