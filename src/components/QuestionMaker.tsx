import QuestionCheckbox from "./QuestionCheckbox.tsx";
import {useEffect, useRef} from "react";
import {questionStore} from "../store/questions.store.tsx";

const QuestionMaker = () => {
    const {
        guessQuestionToggle,
        question,
        setQuestion,
        guessAnswer,
        setGuessAnswer,
        answer_1,
        setAnswer_1,
        answer_2,
        setAnswer_2,
        answer_3,
        setAnswer_3,
        answer_4,
        setAnswer_4,
    } = questionStore();
    const questionRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        questionRef.current?.focus();
    }, [])

    return (
        <div className="flex flex-col mt-1 gap-2 justify-center items-center">
            <QuestionCheckbox/>
            <input
                ref={questionRef}
                name="question"
                type="text"
                className="rounded bg-purple-300 text-center h-[50px] w-[420px] focus:scale-105 transition outline-0"
                placeholder="QUESTION"
                autoComplete={"off"}
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
                    autoComplete={"off"}
                    className="rounded p-3 text-center w-[420px] focus:scale-105 transition outline-0"
                    placeholder="ANSWER_OPTION"
                />
            ) : <>
                <div className="flex items-center gap-2 justify-center">
                    <input type={"checkbox"}/>
                    <input
                        name={"answer_one"}
                        value={answer_1}
                        onChange={e => {
                            setAnswer_1(e.target.value)
                        }}
                        type="text"
                        autoComplete={"off"}
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                    <input type={"checkbox"}/>
                    <input
                        name={"answer_two"}
                        value={answer_2}
                        onChange={e => {
                            setAnswer_2(e.target.value)
                        }}
                        type="text"
                        autoComplete={"off"}
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <input type={"checkbox"}/>
                    <input
                        name={"answer_three"}
                        value={answer_3}
                        onChange={e => {
                            setAnswer_3(e.target.value)
                        }}
                        type="text"
                        autoComplete={"off"}
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                    <input type={"checkbox"}/>
                    <input
                        name={"answer_four"}
                        value={answer_4}
                        onChange={e => {
                            setAnswer_4(e.target.value)
                        }}
                        type="text"
                        autoComplete={"off"}
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                </div>
            </>}
        </div>
    );
};

export default QuestionMaker;