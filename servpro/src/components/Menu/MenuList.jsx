// import React, { useState } from 'react';
// import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
// import { FaChartLine } from 'react-icons/fa';
// import { BiChevronDown } from 'react-icons/bi';
// import { HiOutlineFolder } from 'react-icons/hi'; 
// import './styles.css';

// const MenuList = ({ collapsed }) => {
//     const [subMenuOpen, setSubMenuOpen] = useState(false);
//     const [activeMenuItem, setActiveMenuItem] = useState('');

//     const toggleSubMenu = () => {
//         setSubMenuOpen(!subMenuOpen);
//         setActiveMenuItem('Cadastro');
//     };

//     return (
//         <ul className="menu-list">
//             <li
//                 className={`menu-item ${activeMenuItem === 'Início' ? 'active' : ''}`}
//                 onClick={() => setActiveMenuItem('Início')}
//             >
//                 <AiOutlineHome className="menu-icon" />
//                 {!collapsed && <span>Início</span>}
//             </li>

//             <li
//                 className={`menu-item ${activeMenuItem === 'Cadastro' ? 'active' : ''}`}
//                 onClick={toggleSubMenu}
//             >
//                 <AiOutlineUser className="menu-icon" />
//                 {!collapsed && (
//                     <span>
//                         Cadastro <BiChevronDown className="chevron-icon" />
//                     </span>
//                 )}
//             </li>

//             {subMenuOpen && !collapsed && (
//                 <ul className="submenu-list">
//                     <li
//                         className="submenu-item"
//                         onClick={() => setActiveMenuItem('Cliente')}
//                     >
//                         Cliente
//                     </li>
//                     <li
//                         className="submenu-item"
//                         onClick={() => setActiveMenuItem('Técnico')}
//                     >
//                         Técnico
//                     </li>
//                 </ul>
//             )}

//             <li
//                 className={`menu-item ${activeMenuItem === 'Serviços' ? 'active' : ''}`}
//                 onClick={() => setActiveMenuItem('Serviços')}
//             >
//                 <HiOutlineFolder className="menu-icon" /> 
//                 {!collapsed && <span>Serviço</span>}
//             </li>

//             <li
//                 className={`menu-item ${activeMenuItem === 'Dashboard' ? 'active' : ''}`}
//                 onClick={() => setActiveMenuItem('Dashboard')}
//             >
//                 <FaChartLine className="menu-icon" />
//                 {!collapsed && <span>Dashboard</span>}
//             </li>
//         </ul>
//     );
// };

// export default MenuList;

import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FaChartLine } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { HiOutlineFolder } from 'react-icons/hi'; 
import './styles.css';

const MenuList = ({ collapsed, onMenuClick }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('');

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
        setActiveMenuItem('Cadastro');
    };

    return (
        <ul className="menu-list">
            <li
                className={`menu-item ${activeMenuItem === 'Início' ? 'active' : ''}`}
                onClick={() => {
                    setActiveMenuItem('Início');
                    onMenuClick('inicio'); // Adicione essa linha
                }}
            >
                <AiOutlineHome className="menu-icon" />
                {!collapsed && <span>Início</span>}
            </li>

            <li
                className={`menu-item ${activeMenuItem === 'Cadastro' ? 'active' : ''}`}
                onClick={toggleSubMenu}
            >
                <AiOutlineUser className="menu-icon" />
                {!collapsed && (
                    <span>
                        Cadastro <BiChevronDown className="chevron-icon" />
                    </span>
                )}
            </li>

            {subMenuOpen && !collapsed && (
                <ul className="submenu-list">
                    <li
                        className="submenu-item"
                        onClick={() => {
                            setActiveMenuItem('Cliente');
                            onMenuClick('clientes'); // Altere essa linha
                        }}
                    >
                        Cliente
                    </li>
                    <li
                        className="submenu-item"
                        onClick={() => {
                            setActiveMenuItem('Técnico');
                            onMenuClick('tecnico'); // Opcional, dependendo de como você quer tratar o Técnico
                        }}
                    >
                        Técnico
                    </li>
                </ul>
            )}

            <li
                className={`menu-item ${activeMenuItem === 'Serviços' ? 'active' : ''}`}
                onClick={() => {
                    setActiveMenuItem('Serviços');
                    onMenuClick('servicos'); // Adicione essa linha
                }}
            >
                <HiOutlineFolder className="menu-icon" /> 
                {!collapsed && <span>Serviço</span>}
            </li>

            <li
                className={`menu-item ${activeMenuItem === 'Dashboard' ? 'active' : ''}`}
                onClick={() => {
                    setActiveMenuItem('Dashboard');
                    onMenuClick('dashboard'); // Adicione essa linha
                }}
            >
                <FaChartLine className="menu-icon" />
                {!collapsed && <span>Dashboard</span>}
            </li>
        </ul>
    );
};

export default MenuList;
