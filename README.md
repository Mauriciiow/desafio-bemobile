# Sobre

O desafio Mobile da Be consiste em montar uma tabela com as informações que virão por uma API simulada escrita em json-server.
A tabela deve conter as seguintes colunas: imagem e nome.
Quando abrir mais informações mostrar: cargo, data de admissão e telefone, com todos os dados devidamente formatados e apresentados como está no figma. Além disso, deve ter a possibilidade de realizar uma pesquisa na tabela por um input.

![Screenshot-mobile](https://user-images.githubusercontent.com/1697362/194322705-faf9fbbe-ce38-4c17-93f6-50750e68e542.png)

# Ferramentas Utilizadas

- TypeScript
- React Native
- Styled-Components
- json-server
- react-native-svg
- Axios

## Pré-requisitos

Possuir o yarn instalado no seu ambiente.

Antes de rodar o aplicativo é preciso ter o ambiente configurado, caso não possua seu ambiente configurado, utilize a [documentacão oficial do React Native](https://reactnative.dev/docs/environment-setup)

## Rodando a aplicação

Siga as etapas abaixo para executar o aplicativo em seu ambiente:

1. Clone este repositório para o seu computador:

```bash
git clone https://github.com/Mauriciiow/desafio-bemobile.git
```

2. Navegue até o diretório do projeto:

```bash
cd desafio-bemobile
```

3. Instale as dependências do projeto:

```bash
yarn install
```

4. É necessario alterar o ip em dois arquivos (importante pois o android virtual device não suporta o localhost):

```bash
# mudar a constante BASE_IP
./
|-- desafio-bemobile/
| |-- src/
| | |-- services/
| | | |-- api.ts

# adicionar seu ip no script server-json
./
|-- desafio-bemobile/
| |-- package.json
```

```bash
# Você consegue visualizar seu ip usando esse comando no terminal:

# MacOS:
ifconfig

# Windows:
ipconfig
```

5. Inicie o server pelo terminal

```bash
yarn server-json
```

6. Inicie o aplicativo:

## IOS

```bash
cd ios && pod install
yarn ios
```

## Android

```bash
yarn android
```
