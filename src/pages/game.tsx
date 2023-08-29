import {useContext} from "react";
import {questionContext} from "../store/host.store.tsx";
const Game = () => {
    const {questionContainer} = useContext(questionContext);
    return (
        <div>

        </div>
    );
};

export default Game;