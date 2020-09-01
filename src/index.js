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
const publicDirPath = path.join(__dirname, "../react_public");

io.on("connection", socket => {
    // Send to current connection
    socket.emit("message", "Welcome!");
    // Sent to all client except those connected
    socket.broadcast.emit("message", "Intruder Alert!");
    socket.on("sendMessage", message => {
        // Send to all clients
        io.emit("message", message);
    });
    // When used is disconnected
    socket.on("disconnect", () => {
        io.emit("message", "A user has left");
    });

    socket.on("sendLocation", ({ latitude, longitude }) => {
        // io.emit("message", `Lat:${latitude}, Long:${longitude}`);
        io.emit("message", `https://www.google.com/maps?q=${latitude},${longitude}`);
    });
});

// let count = 0;
// io.on("connection", socket => {
//     //Socket have info about client connected
//     console.log("new Web socket Connection");

//     socket.emit("countUpdated", count);
//     socket.on("increment", () => {
//         count = count + 1;
//         //Emits only to current client
//         //socket.emit("countUpdated", count);
//         //Emits to all clients connected
//         io.emit("countUpdated", count);
//     });
// });

app.use(express.static(publicDirPath));
server.listen(port, () => {
    console.log(`App served from port ${port}`);
});
