import React, { useState } from 'react'; 
import './styles.css';
import logo from '../../assets/LogoServPro.png';
import MenuList from './MenuList';
import { AiOutlineMenu, AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai'; 

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="layout">
            <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <div className="logo-container">
                    <AiOutlineMenu className="menu-icon hamburger-icon" onClick={toggleSidebar} /> 
                    {!collapsed && <img src={logo} alt="Logo" className="logo" />}
                </div>
                <MenuList collapsed={collapsed} />
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
                    {/* Aqui vai o conteúdo das páginas */}
                </main>
            </div>
        </div>
    );
}

export default Sidebar;
