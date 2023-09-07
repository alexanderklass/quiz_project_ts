import QuestionList from "../components/QuestionList.tsx";
import PlayerList from "../components/PlayerList.tsx";

const Game = () => {

    return (
        <div className="justify-center items-center flex h-screen">
            <div className="bg-[#2A2F4F] w-[1400px] h-[800px] rounded-lg flex-row flex justify-between items-center">
                <PlayerList/>
                <div className={"flex flex-col mr-64 justify-center items-center"}>
                    <QuestionList/>
                </div>
            </div>
        </div>
    )
}

export default Game;