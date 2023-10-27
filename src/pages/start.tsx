import logo from "../assets/logo.png";
import {useNavigate} from "react-router-dom";
import {playerStore, IPlayerContainer} from "../store/player.store.ts";
import {socketStore} from "../store/socket.store.ts";
import {useEffect} from "react";
import {v4} from 'uuid';
import socket from "../modules/socket.ts";

function Start() {
    const {setLobbyCode, lobbyCode} = socketStore();
    const {setPlayerName, playerName, addPlayer, players} = playerStore();
    const navigate = useNavigate();

    useEffect(() => {
        socket.on("connect", (): void => {
            console.log("connected to server");
        });

        socket.on("receivePlayer", (newPlayer: IPlayerContainer): void => {
            if (newPlayer) {
                addPlayer(newPlayer);
                console.log("received");
            } else {
                console.log("not received");
            }
        });
    })

    const joinLobby = (): void => {
        if (playerName === "" || players.length === 10) return;
        const newPlayer = {playerName: playerName, score: 0, room: lobbyCode};
        socket.emit("addPlayer", newPlayer);
        addPlayer(newPlayer);
        navigate(`/game/${lobbyCode}`);
    };

    const createLobby = (): void => {
        if (playerName === "") return;
        const generatedCode = v4().slice(0, 5).toUpperCase();
        const newPlayer = {playerName: playerName, score: 0, room: generatedCode};
        socket.emit("addPlayer", newPlayer);
        addPlayer(newPlayer);
        setLobbyCode(generatedCode);
        navigate(`/host/${generatedCode}`);
    };

    return (
        <div className="justify-center items-center flex h-screen">
            <div className="bg-[#2A2F4F] w-[1400px] h-[800px] rounded-lg flex-col flex justify-center items-center">
                <img src={logo} className="mb-4" alt={"logo"}/>
                <input
                    type="text"
                    className="rounded-lg text-center mb-1 p-2 placeholder:text-center outline-0 focus:scale-105 transition"
                    placeholder="PLAYER_NAME"
                    onChange={e => setPlayerName(e.target.value)}
                />
                <input
                    type="text"
                    onChange={e => setLobbyCode(e.target.value)}
                    className="rounded-lg text-center p-2 placeholder:text-center outline-0 focus:scale-105 transition"
                    placeholder="JOIN_LOBBY_CODE"
                />
                <button
                    className="bg-[#917FB3] font-bold text-[#FDE2F3] w-[195px] p-1 m-2 rounded-lg hover:bg-[#E5BEEC] hover:text-black transition"
                    onClick={joinLobby}>
                    JOIN_LOBBY
                </button>

                <button
                    onClick={createLobby}
                    className="bg-[#917FB3] font-bold text-[#FDE2F3] p-1 rounded-lg w-[195px] hover:bg-[#E5BEEC] hover:text-black transition">
                    CREATE_LOBBY
                </button>
            </div>
        </div>
    );
}

export default Start;



