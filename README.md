!(https://raw.githubusercontent.com/Matheussandi/Pokedex/2f5ce33187dc559f66e9c7bac176a8b2082639ed/src/images/logo.svg)

# **Documentação Técnica - Projeto "Pokédex" 🐱‍👤**

## **Introdução 🔍**

O projeto "Pokédex" é uma aplicação web desenvolvida com o objetivo de fornecer uma lista de Pokémons para o usuário. Através da aplicação, o usuário pode visualizar informações sobre cada Pokémon, adicioná-los ou removê-los de sua Pokédex pessoal, e visualizar detalhes sobre cada Pokémon selecionado. A aplicação foi desenvolvida utilizando as tecnologias React, styled-components, Chakra UI e react-router-dom, e consome dados da API PokeAPI.

Deploy: pokedex-mellissa-morette.surge.sh[https://pokedex-mellissa-morette.surge.sh]

## **Funcionalidades 🎉**

A seguir, serão listadas as principais funcionalidades do projeto:

📌 Listagem de Pokémons: A aplicação exibe uma lista de todos os Pokémons disponíveis, contendo seu nome, número, tipo e imagem. O usuário pode navegar pela lista e visualizar informações sobre cada Pokémon.

📌 Detalhes do Pokémon: Ao selecionar um Pokémon na lista, o usuário é direcionado para uma página de detalhes do Pokémon, contendo informações mais detalhadas sobre o mesmo, incluindo sua altura, peso, habilidades e estatísticas.

📌 Adição à Pokédex: O usuário pode adicionar Pokémons à sua Pokédex pessoal, que é uma lista separada dos Pokémons que ele escolheu. Essa lista pode ser acessada através de uma página específica.

📌 Remoção da Pokédex: O usuário pode remover Pokémons de sua Pokédex pessoal, atualizando a lista de Pokémons em sua Pokédex.

📌 Modal de notificação: Ao adicionar ou remover um Pokémon de sua Pokédex, o usuário recebe uma notificação através de um modal, informando-o sobre a operação realizada.

📌 Navegação: A aplicação possui uma barra de navegação superior, que permite ao usuário navegar entre as diferentes páginas da aplicação.

## **Tecnologias 🛠️**

A seguir, serão apresentadas as tecnologias utilizadas no desenvolvimento do projeto:

* React ⚛️: biblioteca JavaScript utilizada para criar a interface de usuário da aplicação.
* Styled-components 💅: biblioteca utilizada para estilizar os componentes React de forma - dinâmica, através da definição de estilos em arquivos JavaScript.
* Chakra UI 🔧: biblioteca de componentes React utilizada para construir a interface de usuário, fornecendo estilos pré-definidos e facilitando a construção de interfaces.
* React-router-dom 🌐: biblioteca utilizada para gerenciar as rotas da aplicação, permitindo a navegação entre as diferentes páginas.
* PokeAPI 🐾: API externa utilizada para obter dados sobre os Pokémons.
* Axios 💻: Biblioteca JavaScript utilizada para realizar requisições HTTP na API PokeAPI

## **Componentes 📦**

A seguir, serão apresentados os principais componentes da aplicação, juntamente com suas funcionalidades:

**CardPokemon 🃏**
Componente responsável por exibir informações sobre um Pokémon, incluindo seu nome, número, tipo e imagem. Possui um botão "Ver detalhes" que leva o usuário à página de detalhes do Pokémon, e um botão "Capturar" ou "Excluir", dependendo do contexto em que é usado. É estilizado usando a biblioteca styled-components.

**Header 🧭**
Componente responsável por renderizar a barra de navegação na parte superior da aplicação. Utiliza tecnologias como React, styled-components, Chakra UI e react-router-dom.

**App 📱**
Este arquivo é responsável por gerenciar as rotas da aplicação. Ele utiliza a biblioteca react-router-dom para definir as rotas da aplicação e renderizar os componentes correspondentes a cada rota. O App.js possui três rotas principais: a rota inicial "/", que renderiza a página principal da aplicação, a rota "/details/:id", que renderiza a página de detalhes de um Pokémon específico e a rota "/pokedex", que renderiza a lista de Pokémons adicionados à Pokédex pessoal do usuário.

### **Instalação e Configuração 📝 💻**

1) Após fazer o fork do projeto, clone o repositório do mesmo em seu ambiente local:
	> git clone https://github.com/seu-usuario/pokedex.git
2) Instale as dependências do projeto, utilizando o gerenciador de pacotes npm:
	> npm install
3) Renomeie o arquivo .env.example para .env, e preencha as variáveis de ambiente necessárias para a conexão com a API PokeAPI. As variáveis necessárias são REACT_APP_API_URL e REACT_APP_API_VERSION, que correspondem à URL da API e à versão utilizada, respectivamente.
4) Inicie a aplicação em modo de desenvolvimento, utilizando o comando:
	> npm start
5) A aplicação estará disponível no endereço http://localhost:3000/.

***Este projeto foi criado por Mellissa Morette. Você pode entrar em contato por meio dos seguintes canais:***

Email: contatomellissamorette@gmail.com [contatomellissamorette@gmail.com] LinkedIn: Mellissa M. dos S. Guimarães [https://www.linkedin.com/in/mellissa-morette/]

Copyright © [2023] Mellissa Morette dos Santos Guimarães

Este trabalho está protegido por leis de direitos autorais e outros direitos de propriedade intelectual. A reprodução, distribuição ou exibição deste trabalho, bem como a criação de trabalhos derivados baseados neste, são proibidas, salvo com autorização prévia por escrito do proprietário dos direitos autorais.

O uso de informações ou dados contidos nesta documentação é de responsabilidade exclusiva do usuário. O proprietário dos direitos autorais não assume responsabilidade por quaisquer danos decorrentes do uso ou confiança nas informações contidas nesta documentação.

Para solicitar permissão para usar este trabalho, entre em contato com o proprietário dos direitos autorais pelo email [contatomellissamorette@gmail.com].

