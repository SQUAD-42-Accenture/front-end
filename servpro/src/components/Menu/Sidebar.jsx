// import React, { useState } from 'react'; 
// import './styles.css';
// import logo from '../../assets/LogoServPro.png';
// import MenuList from './MenuList';
// import ListarCliente from '../../pages/ListagemClientes/ListarCliente'; 

// import { AiOutlineMenu, AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai'; 

// function Sidebar() {
//     const [collapsed, setCollapsed] = useState(false);

//     const toggleSidebar = () => {
//         setCollapsed(!collapsed);
//     };

//     return (
//         <div className="layout">
//             <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
//                 <div className="logo-container">
//                     <AiOutlineMenu className="menu-icon hamburger-icon" onClick={toggleSidebar} /> 
//                     {!collapsed && <img src={logo} alt="Logo" className="logo" />}
//                 </div>
//                 <MenuList collapsed={collapsed} />
//             </aside>
//             <div className="main-layout">
//                 <header className="header">
//                     <div className="header-icons">
//                         <AiOutlineBell className="header-icon" />
//                         <AiOutlineQuestionCircle className="header-icon" />
//                         <AiOutlineUser className="header-icon" />
//                     </div>
//                 </header>
//                 <main className="content">
//                 <ListarCliente /> 

//                 </main>
//             </div>
//         </div>
//     );
// }

// export default Sidebar;

import React, { useState } from 'react'; 
import './styles.css';
import logo from '../../assets/LogoServPro.png';
import MenuList from './MenuList';
import ListarCliente from '../../pages/ListagemClientes/ListarCliente'; 
import ListagemTecnicos from '../../pages/ListagemTecnicos/ListarTecnico'; // Importar a listagem de técnicos

import { AiOutlineMenu, AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai'; 

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeComponent, setActiveComponent] = useState('clientes'); // Estado para controlar o componente ativo

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = (component) => {
        setActiveComponent(component); // Atualiza o componente ativo
    };

    return (
        <div className="layout">
            <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <div className="logo-container">
                    <AiOutlineMenu className="menu-icon hamburger-icon" onClick={toggleSidebar} /> 
                    {!collapsed && <img src={logo} alt="Logo" className="logo" />}
                </div>
                <MenuList collapsed={collapsed} onMenuClick={handleMenuClick} /> {/* Passa a função para o MenuList */}
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
                    {activeComponent === 'clientes' && <ListarCliente />} {/* Renderiza ListarCliente */}
                    {activeComponent === 'tecnico' && <ListagemTecnicos />} {/* Renderiza ListagemTecnicos */}
                </main>
            </div>
        </div>
    );
}

export default Sidebar;
