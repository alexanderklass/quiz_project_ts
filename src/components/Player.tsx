import {useState} from "react";
import {questionStore} from "../store/global.store.tsx";
import {playerStore} from "../store/player.store.tsx";
import {BsFillPersonFill} from "react-icons/bs";

const Player = () => {
    const {questionContainer} = questionStore();

    const {playerContainer, setPlayerContainer, playerName, setPlayerName} = playerStore();
    const [playerScore, setPlayerScore] = useState<number>(0);

    const renderPlayers = () => {
        return playerContainer.map((player, index: number) => {
            return (
                <div key={index} className={"bg-purple-300 w-40 rounded-lg p-1 flex justify-around items-center "}>
                    <BsFillPersonFill className={"text-5xl"}/>
                    <p>{player.playerName} {player.score}</p>
                </div>
            )
        })
    };

    return (<>
        {renderPlayers()}
    </>);
};

export default Player;