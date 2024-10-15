import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton, Pagination } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/PersonAdd';

const clients = [
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
  { cpf: '123.456.789-11', name: 'Maria Costa da Silva', phone: '(81) 9 9999-0000', email: 'teste@gmail.com', address: 'Rua Imaginária, 298 - Bairro' },
];

function ListagemClientes() {
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
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Cadastrar Novo Cliente
          </Button>
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
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="primary"> 
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
    </div>
  );
}

export default ListagemClientes;
