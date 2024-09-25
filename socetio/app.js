const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');
    const clientIp = socket.handshake.address;
    console.log(`User connected with IP: ${clientIp}`);

    socket.on('message', (msg) => {
        console.log(`Messege from: ${msg}`);

        io.emit('message', msg);
    });

    socket.on('disconnect', () => {
        console.log(`User Disconnected `);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});