import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from '../../servpro/src/pages/Login/Login.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
