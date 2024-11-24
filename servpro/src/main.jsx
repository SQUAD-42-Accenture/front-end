import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login'; 
import Menu from './components/Menu/Sidebar'; 
import ListarCliente from './pages/ListagemClientes/ListarCliente';
import ListarTecnico from './pages/ListagemTecnicos/ListarTecnico';
import TelaInicial from './pages/TelaInicial/TelaInicial';
import CadastroCliente from './pages/CadastroDeClientes/CadastroDeClientes';
import CadastroTecnico from './pages/CadastroDeTecnicos/CadastroDeTecnicos';
import LandingPage from './pages/LandingPage/LandingPage';
import EditarCliente from './pages/EditarCliente/EditarCliente';
import EditarTecnico from './pages/EditarTecnico/EditarTecnico';
import ListagemOrdens from './pages/ListagemOrdens/ListarOrdens';
import CadastroOrdemServico from './pages/CadastroDeOS/CadastroOS';
import Menu2 from './pages/CadastroDeOS/Sidebar1';
import Menu3 from './pages/CadastroDeTecnicos/Sidebar2';
import Menu4 from './pages/CadastroDeClientes/Sidebar3';
import Menu6 from './pages/TelaTecnico/Sidebar4';
import Menu7 from './pages/EditarCliente/Sidebar7';




const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />, 
  },  
  {
    path: '/menu',
    element: <Menu />, 
  }, 
  {
    path: '/listarcliente',
    element: <ListarCliente />, 
  },
  {
    path: '/listartecnico',
    element: <ListarTecnico />, 
  },
  {
    path: '/telainicial',
    element: <TelaInicial />, 
  },
  {
    path: '/cadastrocliente',
    element: <CadastroCliente />, 
  },
  {
    path: '/cadastrotecnico',
    element: <CadastroTecnico />, 
  },
  {
    path: '/',
    element: <LandingPage />, 
  },
  {
    path: '/editarcliente',
    element: <EditarCliente />, 
  },
  {
    path: '/editartecnico',
    element: <EditarTecnico />, 
  },
  {
    path: '/listagemordens',
    element: <ListagemOrdens />, 
  },
  {
    path: '/cadastrarordemservico',
    element: <CadastroOrdemServico />, 
  },
  {
    path: '/cadastroos',
    element: <Menu2 />, 
  },
  {
    path: '/tecnicocadastro',
    element: <Menu3 />, 
  },
  {
    path: '/clientecadastro',
    element: <Menu4 />, 
  },
  {
    path: '/tecnicolista',
    element: <Menu6 />, 
  },
  {
    path: '/edicaocliente',
    element: <Menu7 />, 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
