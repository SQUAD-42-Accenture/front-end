import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton, Pagination, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';

const clients = [
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '987.654.321-00', name: 'João Pereira', phone: '(81) 9 8888-0000', email: 'joao@gmail.com', address: 'Avenida Central, 50 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },

];

function ListagemClientes() {
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleClickOpen = (client) => {
    setSelectedClient(client);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedClient(null);
  };

  const handleDelete = () => {
    console.log('Cliente excluído:', selectedClient);
    handleClose();
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
          <Link to="/cadastrocliente">
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
                <TableCell>{client.cpf}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.address}</TableCell>
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
            Você tem certeza que deseja excluir o cliente {selectedClient?.name}?
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
