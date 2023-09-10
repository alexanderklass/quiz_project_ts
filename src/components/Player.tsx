import {useState} from "react";
import {questionStore} from "../store/global.store.tsx";

const Player = () => {
    const {questionContainer} = questionStore();
    const [players, setPlayers] = useState<object>([]);

    return (
        <div>
            PLAYER
        </div>
    );
};

export default Player;