import React, { useState } from "react";  
import "./styles.css";
import logo from "../../assets/LogoServPro.png";
// import CadastroOrdemServico from "../CadastroDeOS/CadastroOS"; 
import ListagemTecnicos from "../ListagemTecnicos/ListarTecnico"; 
import TelaCliente from "../../pages/TelaCliente/TelaCliente";
import TelaInicial from "../TelaInicial/TelaInicial"; 
import ListagemOrdens from "../ListagemOrdens/ListarOrdens"; 
import MenuList9 from './MenuList9';

import { AiOutlineMenu, AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai"; 

function Sidebar9() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeComponent, setActiveComponent] = useState('telacliente'); 

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
                <MenuList9 collapsed={collapsed} onMenuClick={handleMenuClick} />
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
                    {activeComponent === 'telacliente' && <TelaCliente />} 
                    {/* {activeComponent === 'tecnico' && <ListagemTecnicos />} */}
                    {/* {activeComponent === 'inicio' && <TelaInicial />}  */}
                    {/* {activeComponent === 'servicos' && <TelaListaTecnico />}  */}
                </main>
            </div>
        </div>
    );
}

export default Sidebar9;
