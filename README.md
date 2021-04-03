# API PÓKEMON BY CITY
![Preview-Screens](https://github.com/LucasMartins99/API-Pokemon/blob/master/Back-Screen.png)

## Sobre a API

A ideia principal dessa api é :

_"Encontrar pokemons baseado no clima de uma cidade"_.

## Por que ?

Este projeto faz parte de um desafio que foi proposto como um teste em um processo seletivo, e também faz parte do meu portfólio pessoal ficarei muito feliz se puder me dar algum feedback sobre o projeto, código estrutura ou melhorias que você possa me relatar.

## Algumas observações sobre a API

1-) Não há funcionalidade de login ou cadastro.

2-) Está API necessita de duas APIs externa para o seu funcionamento.

3-) A porta padrão é 3033.

4-) Aplicação front-end: https://github.com/LucasMartins99/Pokemon

## Funcionalidade

- Recebe um nome de uma cidade e busca na API [OpenWeatherMap](https://openweathermap.org/) o clima atual da mesma.

- Buscar um pokémon referente ao tempo da cidade escolhida na API [PokeAPI](https://pokeapi.co/)

- Retorna em formato JSON:
  - Url da foto do pokémon.
  - Nome do pokémon.
  - Tipo do pokémon.
  - Cidade.
  - Se está chovendo.
  - Temperatura da cidade.

## Começando

### Pré-requisitos

Para rodar está API basta dar um git clone neste repositório, ter o [NodeJS](https://nodejs.org/en/) instalado em sua máquina e o YARN ou NPM.

### Instalando

**Clonando repositório**

```
$ git clone https://github.com/LucasMartins99/API-Pokemon

$ cd API-Pokemon

```

**Instalar as dependências**

```
$ yarn
```
  _or_

```
$ npm install
```

**Rodar API modo produção**

```
$ yarn build
```

```
$ yarn start
```

  _or_

```
$ npm build
```

```
$ npm start
```

**Rodar API modo desenvolvimento**

```
$ yarn dev
```

  _or_

```
$ npm dev
```

**Rodar testes da API**

```
$ yarn test
```

  _or_

```
$ npm test
```


Após estes comandos a API irá rodar em sua máquina.

## Tecnologias utilizadas

- [Axios](https://github.com/axios/axios) - Interação com XMLHttpRequest.
- [Babel](https://babeljs.io) - Compilador JS.
- [Express](https://expressjs.com/pt-br/) - Gerenciador de requisições e rotas.
- [Jest](https://jestjs.io) - Utilizado para testes na API.
- [Nodemon](https://nodemon.io) - Roda o comando node automático para desenvolvedor.
- [NodeJS](https://nodejs.org/en/) - Ambiente de execução.
- [Sucrase](https://sucrase.io) - Transpilador de código JS.

## Contribuição

Você pode abrir quantas issues que quiser, ficarei feliz em analizar e responder todas.

Email: fabio.lucaslima@outlook.com

Meu LinkedIn: [LinkedIn](https://www.linkedin.com/in/fabio-lima-b78a1b15a/)

Obrigado !!







