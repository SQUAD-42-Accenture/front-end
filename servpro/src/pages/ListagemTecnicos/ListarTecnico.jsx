import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';

function ListagemTecnico() {
  const [tecnicos, setTecnicos] = useState([]); 
  const [open, setOpen] = useState(false);  
  const [selectedTecnico, setSelectedTecnico] = useState(null);  
  const [searchCpf, setSearchCpf] = useState('');  

  const fetchTecnicos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5238/api/Tecnico', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTecnicos(response.data);  
    } catch (error) {
      console.error('Erro ao buscar técnicos:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5238/api/Tecnico/search?cpf=${searchCpf}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTecnicos(response.data);  
    } catch (error) {
      console.error('Erro ao buscar técnicos por CPF:', error);
    }
  };

  useEffect(() => {
    fetchTecnicos();
  }, []);

  const handleClickOpen = (tecnico) => {
    setSelectedTecnico(tecnico);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTecnico(null);
  };

  const handleDelete = async () => {
    try {
      if (selectedTecnico && selectedTecnico.CPF) {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`http://localhost:5238/api/Tecnico/${selectedTecnico.CPF}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Técnico excluído com sucesso:', response.data);
        fetchTecnicos();  
        handleClose();
      } else {
        console.error('CPF do técnico não encontrado para exclusão.');
      }
    } catch (error) {
      console.error('Erro ao excluir técnico:', error);
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
        <h2 style={{ color: '#727070', marginBottom: '10px' }}>Listagem de Técnicos</h2>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }}>
          <TextField
            variant="outlined"
            placeholder="Pesquisar por CPF"
            size="small"
            value={searchCpf}
            onChange={(e) => setSearchCpf(e.target.value)}  
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            style={{
              borderRadius: '100px',
              width: '300px',
              marginRight: '20px'
            }}
          />
          <Link to="/tecnicocadastro">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              style={{ marginLeft: 'auto' }}
            >
              Cadastrar Novo Técnico
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
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tecnicos.map((tecnico, index) => (
              <TableRow key={index}>
                <TableCell>{tecnico.CPF}</TableCell>
                <TableCell>{tecnico.Nome}</TableCell>
                <TableCell>{tecnico.Telefone}</TableCell>
                <TableCell>{tecnico.Email}</TableCell>
                <TableCell>
                  <Link to={{ pathname: "/editartecnico", state: { tecnico } }}>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                  </Link>
                  <IconButton color="primary" onClick={() => handleClickOpen(tecnico)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmação de Exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Você tem certeza que deseja excluir o técnico {selectedTecnico?.Nome}?
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

export default ListagemTecnico;
