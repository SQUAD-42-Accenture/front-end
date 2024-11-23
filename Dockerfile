FROM node:20 AS build

WORKDIR /app

COPY servpro/package*.json ./

RUN npm install

COPY servpro/ .

RUN npm run build

FROM nginx:alpine

# Copiar os arquivos gerados pela build para o diretório de publicações do  Nginx 
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80 (padrão para o Nginx)
EXPOSE 80

# Comando para manter o Nginx rodando
CMD ["nginx", "-g", "daemon off;"]
