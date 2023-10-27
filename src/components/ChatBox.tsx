import {socketStore} from "../store/socket.store.ts";
import React, {useEffect, useRef, useState} from "react";
import socket from "../modules/socket.ts";
import {playerStore} from "../store/player.store.ts";

const ChatBox = () => {
    const {lobbyCode} = socketStore();
    const {playerName} = playerStore();
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<string[]>([]);
    const messageContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        socket.on("receiveMessage", (newMessage: any) => {
            setMessages(prevMessage => [...prevMessage, newMessage]);
        });
        scrollToBottom();
        return () => {
            socket.off();
        }
    }, [messages]);

    const scrollToBottom = () => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const sendMessage = () => {
        if (message.trim() !== "") {
            const newMessage: any = {room: lobbyCode, playerName: playerName, message: message};
            socket.emit("sendMessage", newMessage);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setMessage("");
        }
    };

    const handleKeyPressMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    }

    return (
        <>
            <p className={"text-white"}>Room: {lobbyCode}</p>
            <div className={"bg-white mb-1 rounded-lg p-2 overflow-y-auto no-scrollbar w-96 h-40"}>
                {messages.map((msg: any, index: number) => {
                    return (
                        <p className={"bg-gray-300 break-all max-w-max m-1 text-xs rounded-lg p-1"}
                           key={index}>
                            <span className={"font-bold"}>{msg.playerName}:</span> {msg.message}
                        </p>
                    )
                })}
                <div ref={messageContainerRef}/>
            </div>
            <input onKeyDown={handleKeyPressMessage}
                   className={"rounded-lg w-96 p-2 outline-0 h-auto"}
                   value={message}
                   type="text"
                   onChange={e => setMessage(e.target.value)}/>
        </>
    );
};

export default ChatBox;