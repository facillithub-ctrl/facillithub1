/** @type {import('next').NextConfig} */

// Usando require (CommonJS) para compatibilidade
const withPWA = require('next-pwa');

// Configurações do PWA
const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Desabilita o PWA em modo de desenvolvimento
};

const nextConfig = {
  reactStrictMode: true,
  // Adicione outras configurações do Next.js aqui se necessário
};

// Envolver a configuração do Next.js com o 'withPWA'
module.exports = withPWA(pwaConfig)(nextConfig);