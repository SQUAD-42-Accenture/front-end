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
import EditarCliente from './pages/EditarCliente/EditarCliente';
import EditarTecnico from './pages/EditarTecnico/EditarTecnico';
import ListagemOrdens from './pages/ListagemOrdens/ListarOrdens';


const router = createBrowserRouter([
  {
    path: '/',
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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
