import React, { useState } from "react";  
import "./style.css";
import logo from "../../assets/LogoServPro.png";
import CadastroTecnico from "../../pages/CadastroDeTecnicos/CadastroDeTecnicos";
import CadastroCliente from "../../pages/CadastroDeClientes/CadastroDeClientes";
import CadastroOrdemServico from "../../pages/CadastroDeOS/CadastroOS"; 
import ListagemTecnicos from "../../pages/ListagemTecnicos/ListarTecnico"; 
import TelaInicial from "../../pages/TelaInicial/TelaInicial"; 
import ListagemOrdens from "../../pages/ListagemOrdens/ListarOrdens"; 
import MenuList3 from './MenuList3';

import { AiOutlineMenu, AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai"; 

function Sidebar3() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeComponent, setActiveComponent] = useState('cadastrocliente'); 

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
                <MenuList3 collapsed={collapsed} onMenuClick={handleMenuClick} />
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
                    {activeComponent === 'cadastrocliente' && <CadastroCliente />} 
                    {activeComponent === 'tecnico' && <ListagemTecnicos />}
                    {activeComponent === 'inicio' && <TelaInicial />} 
                    {activeComponent === 'servicos' && <ListagemOrdens />} 
                </main>
            </div>
        </div>
    );
}

export default Sidebar3;
