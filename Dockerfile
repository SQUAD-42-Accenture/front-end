# Etapa de build para o front-end React
FROM node:20 AS build

WORKDIR /app

COPY servpro/package*.json ./

RUN npm install

# Copiar o código do projeto
COPY . .

RUN npm run build

# Etapa de produção usando o Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

ENV PORT 5000

EXPOSE ${PORT}

# Configurar o Nginx para escutar na porta configurada
CMD ["nginx", "-g", "daemon off;", "-p", "${PORT}"]
