# Base image dari Node.js versi 21
FROM node:21

# Tentukan direktori kerja
WORKDIR /usr/src/app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin seluruh kode aplikasi
COPY . .

# Ekspose port 8000
EXPOSE 8000

# Jalankan aplikasi
CMD ["node", "app.js"]