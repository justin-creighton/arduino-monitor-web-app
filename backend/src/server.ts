import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import './services/serial-service';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

export { io };

io.on('sensor-update', (socket) => {
  console.log('Client connected:', socket.id);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});