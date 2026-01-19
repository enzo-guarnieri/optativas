# Etapa 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copia package.json e package-lock.json/yarn.lock
COPY package*.json ./

# Instala dependências
RUN npm install --legacy-peer-deps

# Copia o restante do código
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: Servir o app
FROM nginx:alpine

# Copia os arquivos de build do React
COPY --from=build /app/build /usr/share/nginx/html


# Copia configuração customizada do nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta padrão
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

