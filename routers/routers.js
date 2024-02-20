const http = require('http');
const { authors, books } = require('./fixtures');
const HOSTNAME = 'localhost';
const PORT = 8000;


function requestHandler(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.url);
    console.log(req.method);

    switch (req.url) {
        case "/books":
            res.end(JSON.stringify(books));
            break;
        case "/authors":
            res.end(JSON.stringify(authors));
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({
                "message": "Not Found"
            }));
    }
}

const server = http.createServer(requestHandler);
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started successfully at http://${HOSTNAME}:${PORT}`);
});
