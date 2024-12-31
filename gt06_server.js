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
        data = data.toString();
        const fields  = ["Header","Unit ID/IMEI","Message ID","Transmission Reason","Command Key",
                        "Command Key Value","Ignition","Power Cut","Status Flags","Mains Voltage","Odometer","Speed","Satellite in View","GPS Data Validity","Latitude","Longitude","Altitude","Direction","Time","Date","Signal Strength","GSM Status","Error Code / Miscellaneous Field","Server Status","Internal Battery","Analog Input","Digital Input Status","Aux Field 1","Aux Field 2","Aux Field 3","Aux Field 4","Hardware Version","Software Version","Packet Type","End Delimiter"];
        const Value_data = data.split(',');

        const tcp_data = {};

        fields.forEach((fields, index) => {
            tcp_data[fields] = Value_data[index] || null;
        });

        console.log(`Recive Data : ${socket.remoteAddress}`,tcp_data);
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
