import {questionStore} from "../store/questions.store.tsx";
import {useState} from "react";

const QuestionList = () => {
    const {questionContainer} = questionStore();
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
        const firstQuestion = questionContainer[containerIndex];
        if (!firstQuestion) return null;
        return (<>
            <div className={"m-1 p-1 bg-white rounded flex flex-col justify-center items-start"}>
                <p>Question: {firstQuestion.question}</p>
                <p>Answer_1: {firstQuestion.answer_1}</p>
                <p>Answer_2: {firstQuestion.answer_2}</p>
                <p>Answer_3: {firstQuestion.answer_3}</p>
                <p>Answer_4: {firstQuestion.answer_4}</p>
            </div>
            <div className={"flex justify-center items-center gap-1"}>
                <button onClick={handlePrevQuestion} className={"bg-white p-1 rounded w-20"}>
                    Prev
                </button>
                <button onClick={handleNextQuestion} className={"bg-white p-1 rounded w-20"}>
                    Next
                </button>
            </div>
        </>)
    };
    return (<>
        {renderQuestions()}
    </>);
};

export default QuestionList;