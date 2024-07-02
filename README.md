
### Filebox | Aplicativo de Gerenciamento de Arquivos


https://file-box-front.vercel.app/
![image](https://github.com/diego-lds/file-box-front/assets/4356478/44769ce8-d36c-41b5-b744-beb0ef87310e)

Este é um aplicativo de gerenciamento de arquivos desenvolvido com React. Ele permite que os usuários façam upload, visualizem, filtrem e excluam arquivos. O aplicativo integra-se com o Google OAuth para autenticação de usuários e usa localForage para armazenamento local.

## Funcionalidades

- **Autenticação de Usuário**: Login e logout com Google OAuth.
- **Gerenciamento de Arquivos**: Upload, visualização, filtragem e exclusão de arquivos.
- **Design Responsivo**: Otimizado para visualização em desktop e dispositivos móveis.
- **Notificações**: Notificações toast para feedback do usuário.
- **Armazenamento Persistente**: Uso do localForage para armazenar dados do usuário.
- **Filtro da listagem de arquivos**: Campo para filtrar os arquivos conforme o user digita.


## Tecnologias Utilizadas

- **React**: Biblioteca frontend para construção de interfaces de usuário.
- **React Router**: Para roteamento no lado do cliente.
- **React Toastify**: Para notificações toast.
- **localForage**: Para armazenamento local persistente.
- **Axios**: Para fazer requisições HTTP.
- **Tailwind CSS**: Para estilização da interface.

## Instalação

Clone o repositório:

```bash

git clone git@github.com:diego-lds/file-box-front.git
cd file-box-front
```

Instale as dependências:

```bash
npm install
```

### Configuração do Google OAuth:

1. Crie um projeto no Google Developer Console.
2. Configure as credenciais OAuth 2.0 e obtenha seu `client_id`.
3. Crie um arquivo `.env` na raiz do projeto e adicione seu `client_id`:

```

REACT_APP_GOOGLE_CLIENT_ID=seu-client-id
```

Inicie o aplicativo:

```bash
npm start
```

## Uso

- **Login**: Clique no botão de login para autenticar-se com sua conta do Google.
- **Upload de Arquivos**: Use a seção de upload para enviar novos arquivos.
- **Visualização de Arquivos**: Visualize a lista de arquivos enviados.
- **Filtragem**: Use a barra de filtro para encontrar arquivos específicos.
- **Excluir Arquivos**: Clique no botão de excluir para remover arquivos.

## Estrutura do Projeto

```bash
bashCopiar código
src/
├── components/
│   ├── Filterbar.jsx
│   ├── FileUploader.jsx
│   ├── List.jsx
│   ├── Logo.jsx
│   ├── SearchBar.jsx
│   ├── UserProfile.jsx
│   └── Icon.jsx
├── services/
│   ├── fileService.js
├── utils/
│   ├── formatBytes.js
├── App.jsx
├── HomePage.jsx
├── index.js
└── ...

```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Autor

- **Diego Lopes**
- **Contato**: diegolopes087@gmail.com

## Disclaimer

Este projeto é apenas para fins educacionais e não deve ser usado em produção sem as devidas modificações e auditorias de segurança.
