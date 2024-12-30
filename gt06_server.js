const net = require('net');
const os = require('os');

// Function to get the machine's local IP address
function getLocalIp() {
    const networkInterfaces = os.networkInterfaces();
    for (const interfaceName in networkInterfaces) {
        for (const network of networkInterfaces[interfaceName]) {
            if (network.family === 'IPv4' && !network.internal) {
                return network.address;
            }
        }
    }
    return '127.0.0.1'; // Fallback to localhost
}

const HOST = getLocalIp(); // Change to your server's IP
const PORT = 20000;

// Create a TCP Server
const server = net.createServer((socket) => {
    console.log('Device Connected:', socket.remoteAddress, socket.remotePort);

    socket.on('data', (data) => {
        console.log(`Received ${socket.remoteAddress} Data:`, data.toString());
        socket.write(`Server Response:${data}`);
    });

    socket.on('end', () => {
        console.log('Device Disconnected:', socket.remoteAddress, socket.remotePort);
    });

    socket.on('error', (err) => {
        console.log('Error:', err.message);
    });
});

// Start the server
server.listen(PORT, HOST, () => {
    console.log(`GT06 Server is running on ${HOST}:${PORT}`);
});


// Run This Code 
// Open Powershell/Cmd And Type A Command
// node gt06_serever.js
// Open Another Powershell/Cmd And Type A Command
// telnet <serverIP> Port