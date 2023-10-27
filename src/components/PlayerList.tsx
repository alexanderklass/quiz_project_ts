import Player from "./Player";
import {playerStore} from "../store/player.store.ts";

const PlayerList = () => {
    const {players} = playerStore();
    return (
        <div className={"flex gap-2 flex-col justify-center items-center"}>
            <p className={"font-bold text-white"}>{players.length}/10</p>
            {players.map((player, index: number) => {
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