# INE5646

Este repositório contém o código do projeto Anime tracker, desenvolvido para a disciplina de Programação Web da UFSC.

## Frontend

O frontend da aplicação foi desenvolvido com React.js, em conjunto com algumas bibliotecas como `react-router-dom` para o roteamento das páginas, `matherial-ui` para o componente de modal utilizado ao adicionar um anime novo, `formik` para validação de formulários e `react-icons` para utilizar ícones dentro da aplicação.

Nenhuma biblioteca ou framework de CSS foi utilizado para o desenvolvimento do site, e apenas media queries foram usadas para tornar o site responsivo. A versão para smartphones foi testada no layout do Galaxy S9/S9+ e iPhone X/XS através do console de desenvolvedor do Firefox. O suporte mobile é para telas menores que 500px.

Como o backend ainda não foi implementado, foram utilizados arquivos json como mock data.

Para executar o projeto, é necessário possuir o node/npm instalado, e seguir os passos:

```
git clone https://github.com/kundlatsch/INE5646.git
cd INE5646
cd frontend
npm install
npm start
```

O projeto ficará disponível na porta 3000. Na tela inicial é possível navegar para as telas de Login e Registro. Ao clicar para fazer login (ou se registrar após preencher os dados corretamente), é possível acessar a tela principal do usuário. Nessa tela os botões de adicionar novo anime e visualizar listagem completa de animes são funcionais. Todas as validações do frontend já foram implementadas, faltando apenas realizar a integração com o backend.

