# Usa una imagen base de Node para construir la aplicación
FROM node:14 as build-stage

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo `package.json` y `package-lock.json` e instala las dependencias
COPY package*.json ./
RUN npm install

# Copia todo el código fuente al directorio de trabajo del contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa de producción
FROM nginx:alpine as production-stage

# Copia los archivos estáticos generados por Vue al servidor Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]
