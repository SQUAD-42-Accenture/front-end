import React from 'react';
import { Avatar, Button } from '@mui/material';
import { ArrowBack, Menu } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import './style.css';


function InformacoesPessoais() {
    return (
        <div className="container1">
            {/* Sidebar */}
            <div className="sidebar1">
                <Button startIcon={<ArrowBack />} className="minhaconta-botao">Minha Conta</Button>
                <Button className="perfil">Perfil</Button>
                <Button className="alterarsenha">Alterar Senha</Button>
            </div>

            {/* Main Content */}
            <div className="main-content1">
                <div className="header1">
                    <Menu className="menu-icon1" />
                    <h2 className="header-title1">Informações pessoais</h2>
                </div>

                <div className="info-basic1">
                    <p>Informações básicas</p>
                </div>

                {/* Info Fields */}
                <div className="info-fields1">
                    <p><strong>Nome:</strong> Jefferson Gomes Souza</p>

                    {/* Profile Section */}
                    <div className="image-section">
                        <Avatar className="avatar">J</Avatar>
                        <div className="image-info">
                            <Button variant="contained" className="choose-image-button">Escolher imagem</Button>
                            <p className="image-format">Formatos: JPG, PNG, Tamanho até 360 x 720 px</p>
                        </div>
                    </div>

                    <p><strong>Email:</strong> jeffersongomes@gmail.com</p>
                    <p><strong>Login:</strong> Jefferson Gomes Souza</p>
                    <p><strong>Perfil de acesso:</strong> Administrador</p>
                </div>
            </div>
        </div>
    );
}

export default InformacoesPessoais;
