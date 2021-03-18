const { createServer } = require("http");

function requestListener(req, res) {
  res.writeHead(200);
  debugger;
  res.end("Hello, World!");
}

const server = createServer(requestListener);
server.listen(8080);
