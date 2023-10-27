import {questionStore} from "../store/global.store.ts";
import {playerStore} from "../store/player.store.ts";
import {useState} from "react";

const QuestionList = () => {
    const {questionContainer} = questionStore();
    const {players, playerName, updatePlayerScore} = playerStore();
    const [containerIndex, setContainerIndex] = useState<number>(0);
    const [readOnly, setReadOnly] = useState(false);
    const handleNextQuestion = (): void => {
        containerIndex >= questionContainer.length - 1 ? setContainerIndex(questionContainer.length - 1) : setContainerIndex(containerIndex + 1)
        setReadOnly(false);
    };

    const handlePrevQuestion = (): void => {
        containerIndex <= 0 ? setContainerIndex(0) : setContainerIndex(containerIndex - 1);
        setReadOnly(false);
    };

    const checkCorrectAnswer = (selectedAnswer: any): void => {
        const mappedPlayerArray = players.map((player) => {
            if (player.playerName === playerName && selectedAnswer) {
                return player.score = player.score += 5;
            } else if (player.playerName === playerName) {
                return player.score = player.score -= 5;
            }
        })
        updatePlayerScore(mappedPlayerArray);
        setReadOnly(true);
    };

    if (!questionContainer[containerIndex]) return null;
    return (<>
        <div
            className="border-2 relative flex justify-center items-center border-dashed rounded mb-2 w-[500px] h-[300px] bg-[#917FB3]">
            IMAGE/SOUND
        </div>
        <p className={"p-1 bg-white rounded"}>{containerIndex + 1}/{questionContainer.length}</p>
        <div className={"m-1 p-1 rounded flex flex-col gap-2 justify-center items-start"}>
            {!questionContainer[containerIndex].guessQuestionToggled ?
                <>
                    <div className={"flex justify-center items-center"}>
                        <p className={"bg-purple-300 font-bold text-center rounded p-2 w-[408px]"}>
                            {questionContainer[containerIndex].question}
                        </p>
                    </div>
                    <div className={"grid grid-cols-2 gap-2"}>
                        {questionContainer[containerIndex].answers.map((answers: any, index: number) => {
                            return (
                                <button
                                    className={" disabled:opacity-25 bg-white rounded p-2 text-center w-[200px] cursor-pointer hover:bg-green-500 transition"}
                                    key={index}
                                    disabled={readOnly}
                                    onClick={() => checkCorrectAnswer(answers.correct)}>d
                                    {answers.answer} {answers.correct.toString()}
                                </button>
                            )
                        })}
                    </div>
                </> :
                <>
                    <div className={"flex justify-center items-center"}>
                        <p className={"bg-purple-300 font-bold text-center rounded p-2 w-[408px]"}>
                            {questionContainer[containerIndex].question}
                        </p>
                    </div>
                    <div className={"flex flex-col justify-center items-center gap-2"}>
                        <input className={"rounded w-[408px] p-2 text-center outline-0"}
                               placeholder={"GUESS_INPUT"}
                               name="guessAnswer"
                               type={"text"}/>
                        <button
                            className={"bg-green-500 hover:bg-white hover:text-black transition hover:scale-x-105 w-[265px] rounded p-1"}>SUBMIT
                        </button>
                    </div>
                </>}
        </div>
        <div className={"flex justify-center items-center gap-2 mt-4"}>
            <button onClick={handlePrevQuestion}
                    className={"bg-black text-white hover:bg-white hover:text-black transition p-1 rounded w-32"}>
                Prev
            </button>
            <button onClick={handleNextQuestion}
                    className={"bg-black text-white hover:bg-white hover:text-black transition p-1 rounded w-32"}>
                Next
            </button>
        </div>
    </>);
};

export default QuestionList;