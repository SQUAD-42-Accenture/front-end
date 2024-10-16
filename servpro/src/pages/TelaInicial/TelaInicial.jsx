// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import user1 from '../../assets/user1.jpeg';
import user2 from '../../assets/user2.jpeg';
import user3 from '../../assets/user3.jpeg';
import user4 from '../../assets/user4.jpeg';
import user5 from '../../assets/user5.jpeg';
import user6 from '../../assets/user6.jpeg';
import './styles.css'; 

const TelaInicial = () => {
  return (
    <Grid container spacing={2} className="grid-container">
      <Grid item xs={12} sm={4}>
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <div className="title-container">
            <PersonAddIcon style={{ color: '#0E4088', marginRight: '8px' }} />
            <Typography variant="h6" className="section-title">
              Novos Clientes
            </Typography>
          </div>
        </div>
        <Paper className="scrollable-section" elevation={3}>   
          <div className="client-block">
          <img src={user1} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2"><strong>Steve, 24</strong></Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Recife, Pernambuco</Typography>
            </div>
          </div>
          <div className="client-block">
          <img src={user2} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2"><strong>Maria, 25</strong></Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Recife, Pernambuco</Typography>

            </div>
          </div>
          <div className="client-block">
          <img src={user3} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2"><strong>Paula, 29</strong></Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Recife, Pernambuco</Typography>

            </div>
          </div>
          <div className="client-block">
          <img src={user4} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2"><strong>João, 45</strong></Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Recife, Pernambuco</Typography>

            </div>
          </div>
          <div className="client-block">
          <img src={user5} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2"><strong>Patrícia, 26</strong></Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Recife, Pernambuco</Typography>
            </div>
          </div>
          <div className="client-block">
          <img src={user6} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2"><strong>José, 28</strong></Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Recife, Pernambuco</Typography>

            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <div className="title-container">
            <AssignmentIcon style={{ color: '#0E4088', marginRight: '8px' }} />
            <Typography variant="h6" className="section-title">
              OS Recentes
            </Typography>
          </div>
        </div>
        <Paper className="scrollable-section" elevation={3}>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>nº 324264</strong></Typography>
              <Typography variant="body2">Finalizada: 28/06/2024</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Cliente: Steve Santos</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>nº 354266</strong></Typography>
              <Typography variant="body2">Finalizada: 24/06/2024</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Cliente: Maria Costa</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>nº 529874</strong></Typography>
              <Typography variant="body2">Finalizada: 21/06/2024</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Cliente: Paula Silva</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>nº 312564</strong></Typography>
              <Typography variant="body2">Finalizada: 12/04/2024</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Cliente: João Paulo</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>nº 354264</strong></Typography>
              <Typography variant="body2">Finalizada: 08/07/2024</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Cliente: Patrícia Furtado</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>nº 312264</strong></Typography>
              <Typography variant="body2">Finalizada: 19/05/2024</Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Cliente: José Lima</Typography>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <div className="title-container">
            <EngineeringIcon style={{ color: '#0E4088', marginRight: '8px' }} />
            <Typography variant="h6" className="section-title">
              Últimos Status dos Técnicos
            </Typography>
          </div>
        </div>
        <Paper className="scrollable-section" elevation={3}>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>Técnico: Gustavo</strong></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>nº <span style={{ color: '#737373', fontWeight: 'bold' }}>325264</span></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>Técnico: João</strong></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>nº <span style={{ color: '#737373', fontWeight: 'bold' }}>354266</span></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>Técnica: Mateus</strong></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>nº <span style={{ color: '#737373', fontWeight: 'bold' }}>354270</span></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>Técnico: Lucas</strong></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>nº <span style={{ color: '#737373', fontWeight: 'bold' }}>529874</span></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>Técnico: Carlos</strong></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>nº <span style={{ color: '#737373', fontWeight: 'bold' }}>354264</span></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>Técnico: Jeferson</strong></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>nº <span style={{ color: '#737373', fontWeight: 'bold' }}>312564</span></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2"><strong>Técnico: Jailton</strong></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>nº <span style={{ color: '#737373', fontWeight: 'bold' }}>354264</span></Typography>
              <Typography variant="body2" style={{ color: 'gray' }}>Status: Pendente</Typography>
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TelaInicial;