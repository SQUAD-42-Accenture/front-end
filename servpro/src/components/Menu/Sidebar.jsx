import React, { useState } from 'react';
import { Layout } from 'antd';
import './styles.css';
import logo from '../../assets/LogoServPro.png';
import MenuList from './MenuList';
import { AiOutlineMenu } from 'react-icons/ai'; 

const { Header, Sider, Content } = Layout;

function Menu() {
    const [collapsed, setCollapsed] = useState(false); 
    const toggleSidebar = () => {
        setCollapsed(!collapsed); 
    };

    return (
        <Layout>
            <Sider
                collapsible
                collapsed={collapsed}
                trigger={null}
                className="sidebar"
                width={250}
                style={{ height: '100vh' }} 
            >
                <div className="logo-container">
                    <AiOutlineMenu className="menu-icon" onClick={toggleSidebar} />
                    {!collapsed && <img src={logo} alt="Logo" className="logo" />} 
                </div>
                <MenuList />
            </Sider>
            <Layout>
                <Header className="header">Header</Header>
                <Content className="content">Content</Content>
            </Layout>
        </Layout>
    );
}

export default Menu;
