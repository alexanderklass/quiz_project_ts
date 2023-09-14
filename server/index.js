import express from 'express';
import {createServer} from 'node:http';
import {Server} from 'socket.io';
import cors from "cors";

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        method: ["GET,POST"],
    }
});

io.on('connect', (socket) => {
    console.log(`user ${socket.id} connected`);
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});