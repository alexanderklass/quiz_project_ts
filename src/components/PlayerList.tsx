import Player from "./Player";
import {playerStore} from "../store/player.store.tsx";

const PlayerList = () => {
    const {playerContainer} = playerStore();

    return (
        <div className={"flex mx-36 gap-2 flex-col justify-center items-center"}>
            {playerContainer.map((player, index: number) => {
                return (
                    <Player key={index}
                            name={player.playerName}
                            score={player.score}/>
                )
            })}
        </div>
    );
};

export default PlayerList;