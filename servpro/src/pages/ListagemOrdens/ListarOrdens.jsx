// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton, Pagination } from '@mui/material';
// import { Download } from '@mui/icons-material';
// import SearchIcon from '@mui/icons-material/Search';
// import AddIcon from '@mui/icons-material/PersonAdd';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function ListagemOrdensServico() {
//   const [ordensServico, setOrdensServico] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:5238/api/OrdemDeServico')
//       .then((response) => {
//         setOrdensServico(response.data);
//       })
//       .catch((error) => {
//         console.error("Erro ao buscar ordens de serviço", error);
//       });
//   }, []);

//   const filteredOrdens = ordensServico.filter((ordem) =>
//     ordem.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const downloadPDF = (ordemId) => {
//     if (ordemId) {
//       const pdfUrl = `http://localhost:5238/api/OrdemDeServico/${ordemId}/gerar-pdf`; 
//       console.log('Gerando PDF para a ordem de serviço com ID:', ordemId); 
//       window.open(pdfUrl, '_blank'); 
//     } else {
//       console.error('ID da ordem de serviço não encontrado!');
//     }
//   };

//   return (
//     <div style={{ padding: '20px', marginTop: '10px' }}>
//       <div style={{
//         backgroundColor: 'white',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         padding: '20px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         marginBottom: '20px',
//       }}>
//         <h2 style={{ color: '#727070', marginBottom: '10px' }}>Listagem de Ordens de Serviço</h2>

//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'flex-start',
//           width: '100%',
//         }}>
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
//               borderRadius: '100px',
//               width: '300px',
//               marginRight: '500px'
//             }}
//           />
//           <Link to="/cadastroos">
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<AddIcon />}
//             >
//               Cadastrar Ordem de Serviço
//             </Button>
//           </Link>
//         </div>
//       </div>

//       <TableContainer component={Paper} style={{ maxWidth: '100%', margin: '0 auto', marginTop: '20px' }}>
//         <Table aria-label="Ordens de Serviço">
//           <TableHead>
//             <TableRow>
//               <TableCell>Número da OS</TableCell> 
//               <TableCell>Cliente</TableCell>
//               <TableCell>Data de Abertura</TableCell>
//               <TableCell>Equipamento</TableCell>
//               <TableCell>Técnico</TableCell>
//               <TableCell>Pagamento</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Ações</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredOrdens.map((ordem) => (
//               <TableRow key={ordem.Id}> 
//                 <TableCell>{ordem.Id}</TableCell> 
//                 <TableCell>{ordem.ClienteCPF}</TableCell>
//                 <TableCell>{new Date(ordem.dataAbertura).toLocaleDateString()}</TableCell>
//                 <TableCell>{ordem.SerialEquipamento}</TableCell>
//                 <TableCell>{ordem.TecnicoCPF}</TableCell>
//                 <TableCell>{ordem.MetodoPagamento}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     style={{
//                       backgroundColor: getStatusColor(ordem.Status),
//                       width: '120px',
//                       textAlign: 'center'
//                     }}
//                   >
//                     {ordem.Status}
//                   </Button>
//                 </TableCell>
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

//       <Pagination
//         count={Math.ceil(filteredOrdens.length / 10)}
//         variant="outlined"
//         shape="rounded"
//         color="primary"
//         style={{
//           marginTop: '20px',
//           display: 'flex',
//           justifyContent: 'end'
//         }}
//       />
//     </div>
//   );
// }

// const getStatusColor = (status) => {
//   switch (status) {
//     case 'Concluído':
//       return 'green';  
//     case 'Em Andamento':
//       return 'blue';   
//     case 'Pendente':
//       return 'orange'; 
//     case 'Cancelada':
//       return 'red';   
//     case 'Aberta':
//       return 'light blue'; 
//     default:
//       return 'transparent'; 
//   }
// };


// export default ListagemOrdensServico;

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton, Pagination } from '@mui/material';
import { Download } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListagemOrdensServico() {
  const [ordensServico, setOrdensServico] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5238/api/OrdemDeServico')
      .then((response) => {
        setOrdensServico(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar ordens de serviço", error);
      });
  }, []);

  const filteredOrdens = ordensServico.filter((ordem) =>
    ordem.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const downloadPDF = (ordemId) => {
    if (ordemId) {
      const pdfUrl = `http://localhost:5238/api/OrdemDeServico/${ordemId}/gerar-pdf`; 
      console.log('Gerando PDF para a ordem de serviço com ID:', ordemId); 
      window.open(pdfUrl, '_blank'); 
    } else {
      console.error('ID da ordem de serviço não encontrado!');
    }
  };

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            style={{
              borderRadius: '100px',
              width: '300px',
              marginRight: '500px'
            }}
          />
          <Link to="/cadastroos">
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
        <Table aria-label="Ordens de Serviço">
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: 'center' }}>Número da OS</TableCell> 
              <TableCell>Cliente</TableCell>
              <TableCell>Data de Abertura</TableCell>
              <TableCell>Equipamento</TableCell>
              <TableCell>Técnico</TableCell>
              <TableCell>Pagamento</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrdens.map((ordem) => (
              <TableRow key={ordem.Id}> 
                <TableCell style={{ textAlign: 'center' }}>{ordem.Id}</TableCell> 
                <TableCell>{ordem.ClienteCPF}</TableCell>
                <TableCell>{new Date(ordem.dataAbertura).toLocaleDateString()}</TableCell>
                <TableCell>{ordem.SerialEquipamento}</TableCell>
                <TableCell>{ordem.TecnicoCPF}</TableCell>
                <TableCell>{ordem.MetodoPagamento}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: getStatusColor(ordem.Status),
                      width: '120px',
                      textAlign: 'center'
                    }}
                  >
                    {ordem.Status}
                  </Button>
                </TableCell>
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
        count={Math.ceil(filteredOrdens.length / 10)}
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

export default ListagemOrdensServico;
