![Yuppies Collage General LinkdIn Banner](https://github.com/user-attachments/assets/bafca917-d9f6-4b58-8dfd-0b9649e87627)


## 📖 Sobre o Projeto

O **Serve Pro** é um projeto inovador desenvolvido como parte do desafio da Residência Tecnológica do Porto Digital, no 4º período. Nosso objetivo é criar uma plataforma intuitiva e interativa que conecta prestadores de serviços a clientes. Este repositório contém o código do front-end, desenvolvido em React.

A plataforma de gerenciamento visa otimizar o tempo das empresas, permitindo um acompanhamento mais eficiente do fluxo de serviços. Além disso, proporciona aos clientes maior autonomia, facilitando o monitoramento de suas solicitações.

## 🚀 Tecnologias Utilizadas

- **Front-end**: React
- **Estilização**: [CSS, Styled Components, ou outra biblioteca]
- **Outras ferramentas**: [Inserir outras bibliotecas, como Axios para requisições, etc.]

## 🎨 Equipe Afrodite

Nossa equipe, nomeada **Afrodite**, é responsável pela estética e pela apresentação interativa do site. Buscamos criar uma experiência agradável e atraente para os usuários.

## 👥 Membros da Equipe

| Tech Lead                          | Dev                         | Dev                           | Dev                       | Dev                          |
|-----------------------------------|-----------------------------|-------------------------------|---------------------------|------------------------------|
| [![Rayane-Souza](https://github.com/Rayane-Souza.png?size=100&v=4)](https://github.com/Rayane-Souza) | [![Rebeca-Alves](https://github.com/Rebeca-Alves.png?size=100&v=4)](https://github.com/Rebeca-Alves) | [![sabrinasilvax](https://github.com/sabrinasilvax.png?size=100&v=4)](https://github.com/sabrinasilvax) | [![gabrielnotty](https://github.com/gabrielnotty.png?size=100&v=4)](https://github.com/gabrielnotty) | [![PalomaCezario](https://github.com/PalomaCezario.png?size=100&v=4)](https://github.com/PalomaCezario) |
| [Rayane-Souza](https://github.com/Rayane-Souza)  | [Rebeca-Alves](https://github.com/Rebeca-Alves)  | [sabrinasilvax](https://github.com/sabrinasilvax)  | [gabrielnotty](https://github.com/gabrielnotty)  | [PalomaCezario](https://github.com/PalomaCezario)  |


## 🏠 **Landing Page**
🌟 Antes de acessar o sistema, você será redirecionado para a **Landing Page** que apresenta informações detalhadas sobre os serviços oferecidos pela **ServPro**. Ela inclui detalhes sobre suporte técnico, manutenção de equipamentos e gerenciamento de ordens de serviço.

### **Como Acessar o Sistema?**
➡️ Na Landing Page, clique no botão **"Login"** para acessar a tela de login do sistema.

## 🚨 **Aviso Importante!!!**
- **Hospedagem no Render:** O sistema está hospedado tanto no backend quanto no frontend na plataforma Render. Isso pode consumir muitos recursos do servidor, e ocasionalmente, você pode se deparar com um erro de **Página 404**.
- **Solução:** Caso isso aconteça, **basta recarregar a página** ou **entrar novamente** no sistema na URL da LandingPage que é essa aqui: [servpro.com.br](https://front-end-c3nt.onrender.com/) e em seguida clique em Login
para que tudo volte ao normal, isso é uma limitação temporária relacionada ao consumo do servidor.  
-  O login pode demorar um pouco para carregar. Clique no botão **"Sign In"** e aguarde o redirecionamento.  
-  Nunca atualize (refresh) a página!** Caso precise voltar, use a seta de **voltar** do navegador.

---

## 🌐 **Acesse o Sistema**
🔗 [Clique aqui para acessar o sistema](https://front-end-c3nt.onrender.com/)  

### **Credenciais de Teste**
- **👩‍💼 Login como Administrador:**  
  - CPF: `12312312312`  
  - Senha: `admin`  

- **👤 Login como Cliente:**  
  - CPF: `65908304280`  
  - Senha: `123adm`  

- **🧑‍🔧 Login como Técnico:**  
  - CPF: `71134258447`  
  - Senha: `1234`  

<p align="center">
  <img src="https://github.com/user-attachments/assets/266a60e0-66b1-4ec6-8132-00e06c9932dc" alt="Tela do Sistema" width="600"/>
  <p align="center"><em>Tela de Login</em></p>
</p>

## 🚀 **Funcionalidades**

### 👩‍💼 **Administrador**
1. **📊 Visão Geral:**  
   - Ao Entrar é exibido a tela de clientes já cadastrados no sistemas, e um botão de "Cadastrar Novo Cliente" caso voce deseje.

<p align="center">
  <img src="https://github.com/user-attachments/assets/3f0d77f2-6353-456e-8c7d-5fb85d5935411" alt="Tela de Cadastro de Cliente" width="600"/>
  <p align="center"><em>Listagem de Clientes</em></p>
</p>

2. **📁 Cadastro de Clientes:**  
   - Para cadastrar um novo cliente é necessário preencher todos os campos, como CPF, endereço e informações de contato.  
   - **Importante:** O **CPF** não deve conter pontos ou traços (exemplo: `65908304280`).  
   - Após cadastrar o cliente, clique no botão abaixo descrito como "Salvar Cliente" e em seguida é exibido uma mensagem de confirmação na tela, clique em "Ok" na mensagem e em seguida, cadastre o equipamento relacionado ao cliente.
   -  **Importante:** O equipamento apenas vai ser cadastrado se existir um CPF válido, ou seja, tem que ter um cliente já cadastrado.

<p align="center">
  <img src="https://github.com/user-attachments/assets/0ebb6f41-1c63-410e-96f9-971dcb2dd054" alt="Tela de Cadastro de Cliente" width="600"/>
  <p align="center"><em>Cadastro de Cliente</em></p>
</p>

3. **🖥️ Cadastro de Equipamentos:**  
   - Registre informações sobre os equipamentos, como modelo, marca, serial, descrição e o CPF do cliente já cadastrado.
   - (exemplo: `Modelo: A53 Marca: Samsung  Serial: 12345`)
   - Todos os campos devem ser preenchidos.
   - O cadastro de Equipamento é na mesma tela de cadastro de cliente.

<p align="center">
  <img src="https://github.com/user-attachments/assets/564ff575-3d84-4b4c-825e-21c79ce83883" alt="Tela de Cadastro de Equipamento" width="600"/>
  <p align="center"><em>Cadastro de Equipamento</em></p>
</p>

4. **👷‍♂️ Cadastro de Técnicos:**  
   - Cadastre técnicos, fornecendo os dados necessários, como nome, CPF, senha.
   - **Importante:** No campo Status sempre deixar com "Ativo".
   - Preencha todos os campos, e clique em "Salvar Técnico".

<p align="center">
  <img src="https://github.com/user-attachments/assets/2ed86ae1-0b89-4d2d-850b-35ca0280de52" alt="Tela de Cadastro de Técnico" width="600"/>
  <p align="center"><em>Cadastro de Técnico</em></p>
</p>

5. **📜 Ordens de Serviço (OS):**  
   - Visualize, baixe e cadastre novas ordens de serviço (OS), vinculando cada OS a um cliente e equipamento anteriormente cadastrado.

<p align="center">
  <img src="https://github.com/user-attachments/assets/9f915782-2f24-47a5-8076-ccd68a2fc0f1" alt="Tela de Ordens de Serviço" width="600"/>
  <p align="center"><em>Listagem de Ordens de Serviços</em></p>
</p>

   - Clique no botão de cadastrar ordem de serviço e cadastre. 
   - Teste esse abaixo: 👇 Caso queira um CPF já cadastrado e vinculado a um equipamento.
   - **Serial para teste:** `1234562`  
   - **Cliente com CPF:** `65908304280`
   - Para cadastrar uma Ordem de Serviço você tem que ter o CPF de um técnico já cadastrado também, pode usar esse  `71134258447`
- **Cadastre sua ordem de serviço SEMPRE com a opção "Aberta"** para garantir que ela seja registrada corretamente no sistema. Isso permite que a OS seja visível e que os técnicos possam começar a trabalhar nela assim que for atribuída.

<p align="center">
  <img src="https://github.com/user-attachments/assets/e38f42c2-cfbd-436b-9900-21e5eab83d8a" alt="Tela de Cadastro de OS" width="600"/>
  <p align="center"><em>Cadastro de OS</em></p>
</p>

   - Após cadastrar sua ordem de serviço, ela é exibida na listagem.
   - Você também pode **fazer o download da sua ordem de serviço** para visualização, facilitando o acompanhamento e o armazenamento das informações.

---

### 🧑‍🔧 **Técnico**
- **📂 Ordens Atribuídas:**  
  - Veja as OS que foram atribuídas a você e os detalhes das tarefas associadas.

<p align="center">
  <img src="https://github.com/user-attachments/assets/7be752c6-8012-4a8c-b6e9-ce597ee5b320" alt="Ordens Atribuídas ao Técnico" width="600"/>
  <p align="center"><em>Listagem de Ordens Atribuídas ao Técnico</em></p>
</p>

- **🔄 Atualização de Status:**  
  - Atualize o status das ordens de serviço conforme o progresso do trabalho, e adicione comentários no histórico da OS.
    - Preencha todos os campos, o CPF solicitado é o do técnico, atualize o status das ordens de serviço conforme o progresso do trabalho, e adicione comentários no histórico da OS.
    - Ao fazer isso aparecer duas confirmações, a primeira da atualização do status e depois do histórico de OS, que é o comentário, basta clicar em "Ok", e em seguida, baixe sua ordem de serviço.

<p align="center">
  <img src="https://github.com/user-attachments/assets/2baa348c-7dd6-40b1-b413-61323aa5aa73" alt="Atualização de Status" width="600"/>
  <p align="center"><em>Atualização de Status e Comentário de OS</em></p>
</p>  

---

### 👤 **Cliente**
- **📈 Acompanhamento de OS:**  
  - Acompanhe o status das ordens de serviço associadas ao seu CPF diretamente na interface do cliente.

<p align="center">
  <img src="https://github.com/user-attachments/assets/7be752c6-8012-4a8c-b6e9-ce597ee5b320" alt="Acompanhamento de OS pelo Cliente" width="600"/>
  <p align="center"><em>Acompanhamento de Ordens de Serviço</em></p>
</p>

---

## 📊 **Tecnologias Utilizadas**
- **Frontend:** React, Node.js, CSS, React Icons.
- **Backend:** C#, Swagger, PostgreSQL, .NET, Docker.
- **Hospedagem:** Render.

---

## 📦 **Instalação Local**

Para rodar o projeto localmente, siga os seguintes passos:

-  **Clone este repositório:**
   Primeiro, clone o repositório para a sua máquina local:
   ```bash
   git clone https://github.com/SQUAD-42-Accenture/front-end.git
   cd servpro
   npm install
   npm run dev





## 🎉 **Agradecimentos**
Agradecemos pelo seu interesse no **ServPro**! Continuamos trabalhando para oferecer a melhor solução para o gerenciamento de ordens de serviço e suporte técnico.

---


