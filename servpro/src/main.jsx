import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login'; 
import Menu from './components/Menu/Sidebar'; 
import ListarCliente from './pages/ListagemClientes/ListarCliente';
import ListarTecnico from './pages/ListagemTecnicos/ListarTecnico';
import TelaInicial from './pages/TelaInicial/TelaInicial';



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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
