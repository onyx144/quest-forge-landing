import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import nodemailer from 'nodemailer';
const fetch = require('node-fetch');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT; // ⚠️ только process.env.PORT

// Убираем заголовок X-Powered-By
app.use((req, res, next) => {
  res.removeHeader('X-Powered-By');
  next();
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  etag: true,
  lastModified: true
}));

function createTransporter() {
  try {
    return nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail'
    });
  } catch (error) {
    console.warn('⚠️ Sendmail недоступен, fallback SMTP');
    return nodemailer.createTransport({
      host: 'localhost',
      port: 25,
      secure: false,
      ignoreTLS: true
    });
  }
}

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    nodeVersion: process.versions.node,
    environment: process.env.NODE_ENV || 'development'
  });
});



app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ 
      error: 'React application not built',
      message: 'Сначала соберите приложение: npm run build',
      timestamp: new Date().toISOString()
    });
  }
});

app.use((err, req, res, next) => {
  console.error('Ошибка:', err);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

function startServer() {
  const server = app.listen(PORT, () => {
    console.log('🚀 Сервер запущен на:', PORT);
  });

  server.on('error', (error) => {
    console.error('Ошибка сервера:', error);
    process.exit(1);
  });

  const gracefulShutdown = (signal) => {
    console.log(`🛑 ${signal} received, shutting down`);
    server.close(() => {
      console.log('✅ Server closed');
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000);
  };

  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));
}

startServer();
