import express from 'express';
import {createServer} from 'node:http';
import {Server} from 'socket.io';
import cors from "cors";

const port = 3000;
const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        method: ["GET", "POST"],
    }
});

io.on('connect', (socket) => {
    console.log(`User ${socket.id} connected`);

    socket.on("sendMessage", (newMessage) => {
        socket.to(newMessage.room).emit("receiveMessage", newMessage);
    });

    socket.on("addPlayer", (newPlayer) => {
        socket.join(newPlayer.room)
        socket.to(newPlayer.room).emit("receivePlayer", newPlayer);
        console.log(`Player Added: ${newPlayer.playerName} room: ${newPlayer.room}`)
    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected.`);
    });

    socket.on("error", (err) => {
        console.log(err);
    })
});

server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});