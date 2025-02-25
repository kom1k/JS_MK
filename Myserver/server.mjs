import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// Запускаем сервер на порту 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Сервер запущен: http://127.0.0.1:3000');
});
