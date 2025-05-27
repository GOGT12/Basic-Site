const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  debugger
  let filePath = './';

  switch (req.url) {
    case '/':
      filePath += 'index.html';
      break;
    case '/about':
      filePath += 'about.html';
      break;
    case '/contact-me':
      filePath += 'contact-me.html';
      break;
    default:
      filePath += '404.html';
      break;
  }
  debugger

  fs.readFile(filePath, (err, content) => {
    if(err) {
      res.writeHead(500);
      res.end('Error interno del servidor');
    } else {
      res.writeHead(200, {'Content-type': 'text/html'});
      res.end(content)
    }

  });
});

server.listen(8080, () => {
  console.log('Servidor corriendo en http://localhost:8080')
});
