const http = require('node:http');// Import thư viện 
const hostname = '127.0.0.1';// localhost
const port = 3000;// Cổng lắng nghe
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.write('<h1>Hello World</h1>\n');
  res.write('Nodejs - Bai 1\n');
  res.write('<br/>');
  res.write('Tạo project Helloword bằng Nodejs\n');
  res.write(`<h1>HTML 5 Discriptions1<h1/>
  <h1>HTML 5 Discriptions1<h1/>
  <h1>HTML 5 Discriptions1<h1/>`)
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});