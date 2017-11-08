const calc = require('./calc');

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<!DOCTYPE \"html\">");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Test Jenkins Page</title>");
  res.write("<title>Test Jenkins Page</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>circle-demo</h1>");
  res.write("calc.plus(2,2) <br>2 + 2 = " + calc.plus(2,2));
  res.write("<br><br>");
  res.write("calc.minus(2,2) <br>2 - 2 = " + calc.minus(2,2));
  res.write("<br><br>");
  res.write("calc.multiply(2,2) <br>2 * 2 = " + calc.multiply(2,2));
  res.write("<br><br>");
  res.write("calc.divide(2,2) <br>2 / 2 = " + calc.divide(2,2));
  res.write("</body>");
  res.write("</html>");
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
console.log("Server is listening");
