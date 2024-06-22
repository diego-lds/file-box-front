Aplicativo de Gerenciamento de Arquivos
Este é um aplicativo de gerenciamento de arquivos desenvolvido com React. Ele permite que os usuários façam upload, visualizem, filtrem e excluam arquivos. O aplicativo integra-se com o Google OAuth para autenticação de usuários e usa localForage para armazenamento local.

Funcionalidades
Autenticação de Usuário: Login e logout com Google OAuth.
Gerenciamento de Arquivos: Upload, visualização, filtragem e exclusão de arquivos.
Design Responsivo: Otimizado para visualização em desktop e dispositivos móveis.
Notificações: Notificações toast para feedback do usuário.
Armazenamento Persistente: Uso do localForage para armazenar dados do usuário.
Tecnologias Utilizadas
React: Biblioteca frontend para construção de interfaces de usuário.
React Router: Para roteamento no lado do cliente.
React Toastify: Para notificações toast.
localForage: Para armazenamento local persistente.
Axios: Para fazer requisições HTTP.
Tailwind CSS: Para estilização da interface.
Instalação
Clone o repositório:

bash
Copiar código
git@github.com:diego-lds/file-box-front.git
cd file-box-front
Instale as dependências:

bash
Copiar código
npm install
Configuração do Google OAuth:

Crie um projeto no Google Developer Console.

Configure as credenciais OAuth 2.0 e obtenha seu client_id.

Crie um arquivo .env na raiz do projeto e adicione seu client_id:

env
Copiar código
REACT_APP_GOOGLE_CLIENT_ID=seu-client-id
Inicie o aplicativo:

bash
Copiar código
npm start
Uso
Login: Clique no botão de login para autenticar-se com sua conta do Google.
Upload de Arquivos: Use a seção de upload para enviar novos arquivos.
Visualização de Arquivos: Visualize a lista de arquivos enviados.
Filtragem: Use a barra de filtro para encontrar arquivos específicos.
Excluir Arquivos: Clique no botão de excluir para remover arquivos.
Estrutura do Projeto
bash
Copiar código
src/
├── components/
│ ├── Filterbar.jsx
│ ├── FileUploader.jsx
│ ├── List.jsx
│ ├── Logo.jsx
│ ├── SearchBar.jsx
│ ├── UserProfile.jsx
│ └── Icon.jsx
├── services/
│ ├── fileService.js
├── utils/
│ ├── formatBytes.js
├── App.jsx
├── HomePage.jsx
├── index.js
└── ...
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Autor: Diego Lopes
Contato: diegolopes087@gmail.com

Disclaimer: Este projeto é apenas para fins educacionais e não deve ser usado em produção sem as devidas modificações e auditorias de segurança.
