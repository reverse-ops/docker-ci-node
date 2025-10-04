# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copier package.json + package-lock si présent, installer dépendances
COPY package*.json ./
RUN npm install

# Copier le code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
