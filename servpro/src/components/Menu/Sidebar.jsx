// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'; 
import './styles.css';
import logo from '../../assets/LogoServPro.png';
import MenuList from './MenuList';
import ListarCliente from '../../pages/ListagemClientes/ListarCliente'; 
import ListagemTecnicos from '../../pages/ListagemTecnicos/ListarTecnico'; 
import TelaInicial from '../../pages/TelaInicial/TelaInicial'; 
import ListagemOrdens from '../../pages/ListagemOrdens/ListarOrdens'; 


import { AiOutlineMenu, AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai'; 

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeComponent, setActiveComponent] = useState('clientes'); 

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = (component) => {
        setActiveComponent(component); 
    };

    return (
        <div className="layout">
            <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <div className="logo-container">
                    <AiOutlineMenu className="menu-icon hamburger-icon" onClick={toggleSidebar} /> 
                    {!collapsed && <img src={logo} alt="Logo" className="logo" />}
                </div>
                <MenuList collapsed={collapsed} onMenuClick={handleMenuClick} /> 
            </aside>
            <div className="main-layout">
                <header className="header">
                    <div className="header-icons">
                        <AiOutlineBell className="header-icon" />
                        <AiOutlineQuestionCircle className="header-icon" />
                        <AiOutlineUser className="header-icon" />
                    </div>
                </header>
                <main className="content">
                    {activeComponent === 'clientes' && <ListarCliente />} 
                    {activeComponent === 'tecnico' && <ListagemTecnicos />}
                    {activeComponent === 'inicio' && <TelaInicial />} 
                    {activeComponent === 'servicos' && <ListagemOrdens />} 

                </main>
            </div>
        </div>
    );
}

export default Sidebar;
