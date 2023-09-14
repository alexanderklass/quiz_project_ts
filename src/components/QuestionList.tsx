import {questionStore} from "../store/global.store.tsx";
import {playerStore} from "../store/player.store.tsx";
import {useState} from "react";

const QuestionList = () => {
    const {questionContainer} = questionStore();
    const {playerContainer, setPlayerContainer} = playerStore();
    const [containerIndex, setContainerIndex] = useState<number>(0);
    const handleNextQuestion = (): void => {
        if (containerIndex >= questionContainer.length - 1) {
            setContainerIndex(questionContainer.length - 1)
        } else {
            setContainerIndex(containerIndex + 1);
        }
    };

    const handlePrevQuestion = (): void => {
        if (containerIndex <= 0) {
            setContainerIndex(0);
        } else {
            setContainerIndex(containerIndex - 1);
        }
    };

    const checkCorrectAnswer = (selectedAnswer: any): void => {
        const updatedPlayerContainer = [...playerContainer];
        const player = updatedPlayerContainer[1];
        if (selectedAnswer.correct) {
            player.score = player.score + 5;

        } else {
            player.score = player.score - 5;
        }
        updatedPlayerContainer[1] = player;
        setPlayerContainer(updatedPlayerContainer);
    };

    const renderQuestions = () => {
        const question: any = questionContainer[containerIndex];
        if (!question) return null;
        return (<>
            <div
                className="border-2 relative flex justify-center items-center border-dashed rounded mb-2 w-[500px] h-[300px] bg-[#917FB3]">
                IMAGE/SOUND
            </div>
            <p className={"p-1 bg-white rounded"}>{containerIndex + 1}/{questionContainer.length}</p>
            <div className={"m-1 p-1 rounded flex flex-col gap-2 justify-center items-start"}>
                {!question.guessQuestionToggled ?
                    <>
                        <div className={"flex justify-center items-center"}>
                            <p className={"bg-purple-300 font-bold text-center rounded p-2 w-[408px]"}>
                                {question.question}
                            </p>
                        </div>
                        <div className={"flex flex-row justify-center items-center gap-2"}>
                            <p onClick={() => checkCorrectAnswer(question.answer_1)}
                               className={"bg-white rounded p-2 text-center w-[200px] cursor-pointer hover:bg-green-500 transition "}>
                                {question.answer_1.answer} {question.answer_1.correct.toString()}
                            </p>
                            <p onClick={() => checkCorrectAnswer(question.answer_2)}
                               className={"bg-white rounded p-2 text-center w-[200px] cursor-pointer hover:bg-green-500 transition "}>
                                {question.answer_2.answer} {question.answer_2.correct.toString()}
                            </p>
                        </div>
                        <div className={"flex flex-row justify-center items-center gap-2"}>
                            <p onClick={() => checkCorrectAnswer(question.answer_3)}
                               className={"cursor-pointer hover:bg-green-500 transition bg-white rounded p-2 text-center w-[200px]"}>
                                {question.answer_3.answer} {question.answer_3.correct.toString()}
                            </p>
                            <p onClick={() => checkCorrectAnswer(question.answer_4)}
                               className={"bg-white rounded p-2 text-center w-[200px] cursor-pointer hover:bg-green-500 transition "}>
                                {question.answer_4.answer} {question.answer_4.correct.toString()}
                            </p>
                        </div>
                    </> :
                    <>
                        <div className={"flex justify-center items-center"}>
                            <p className={"bg-purple-300 font-bold text-center rounded p-2 w-[408px]"}>
                                {question.question}
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
        </>)
    };

    return (<>
        {renderQuestions()}
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