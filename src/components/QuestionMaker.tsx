import QuestionCheckbox from "./QuestionCheckbox.tsx";
import React from "react";


interface IProps {
    setGuessQuestionToggle: React.Dispatch<React.SetStateAction<boolean>>
    guessQuestionToggle: boolean;
    setQuestion: React.Dispatch<React.SetStateAction<string | number>>;
    setGuessAnswer: React.Dispatch<React.SetStateAction<string | number>>
    setAnswer_1: React.Dispatch<React.SetStateAction<string | number>>
    setAnswer_2: React.Dispatch<React.SetStateAction<string | number>>
    setAnswer_3: React.Dispatch<React.SetStateAction<string | number>>
    setAnswer_4: React.Dispatch<React.SetStateAction<string | number>>
    answer_1: string | number;
    answer_2: string | number;
    answer_3: string | number;
    answer_4: string | number;
    guessAnswer: string | number;
    question: string | number;
}

const QuestionMaker: React.FC<IProps> = ({
                                             setGuessQuestionToggle,
                                             guessQuestionToggle,
                                             setQuestion,
                                             setGuessAnswer,
                                             guessAnswer,
                                             setAnswer_1,
                                             answer_1,
                                             setAnswer_2,
                                             answer_2,
                                             setAnswer_3,
                                             answer_3,
                                             setAnswer_4,
                                             answer_4,
                                             question,
                                         }) => {

    return (
        <div className="flex flex-col mt-1 gap-2 justify-center items-center">
            <QuestionCheckbox guessQuestionToggle={guessQuestionToggle}
                              setGuessQuestionToggle={setGuessQuestionToggle}/>
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