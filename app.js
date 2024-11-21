const http = require('http');

const port = process.env.PORT || 3005;

const requestHandler = (req, res) => {
  res.end('Hello, Jenkins!');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
