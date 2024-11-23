import React, { useState } from "react";  
import "./styles.css";
import logo from "../../assets/LogoServPro.png";
// import CadastroOrdemServico from "../CadastroDeOS/CadastroOS"; 
import ListagemTecnicos from "../ListagemTecnicos/ListarTecnico"; 
import TelaListaTecnico from "../../pages/TelaTecnico/TelaTecnico"; 
import TelaInicial from "../TelaInicial/TelaInicial"; 
import ListagemOrdens from "../ListagemOrdens/ListarOrdens"; 
import MenuList4 from './MenuList4';

import { AiOutlineMenu, AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai"; 

function Sidebar4() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeComponent, setActiveComponent] = useState('telalistatecnico'); 

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
                <MenuList4 collapsed={collapsed} onMenuClick={handleMenuClick} />
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
                    {activeComponent === 'telalistatecnico' && <TelaListaTecnico />} 
                    {activeComponent === 'tecnico' && <ListagemTecnicos />}
                    {activeComponent === 'inicio' && <TelaInicial />} 
                    {activeComponent === 'servicos' && <ListagemOrdens />} 
                </main>
            </div>
        </div>
    );
}

export default Sidebar4;
