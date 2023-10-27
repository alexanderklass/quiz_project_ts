import {io, Socket} from "socket.io-client";

const client: Socket = io("http://localhost:3000");
export default client;

