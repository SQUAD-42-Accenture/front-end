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
              <Typography variant="body2">Steve, 24</Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2">Recife, Pernambuco</Typography>
            </div>
          </div>
          <div className="client-block">
          <img src={user2} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2">Maria, 29</Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2">Recife, Pernambuco</Typography>
            </div>
          </div>
          <div className="client-block">
          <img src={user3} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2">Maria, 29</Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2">Recife, Pernambuco</Typography>
            </div>
          </div>
          <div className="client-block">
          <img src={user4} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2">Maria, 29</Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2">Recife, Pernambuco</Typography>
            </div>
          </div>
          <div className="client-block">
          <img src={user5} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2">Maria, 29</Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2">Recife, Pernambuco</Typography>
            </div>
          </div>
          <div className="client-block">
          <img src={user6} alt="Steve" className="profile-image" />
            <div className="client-info">
              <Typography variant="body2">Maria, 29</Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body2">Recife, Pernambuco</Typography>
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
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Finalizada: 28/06/2024</Typography>
              <Typography variant="body2">Cliente: Maria Costa</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Finalizada: 28/06/2024</Typography>
              <Typography variant="body2">Cliente: Maria Costa</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Finalizada: 28/06/2024</Typography>
              <Typography variant="body2">Cliente: Maria Costa</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Finalizada: 28/06/2024</Typography>
              <Typography variant="body2">Cliente: Maria Costa</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Finalizada: 28/06/2024</Typography>
              <Typography variant="body2">Cliente: Maria Costa</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Finalizada: 28/06/2024</Typography>
              <Typography variant="body2">Cliente: Maria Costa</Typography>
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
              <Typography variant="body2">Técnico: Gustavo</Typography>
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">Técnico: Gustavo</Typography>
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">Técnico: Gustavo</Typography>
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">Técnico: Gustavo</Typography>
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">Técnico: Gustavo</Typography>
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">Técnico: Gustavo</Typography>
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Status: Pendente</Typography>
            </div>
          </div>
          <div className="client-block">
            <div className="client-info">
              <Typography variant="body2">Técnico: Gustavo</Typography>
              <Typography variant="body2">nº 354264</Typography>
              <Typography variant="body2">Status: Pendente</Typography>
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TelaInicial;