import QuestionCheckbox from "./QuestionCheckbox.tsx";
import React, {useState} from "react";
import {IState} from "../pages/host.tsx";


interface IProps {
    setQuestionContainer: React.Dispatch<React.SetStateAction<IState["questions"]>>;
    questionContainer: IState["questions"];
    setGuessQuestionToggle: React.Dispatch<React.SetStateAction<boolean>>
    guessQuestionToggle: boolean;
}

const QuestionMaker: React.FC<IProps> = ({
                                             setGuessQuestionToggle,
                                             guessQuestionToggle,
                                             setQuestionContainer,
                                             questionContainer
                                         }) => {
    const [question, setQuestion] = useState<string | number>("");
    const [answer_1, setAnswer_1] = useState<string | number>("");
    const [answer_2, setAnswer_2] = useState<string | number>("");
    const [answer_3, setAnswer_3] = useState<string | number>("");
    const [answer_4, setAnswer_4] = useState<string | number>("");
    const [guessAnswer, setGuessAnswer] = useState<string | number>("");

    const resetInputs = () => {
        setQuestion("");
        setGuessAnswer("");
        setAnswer_1("");
        setAnswer_2("");
        setAnswer_3("");
        setAnswer_4("");
    }

    const createQuestion = (): void => {
        let object: object;
        if (question === "" || questionContainer.length === 10) return;
        if (guessQuestionToggle) {
            object = {
                question: question,
                guessAnswer: guessAnswer,
            }
        } else {
            object = {
                question: question,
                answer_1: answer_1,
                answer_2: answer_2,
                answer_3: answer_3,
                answer_4: answer_4
            }
        }
        setQuestionContainer([...questionContainer, object]);
        resetInputs();
    }

    const renderQuestions = () => {
        return questionContainer.map((question, index) => {
            if (guessQuestionToggle) {
                return (
                    <div className={"bg-white rounded"} key={index}>
                        <p>Question: {question.question}</p>
                        <p>GuessAnswer: {question.guessAnswer}</p>
                    </div>
                )
            } else {
                return (
                    <div className={"bg-white rounded flex flex-col justify-center items-start"} key={index}>
                        <p>Question: {question.question}</p>
                        <p>Answer: {question.answer_1}</p>
                        <p>Answer: {question.answer_2}</p>
                        <p>Answer: {question.answer_3}</p>
                        <p>Answer: {question.answer_4}</p>
                    </div>
                )
            }
        })
    }
    return (
        <div className="flex flex-col mt-1 gap-2 justify-center items-center">
            <QuestionCheckbox guessQuestionToggle={guessQuestionToggle}
                              setGuessQuestionToggle={setGuessQuestionToggle}/>
            <button onClick={createQuestion}>CREATE</button>
            {renderQuestions()}
            <input
                name="question"
                type="text"
                className="rounded bg-purple-300 text-center h-[50px] w-[420px] focus:scale-105 transition outline-0"
                placeholder="QUESTION"
                value={question}
                onChange={e => {
                    setQuestion(e.target.value)
                }}
            />
            {guessQuestionToggle ? (
                <input
                    name={"guessAnswer"}
                    value={guessAnswer}
                    onChange={e => {
                        setGuessAnswer(e.target.value)
                    }}
                    type="text"
                    className="rounded p-3 text-center w-[420px] focus:scale-105 transition outline-0"
                    placeholder="ANSWER_OPTION"
                />
            ) : <>
                <div className="flex items-center gap-2 justify-center">
                    <input
                        name={"answer_one"}
                        value={answer_1}
                        onChange={e => {
                            setAnswer_1(e.target.value)
                        }}
                        type="text"
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                    <input
                        name={"answer_two"}
                        value={answer_2}
                        onChange={e => {
                            setAnswer_2(e.target.value)
                        }}
                        type="text"
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <input
                        name={"answer_three"}
                        value={answer_3}
                        onChange={e => {
                            setAnswer_3(e.target.value)
                        }}
                        type="text"
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                    <input
                        name={"answer_four"}
                        value={answer_4}
                        onChange={e => {
                            setAnswer_4(e.target.value)
                        }}
                        type="text"
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                </div>
            </>}
        </div>
    );
};

export default QuestionMaker;