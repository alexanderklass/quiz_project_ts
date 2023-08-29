import QuestionCheckbox from "./QuestionCheckbox.tsx";
import {questionContext} from "../store/host.store.tsx";
import {useContext} from "react";

const QuestionMaker = () => {
    const {
        setInputQuestion,
        guessQuestionToggle,
        inputQuestion,
        setGuessAnswer,
        setAnswer_one,
        setAnswer_two,
        setAnswer_three,
        setAnswer_four,
    } = useContext(questionContext);

    return (
        <div className="flex flex-col mt-1 gap-2 justify-center items-center">
            <QuestionCheckbox/>
            <input
                type="text"
                className="rounded bg-purple-300 text-center h-[50px] w-[420px] focus:scale-105 transition outline-0"
                placeholder="QUESTION"
                value={inputQuestion}
                onChange={(e): void => {
                    setInputQuestion(e.target.value)
                }}
            />
            {guessQuestionToggle ? (
                <input
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
                        onChange={e => {
                            setAnswer_one(e.target.value)
                        }}
                        type="text"
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                    <input
                        onChange={e => {
                            setAnswer_two(e.target.value)
                        }}
                        type="text"
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <input
                        onChange={e => {
                            setAnswer_three(e.target.value)
                        }}
                        type="text"
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                    />
                    <input
                        onChange={e => {
                            setAnswer_four(e.target.value)
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