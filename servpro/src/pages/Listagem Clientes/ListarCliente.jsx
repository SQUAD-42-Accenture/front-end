import React, { useState } from 'react';
import '../Listagem Clientes/style.css';

import {
  TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Pagination, PaginationItem, Stack, IconButton, InputAdornment, Box, Button
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const clienteTeste = [
  { cpf: '123.456.789-00',
    nome: 'João Silva',
    telefone: '11 91234-5678',
    email: 'joao@gmail.com',
    endereco: 'Rua A, 123' },  
    
    { cpf: '333.444.555-66',
        nome: 'Maria Rosa',
        telefone: '81 90990-9090',
        email: 'maria@gmail.com',
        endereco: 'Rua B, 123' },
];

const ListarCliente = () => {
  const [pesquisa, setSearch] = useState('');

  const filtrarClientes = clienteTeste.filter(cliente =>
    cliente.cpf.includes(pesquisa)
  );

  return (
    <div id='body-listagem' style={{ padding: 20 }}>
      <div id='body-busca'>
      <h1 id='titulo'>Listagem de Clientes</h1>
      
      <TextField className='buscar'
        label="Buscar por CPF"
        placeholder="CPF" 
        variant="outlined"
        fullWidth
        value={pesquisa}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 20, maxWidth: '400px', width: '100%'}}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment> 
            ),
          },
        }}
      />
      <Button id='cadastro' sx={{
          backgroundColor: '#0E4088',
          color: '#ffff',
          '&:hover': {
            backgroundColor: '#c3aed2;',
          },
        }}>
        <PersonAddAltOutlinedIcon sx={{ marginRight: 1 }}/> Cadastrar Novo Cliente
      </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>CPF</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Endereço</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtrarClientes.map((cliente, index) => (
              <TableRow key={index}>
                <TableCell>{cliente.cpf}</TableCell>
                <TableCell>{cliente.nome}</TableCell>
                <TableCell>{cliente.telefone}</TableCell>
                <TableCell>{cliente.email}</TableCell>
                <TableCell>{cliente.endereco}</TableCell>
                <IconButton className='icon' aria-label="editar">
                    <EditIcon />
                </IconButton>
                <IconButton className='icon' aria-label="delete">
                    <DeleteIcon />
                </IconButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Stack spacing={2}>
          <Pagination className='paginacao'
            count={10}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </Box> 
    </div>
  );
};

export default ListarCliente;