const express = require('express');
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT () => {
    console.log(`Server started successfully at http://localhost:{PORT}`);
});
