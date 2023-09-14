import QuestionList from "../components/QuestionList.tsx";
import PlayerList from "../components/PlayerList.tsx";
import {useEffect, useState} from "react";
import io from "socket.io-client";

const Game = () => {
    const [user, setUser] = useState<string[]>([]);

    const setUserRender = (socketUser: string) => {
        setUser([...user, socketUser]);
    }

    useEffect(() => {
        const socket = io("http://localhost:3000");

        socket.on("connect", () => {
            console.log(`user ${socket.id} connected`);
            setUserRender(socket.id);
        })

        return () => {
            socket.disconnect();
        }
    }, []);

    return (
        <div className="justify-center items-center flex h-screen">
            <div className="bg-[#2A2F4F] w-[1400px] h-[800px] rounded-lg flex-row flex justify-between items-center">
                <div className={"flex flex-col text-white justify-center items-start"}>
                    {user.map((user: string, index: number) => {
                        return (
                            <p key={index}>user: {user}</p>
                        )
                    })}
                </div>
                <PlayerList/>
                <div className={"flex flex-col mr-64 justify-center items-center"}>
                    <QuestionList/>
                </div>
            </div>
        </div>
    )
}

export default Game;