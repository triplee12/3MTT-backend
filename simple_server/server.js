const http = require('http');
const HOSTNAME = 'localhost';
const PORT = 8000;


function requestHandler(req, res, next) {
    console.log(req);
    res.writeHead("200", "OK");
    res.write("Just Do It!\n");
    res.end("Hello world from server!\n");
}

const server = http.createServer(requestHandler);
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started successfully at http://${HOSTNAME}:${PORT}`);
});
