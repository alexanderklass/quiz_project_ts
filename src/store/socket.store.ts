import {create} from "zustand";

export interface ISocket {
    token: string;
    setToken: (socket: string) => void;
    lobbyCode: string;
    setLobbyCode: (socket: string) => void;
}

export const socketStore = create<ISocket>((set) => ({
    token: "",
    lobbyCode: "",
    setToken: (token: string) => set({token: token}),
    setLobbyCode: (lobbyCode: string) => set({lobbyCode: lobbyCode}),
}))