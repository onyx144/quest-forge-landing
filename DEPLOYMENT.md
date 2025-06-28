# Инструкции по развертыванию

## Подготовка к развертыванию

1. **Установите зависимости:**
   ```bash
   npm install
   ```

2. **Соберите React приложение:**
   ```bash
   npm run build
   ```

3. **Настройте переменные окружения:**
   ```bash
   cp production.env.example .env
   # Отредактируйте .env файл под ваши нужды
   ```

4. **Запустите сервер:**
   ```bash
   npm start
   ```

## Автоматическая сборка и запуск

Для автоматической сборки и запуска используйте:
```bash
npm run start:prod
```

## Настройка для продакшена

### Переменные окружения

Создайте файл `.env` в корне проекта на основе `production.env.example`:

```env
# Production settings
NODE_ENV=production
PORT=/var/www/ch464938ac/.system/nodejs/questalize.com/socket
```

### Поддержка сокета

Сервер автоматически поддерживает Unix socket для работы с NGINX:
- Если `PORT` содержит путь (например, `/var/www/.../socket`), используется сокет
- Если `PORT` - число, используется TCP порт

## Структура файлов

```
quest-forge-landing/
├── dist/                    # Собранное React приложение
│   ├── index.html
│   ├── assets/
│   └── ...
├── index.js                 # Express сервер
├── package.json             # Конфигурация с скриптом start
├── production.env.example   # Пример переменных окружения
└── DEPLOYMENT.md           # Эта инструкция
```

## API Endpoints

### Health Check
```
GET /api/health
```
Возвращает статус сервера и информацию о системе.

### Статические файлы
```
GET /assets/*
GET /favicon.ico
GET /robots.txt
```
Обслуживаются из папки `dist/` с кешированием.

### SPA Routing
```
GET /*
```
Все остальные маршруты возвращают `index.html` для поддержки React Router.

## Логи и мониторинг

Сервер выводит подробные логи:
- 🚀 Информация о запуске
- 📁 Путь к статическим файлам
- 🌐 Доступные endpoints
- 🔌 Информация о сокете/порте
- 📊 Режим работы (development/production)

## Безопасность

- Убран заголовок `X-Powered-By`
- Ограничения на размер запросов (10MB)
- Кеширование статических файлов
- Graceful shutdown

## Troubleshooting

### Ошибка "React application not built"
```bash
npm run build
```

### Ошибка "Port is already in use"
1. Остановите другие процессы
2. Или измените `PORT` в `.env`

### Проблемы с сокетом
1. Проверьте права доступа к директории
2. Убедитесь, что путь корректный
3. Проверьте настройки NGINX

### Проверка работы
```bash
# Health check
curl http://localhost:3000/api/health

# Основное приложение
curl http://localhost:3000/
```

## Процесс развертывания

1. Загрузите файлы на сервер
2. Установите зависимости: `npm install`
3. Соберите приложение: `npm run build`
4. Настройте `.env` файл
5. Запустите сервер: `npm start`

Сервер будет автоматически обслуживать ваше React приложение через указанный сокет или порт. 