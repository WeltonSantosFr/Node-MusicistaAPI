FROM node:latest

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar dependências do projeto e instalar
COPY package*.json ./
RUN npm install

# Copiar o código fonte do projeto
COPY . .

# Copiar o arquivo .env
COPY .env .env

# Expor a porta em que a aplicação Express.js está escutando
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
