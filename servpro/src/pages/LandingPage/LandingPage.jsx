import React from "react";
import Button from "@mui/material/Button";
import "./styles.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import pc from "../../assets/pc.png";
import underline from "../../assets/underline.png";
import celular from "../../assets/celular.png";
import mulher from "../../assets/mulher.png";
import line from "../../assets/Line.png";
import notebook from "../../assets/notebook.png";
import clientes from "../../assets/clientes.png";
import homem from "../../assets/homem.png";
import logo from "../../assets/LogoServPro.png";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="back">
      <div className="barraFixa">
        <a href="">Quem Somos</a>
        <a href="">Nossos Serviços</a>
        <a href="">Planos</a>
        <a href="/" className="btnLink">
        </a>
        <Link to="/login">Login</Link>
      </div>
      <div className="fundo">
        <div className="conteudoInicial">
          <img src={logo} alt="Logo" className="logoo" />

          <h1>Acompanhe seu serviço do começo ao fim.</h1>
          <Button
            sx={{
              backgroundColor: "#00FCA8",
              maxWidth: "360px",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0A3266",
              },
            }}
          >
            Cadastre sua Empresa
          </Button>
        </div>
      </div>
      <div className="boxs">
        <div className="produtividade">
          <img className="iconsss" src={icon1} alt="" />
          <h2 className="boxies">PRODUTIVIDADE</h2>
          <p>Melhore sua produtividade reduzindo trabalhos manuais.</p>
        </div>
        <div className="tudo">
          <img className="iconsss" src={icon2} alt="" />
          <h2 className="boxies">TUDO NUM SÓ LUGAR</h2>
          <p>
            Adeus aos papéis e planilhas. Organize tudo à um clique de
            distância.
          </p>
        </div>
        <div className="flexibilidade">
          <img className="iconsss" src={icon3} alt="" />
          <h2 className="boxies">FLEXIBILIDADE</h2>
          <p>Cadastre, visualize, atualize ou exclua sempre que precisar.</p>
        </div>
      </div>
      <div className="conteudoSecundario">
        <div className="sessaoUm">
          <h2 className="titleSecundario">Gerenciamento</h2>
          <h2 className="continuaTitleSecundario">
            Feito para Assistência Técnica
          </h2>
          <img className="underline" src={underline} alt="" />
          <p>
            Gere relatórios detalhados para análises precisas de desempenho,
            tempo de atendimento e satisfação do cliente.
          </p>
          {/* <Button sx={{
                       backgroundColor: '#00FCA8',
                       maxWidth: '200px',
                       marginLeft: '150px',
                       marginTop: '-420px', 
                       color: 'white',
                       padding: '10px 20px',
                       fontSize: '16px',
                       borderRadius: '8px',
                       textTransform: 'none',
                       '&:hover': {
                         backgroundColor: '#0A3266',
                        }
                    }}>Conheça</Button> */}
          <img className="pc" src={pc} alt="" />
        </div>
        <div className="sessaoDois">
          <img className="celular" src={celular} alt="" />
          <div className="textos">
            <h2 className="titleSessaoDois">Acompanhe o serviço</h2>
            <h2 className="continuaTitleSessaoDois">
              Status das Ordens de Serviços
            </h2>
            <img className="underlineDois" src={underline} alt="" />
            <p>
              Acompanhe o status de cada serviço e tenha total controle sobre as
              demandas da sua equipe.
            </p>
          </div>
        </div>
      </div>
      <div className="conteudoTres">
        <img className="mulher" src={mulher} alt="" />
        <div className="textosDois">
          <h2 className="tituloTres">Soluções para sua Assistência</h2>
          <img className="line" src={line} alt="" />
          <p>
            A ServPro é um sistema online projetado para otimizar a gestão de
            serviços de assistência técnica, facilitando a organização de
            clientes, técnicos e aparelhos.
          </p>
          <p>
            Oferecemos uma interface intuitiva que permite o gerenciamento
            eficiente de todas as operações da empresa, garantindo também o
            acompanhamento de todos os processos.
          </p>
        </div>
      </div>
      <div className="conteudoQuatro">
        <div className="textosTrês">
          <h2 className="tituloQuatro">Nossa Plataforma</h2>
          <p>
            Organize e delegue ordens de serviço de forma inteligente,
            otimizando o tempo e recursos de sua equipe técnica.
          </p>
          <p>
            Reduza o tempo gasto em tarefas manuais com automação completa do
            fluxo de trabalho.
          </p>
        </div>
        <img className="notebook" src={notebook} alt="" />
      </div>
      <div className="conteudoCinco">
        <h2 className="tituloCinco">Resultados para sua Assistência</h2>
        <img className="lineCinco" src={line} alt="" />
        <div className="boxsDois">
          <div className="clientes">
            <h2 className="boxiesDois">Clientes</h2>
            <p className="numero">+200</p>
            <p>Atendidos na plataforma</p>
          </div>
          <div className="otimizacao">
            <h2 className="boxiesDois">Otimização</h2>
            <p className="numero">2h</p>
            <p>Economia de tempo nos atendimentos</p>
          </div>
          <div className="ordensServico">
            <h2 className="boxiesDois">Ordens de Serviço</h2>
            <p className="numero">+100</p>
            <p>Acompanhamento de OS em tempo real</p>
          </div>
          <div className="satisfacao">
            <h2 className="boxiesDois">Satisfação</h2>
            <p className="numero">+300</p>
            <p>Satisfação do cliente em seu atendimento</p>
          </div>
        </div>
      </div>

      <div className="conteudoSeis">
        <h2 className="tituloSeis">Satisfação dos nossos Clientes</h2>
        <img className="clientesImage" src={clientes} alt="" />
      </div>
      <div className="conteudoSete">
        <h2 className="tituloSete">Nossos Planos</h2>
        <div className="containerPlanos">
          <div className="basic">
            <h2 className="price">R$39,90 /mês</h2>
            <h2>Basic</h2>
            <p>Cadastro da nossa plataforma</p>
            <p>1 administrador</p>
            <p>3 Técnicos</p>
            <p>250 clientes mensais</p>
            <Button
              sx={{
                backgroundColor: "#00FCA8",
                maxWidth: "200px",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#0A3266",
                },
              }}
            >
              Escolha esse plano
            </Button>
          </div>
          <div className="standart">
            <p>mais popular</p>
            <h2>R$59,90 /mês</h2>
            <h2>Standart</h2>
            <p>Cadastro da nossa platafoma</p>
            <p>2 Administradores</p>
            <p>5 Técnicos</p>
            <p>400 clientes mensais</p>
            <Button
              sx={{
                backgroundColor: "#00FCA8",
                maxWidth: "200px",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#0A3266",
                },
              }}
            >
              Escolha esse plano
            </Button>
          </div>
          <div className="premium">
            <h2 className="price">R$79,90 /mês</h2>
            <h2>Premium</h2>
            <p>Cadastro da nossa platafoma</p>
            <p>5 Administradores</p>
            <p>10 Técnicos</p>
            <p>+400 clientes mensais</p>
            <Button
              sx={{
                backgroundColor: "#00FCA8",
                maxWidth: "200px",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#0A3266",
                },
              }}
            >
              Escolha esse plano
            </Button>
          </div>
        </div>
      </div>
      <div className="conteudoOito">
        <div className="parteUm">
          <div className="parteUmTitle">
            <h2 className="tituloOito">Problemas técnicos?</h2>
            <Button
              sx={{
                backgroundColor: "white",
                maxWidth: "200px",
                color: "black",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#0A3266",
                },
              }}
            >
              Contate-nos
            </Button>
          </div>
          <p>
            {" "}
            Deixe com a gente! Nossa equipe especializada resolve suas questões
            rapidamente, para que você possa seguir sua jornada sem preocupações
            goodness.
          </p>
        </div>
        <div className="parteDois">
          <div className="textosParteDois">
            <h2 className="tituloNove">
              Simplifique sua Assistência Técnica com Nossa Plataforma
            </h2>
            <img className="underlineQuatro" src={underline} alt="" />
            <p>
              Está cansado de perder tempo com processos manuais e
              desorganizados?
            </p>
          </div>
          <img className="homem" src={homem} alt="" />
        </div>
        <div className="parteTres">
          <div className="miniSessao">
            <h2 className="tituloDez">Controle total do processo</h2>
            <p>
              {" "}
              Criada para transformar a forma como você lida com ordens de
              serviço, aumentando sua produtividade.
            </p>
          </div>
          <div className="miniSessao">
            <h2 className="tituloOnze">Gestão simplificada de OS</h2>
            <p>
              Crie, edite e acompanhe ordens de serviço de forma rápida e
              intuitiva.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="estrutura">
          <div className="empresa">
            <p>Empresa</p>
            <p>Sobre nós</p>
            <p>Nossa história</p>
          </div>
          <div className="recursos">
            <p>Recursos</p>
            <p>Política e Privacidade</p>
            <p>Termos e Condições</p>
            <p>Contato</p>
          </div>
          <div className="produto">
            <p>Produto</p>
            <p>Gerenciamento de Ordens</p>
            <p>Cadastro de Técnicos</p>
            <p>Otimização de Tempo</p>
          </div>
          <div className="formm">
            <p>Inscreva-se para receber notícias</p>
            <Button
              sx={{
                backgroundColor: "white",
                maxHeight: "40px",
                maxWidth: "200px",
                color: "black",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#0A3266",
                },
              }}
            >
              Inscreva-se
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
