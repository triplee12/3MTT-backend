const http = require('http');
const fs = require('fs');
const path = require('path');

const bookDbPath = path.join(__dirname, 'db', 'books.json');
const HOST = 'localhost';
const PORT = 8000

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (req.url == "/books" && req.method == 'GET') {
        getAllBooks(req, res);
    }
    else if (req.url == '/books' && req.method == 'POST') {
        addBook(req, res);
    }
    else if (req.url == '/books' && req.method == 'PUT') {
        updateBook(req, res);
    }
    else if (req.url == '/books' && req.method == 'DELETE') {
        deleteBook(req, res);
    }
    else {
        res.write(404);
        res.end(JSON.stringify({
            'message': "Method not allowed"
        }));
    }
}

const server = http.createServer(requestHandler);
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started successfully at http://${HOSTNAME}:${PORT}`);
});
