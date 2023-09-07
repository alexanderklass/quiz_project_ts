import {questionStore} from "../store/questions.store.tsx";
import {useState} from "react";

const QuestionList = () => {
    const {questionContainer, setGuessAnswer} = questionStore();
    const [containerIndex, setContainerIndex] = useState<number>(0);
    const handleNextQuestion = (): void => {
        if (containerIndex >= questionContainer.length - 1) {
            setContainerIndex(questionContainer.length - 1)
        } else {
            setContainerIndex(containerIndex + 1);
        }
    }

    const handlePrevQuestion = (): void => {
        if (containerIndex <= 0) {
            setContainerIndex(0);
        } else {
            setContainerIndex(containerIndex - 1);
        }
    }

    const renderQuestions = () => {
        const question: any = questionContainer[containerIndex];
        if (!question) return null;
        if (!question.guessQuestionToggled) {
            return (<>
                <div
                    className="border-2 relative flex justify-center items-center border-dashed rounded mb-2 w-[500px] h-[300px] bg-[#917FB3]">
                    IMAGE/SOUND
                </div>
                <p className={"p-1 bg-white rounded"}>{containerIndex + 1}/{questionContainer.length}</p>
                <div className={"m-1 p-1 rounded flex flex-col gap-2 justify-center items-start"}>
                    <div className={"flex justify-center items-center"}>
                        <p className={"bg-purple-300 font-bold text-center rounded p-2 w-[408px]"}>
                            {question.question}
                        </p>
                    </div>
                    <div className={"flex flex-row justify-center items-center gap-2"}>
                        <p className={"bg-white rounded p-2 text-center w-[200px] cursor-pointer hover:bg-green-500 transition "}>
                            {question.answer_1.answer}
                        </p>
                        <p className={"bg-white rounded p-2 text-center w-[200px] cursor-pointer hover:bg-green-500 transition "}>
                            {question.answer_2.answer}
                        </p>
                    </div>
                    <div className={"flex flex-row justify-center items-center gap-2"}>
                        <p className={"cursor-pointer hover:bg-green-500 transition bg-white rounded p-2 text-center w-[200px]"}>
                            {question.answer_3.answer}
                        </p>
                        <p className={"bg-white rounded p-2 text-center w-[200px] cursor-pointer hover:bg-green-500 transition "}>
                            {question.answer_4.answer}
                        </p>
                    </div>
                </div>
            </>)
        } else {
            return (<>
                <div
                    className="border-2 relative flex justify-center items-center border-dashed rounded mb-2 w-[500px] h-[300px] bg-[#917FB3]">
                    IMAGE/SOUND
                </div>
                <p className={"p-1 bg-white rounded"}>{containerIndex + 1}/{questionContainer.length}</p>
                <div className={"m-1 p-1 rounded flex flex-col gap-2 justify-center items-start"}>
                    <div className={"flex justify-center items-center"}>
                        <p className={"bg-purple-300 font-bold text-center rounded p-2 w-[408px]"}>
                            {question.question}
                        </p>
                    </div>
                    <div className={"flex flex-row justify-center items-center gap-2"}>
                        <input className={"rounded w-[408px] p-2 text-center outline-0"}
                               placeholder={"GUESS_INPUT"}
                               type={"text"}
                               onChange={e => setGuessAnswer(e.target.value)}/>
                    </div>
                </div>
            </>)
        }
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