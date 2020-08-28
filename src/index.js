const express = require("express");
const app = new express();
const path = require("path");

// Create server outside express
const http = require("http");
const server = http.createServer(app);

const socketIo = require("socket.io");
// Socket io to work with a server
// Server created outside express to have access to http server
const io = socketIo(server);

const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, "../public");

io.on("connection", () => {
    console.log("new Web socket Connection");
});

app.use(express.static(publicDirPath));
server.listen(port, () => {
    console.log(`App served from port ${port}`);
});
