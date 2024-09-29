import React, { useState } from 'react';
import { Menu } from 'antd';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FaServicestack, FaChartLine } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';

const MenuList = () => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <Menu
            mode="inline"
            style={{
                backgroundColor: 'transparent',
                borderRight: 'none',
            }}
        >
            <Menu.Item key="1" icon={<AiOutlineHome />} className="menu-item">
                Início
            </Menu.Item>
            <Menu.Item key="2" icon={<AiOutlineUser />} onClick={toggleSubMenu}>
                Cadastro {subMenuOpen ? <BiChevronDown /> : <BiChevronDown />}
            </Menu.Item>
            {subMenuOpen && (
                <>
                    <Menu.Item key="2-1" className="submenu-item">
                        Técnico
                    </Menu.Item>
                    <Menu.Item key="2-2" className="submenu-item">
                        Cliente
                    </Menu.Item>
                </>
            )}
            <Menu.Item key="3" icon={<FaServicestack />} className="menu-item">
                Serviços
            </Menu.Item>
            <Menu.Item key="4" icon={<FaChartLine />} className="menu-item">
                Dashboard
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;
