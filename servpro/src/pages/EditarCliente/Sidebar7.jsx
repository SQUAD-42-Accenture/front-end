import React, { useState } from "react";  
import "./styles.css";
import logo from "../../assets/LogoServPro.png";
import CadastroOrdemServico from "../../pages/CadastroDeOS/CadastroOS"; 
import EdicaoDeCliente from "../../pages/EditarCliente/EditarCliente"; 
import ListagemTecnicos from "../../pages/ListagemTecnicos/ListarTecnico"; 
import TelaInicial from "../../pages/TelaInicial/TelaInicial"; 
import ListagemOrdens from "../../pages/ListagemOrdens/ListarOrdens"; 
import MenuList7 from './MenuList7';

import { AiOutlineMenu, AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai"; 

function Sidebar7() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeComponent, setActiveComponent] = useState('edicaocliente'); 

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
                <MenuList7 collapsed={collapsed} onMenuClick={handleMenuClick} />
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
                    {activeComponent === 'edicaocliente' && <EdicaoDeCliente />} 
                    {/* {activeComponent === 'tecnico' && <ListagemTecnicos />}
                    {activeComponent === 'inicio' && <TelaInicial />} 
                    {activeComponent === 'servicos' && <ListagemOrdens />}  */}
                </main>
            </div>
        </div>
    );
}

export default Sidebar7;
