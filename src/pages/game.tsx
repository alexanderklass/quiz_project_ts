import QuestionList from "../components/QuestionList.tsx";

const Game = () => {

    return (
        <div className="justify-center items-center flex h-screen">
            <div className="bg-[#2A2F4F] w-[1400px] h-[800px] rounded-lg flex-col flex justify-center items-center">
                <QuestionList/>
            </div>
        </div>
    )
}

export default Game;