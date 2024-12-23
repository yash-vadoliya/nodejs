const { Socket } = require('dgram');
const net = require('net');

const PORT = 5000;
const HOST = '0.0.0.0';

const server = net.createServer((socket) => {
    console.log('Device Connected:', socket.remoteAddress, socket.remotePort);

    socket.on(`data`, (data) => {
        console.log('Received Data :', data.toString('utf-8'));
        const ack = 'GT06 Ack: Login successful\n';
        socket.write(ack);
        console.log('Sent acknowledgment:', ack);
    });

    socket.on('end', () => {
        console.log('Device Disconnected:', socket.remoteAddress, socket.remotePort);
    });

    socket.on('error', (err) => {
        console.log('Error : ', err.message);
    });

});

server.listen(PORT,HOST, () => {
    console.log(`GT06 TCP Server Running on ${HOST}:${PORT}`);
});