#### NLW #16 - ReactJS
# 🚀 Projeto Plann.er

## Sobre
- Projeto Frontend para planejamento de viagem, desenvolvido em ReactJS com TypeScript

## Premissas
- Para criar um projeto React é necessário instalar algumas ferramentas:
  - Para instalar o `Node.js` no Windows, é recomendado instalar primeiro o gerenciado de pacote [Chocolatey](chocolatey.org)
  - O próximo passo é instalar o [Node.js](nodejs.org).
    - Você pode fazer isso através do comando `$ choco install nodejs.install`
    - Ou baixando o instalador no próprio site do `Node.js` e executando a instalação
  - E por fim, para facilitar a criação de aplicações `React` já trazendo o suporte ao `TypeScript` e recursos para trabalhar com `CSS`, vamos trabalhar com o [Vitejs](vitestjs.dev)


## Iniciando o Projeto
- Para criar o projeto digite o seguinte comando no terminal:
```
$ npm create vite@latest
```
- Informe as opções `y`
- Digite um nome para o projeto
- Em seguida selecione o framework `React`
- E por fim a opção `TypeScript`
- Agora, pra instalar todos os pacotes, digite:
```
$ npm i
```

## Instalando o Tailwindcss
- O [`Tailwindcss`](tailwindcss.com) é um framework utilizado para trabalhar com estilizações em aplicações `React`
- Segundo a documentação do framework, como estamos utilizando o `vite`, para realizar a instalação de todas as ferramentas necessárias em ambiente de desenvolvimento, digite:
```
$ npm install -D tailwindcss postcss autoprefixer
```
- E em seguida para iniciar o assistente de configuração, digite:
```
$ npx tailwindcss init -p
```
- Nesse momento, o assistente irá criar alguns arquivos de configuração do `Tailwindcss` chamados `tailwind.config.js` e `postcss.config.js`
- Substitua o conteúdo do arquivo `tailwind.config.js` por:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Na raiz da pasta `src` crie o arquivo `input.css` e cole o seguinte conteúdo:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  min-width: 0;
}
```

## Instalando Extensões para uso do `Tailwindcss`
- Instale a extensão `Tailwind CSS IntelliSense`
- Instale a extensão `PostCSS Language Support`

## Configurando as principais Settings
- No arquivo `settings.json` adicione as seguintes configurações:
```
{
  "emmet.syntaxProfiles":{
        "javascript": "jsx",
  },
  "emmet.includeLanguages":{
      "javascript": "javascriptreact",
  },
}
```

## Instalando a Fonte `Inter` do Google
- Pesquisa no Google pelo seguinte texto:
```
Inter Google Fonts
```
- No arquivo `index.html` na raiz do projeto adicione o seguinte código dentro da tag `head`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
```
- Para configurar a fonte, abra o arquivo `tailwind.config.js` e dentro de `theme` adicione o seguinte código:
```
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      }
    },
  },
```

## Configurando a paleta de cores no `Tailwindcss`
- No google, digite:
```
tailwind colors
```
- Abra o link [`Customizing Colors`](https://tailwindcss.com/docs/customizing-colors) na resultado da pesquisa
- Para testar, adicione às seguintes classes na tag `body` do arquivo `index.html` na raiz do projeto:
```html
<body class="bg-zinc-950 text-zinc-50 antialiased">
```

## Instalando a biblioteca de icones
- Para instalar a biblioteca `Lucide`, digite:
```
$ npm i lucide-react
```

## Implementando a Página Principal
- Todo o formulário e a lógica da página inicial foi aplicada no arquivo `src/app.tsx`

## Trabalhando com Rotas
- Para trabalhar com rotas no `React` iremos utilizar o [`React Router`](reactrouter.com)
- Para instalar as dependências do `React Router`, digite:
```
$ npm i react-router-dom
```
- E para complementar, instale também as próximas bibliotecas:
```
$ npm i localforage match-sorter sort-by
```

## Criando as páginas/rotas
- Dentro da pasta `src` que está na raiz do projeto, crie as pastas `pages\create-trip` e por fim o arquivo `index.tsx`
  - Onde `pages` é a pasta onde ficaram todas as páginas roteadas
  - `create-trip` é a pasta que irá armazenar o conteúdo de uma página específica
  - E `index.tsx` é o arquivo responsável pelo código da página
- Essa estrutura é uma convenção a ser utilizada na utilização da biblioteca `react-router-dom`
- E para realizar a primeira migração e melhoria de código, mova todo o conteúdo do arquivo `app.tsx` para o arquivo `index.tsx` que acabamos de criar
- Em seguida renomeie a função `App()` para `CreateTripPage()`
- No arquivo `app.tsx` iremos implementar as rotas utilizando os recursos `` e `` da biblioteca `react-router-dom`


## Organizando a aplicação em Componentes
- Para criar um componente, vamos criar um arquivo `.tsx` para cada pedaço da aplicação que queremos separar do código principal. Com isso transformares essa parte do código em um componente.
- Esses componentes são criados dentro da mesma página de onde o trecho de código foi extraído
- Dentro de cada componente, será necessário criar uma interface, que por convenção terá o mesmo nome do componente acredito do sufixo `Props`. Por exemplo:
  - O arquivo `invite-guests-modal.tsx` se chamará `InviteGuestsModal()` e terá uma `interface` chamada `InviteGuestsModalProps`
  - E assim por diante
