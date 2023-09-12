import {useState} from "react";
import {questionStore} from "../store/global.store.tsx";
import {Link} from "react-router-dom";

const QuestionMaker = () => {
    const {
        guessQuestionToggle,
        setQuestionContainer,
        questionContainer,
        setGuessQuestionToggle,

    } = questionStore();
    const [questionValue, setQuestionValue] = useState<string | number>();
    const [guessAnswerValue, setGuessAnswerValue] = useState<string | number>();

    const [answer1Value, setAnswer1Value] = useState<string | number>();
    const [answer2Value, setAnswer2Value] = useState<string | number>();
    const [answer3Value, setAnswer3Value] = useState<string | number>();
    const [answer4Value, setAnswer4Value] = useState<string | number>();

    const [correctAnswer1Toggle, setCorrectAnswer1Toggle] = useState<boolean>(false);
    const [correctAnswer2Toggle, setCorrectAnswer2Toggle] = useState<boolean>(false);
    const [correctAnswer3Toggle, setCorrectAnswer3Toggle] = useState<boolean>(false);
    const [correctAnswer4Toggle, setCorrectAnswer4Toggle] = useState<boolean>(false);


    const resetValues = () => {
        setQuestionValue("");
        setGuessAnswerValue("");
        setAnswer1Value("");
        setAnswer2Value("");
        setAnswer3Value("");
        setAnswer4Value("");
        setCorrectAnswer1Toggle(false);
        setCorrectAnswer2Toggle(false);
        setCorrectAnswer3Toggle(false);
        setCorrectAnswer4Toggle(false);
    }
    const createQuestion = (): void => {
        if (questionContainer.length === 10) return;
        const newQuestion: any = {
            question: questionValue,
            guessQuestionToggled: guessQuestionToggle,
            guessAnswer: guessAnswerValue,
            answer_1: {
                answer: answer1Value,
                correct: correctAnswer1Toggle,
            },
            answer_2: {
                answer: answer2Value,
                correct: correctAnswer2Toggle
            },
            answer_3: {
                answer: answer3Value,
                correct: correctAnswer3Toggle
            },
            answer_4: {
                answer: answer4Value,
                correct: correctAnswer4Toggle
            }
        }
        setQuestionContainer([...questionContainer, newQuestion]);
        console.log(questionContainer);
        resetValues();
    };

    const onChangeGuessQuestion = (): void => {
        setGuessQuestionToggle(!guessQuestionToggle);
    }

    return (
        <div className="flex flex-col mt-1 gap-2 justify-center items-center">
            <div className={"flex flex-row gap-1"}>
                <label className={"text-white flex justify-center items-center"}>
                    <input onChange={onChangeGuessQuestion}
                           className={"w-6 h-6 mr-1"} type={"checkbox"}/>
                    Guess Question
                </label>
            </div>
            <input
                name="question"
                type="text"
                className="rounded placeholder:text-black bg-purple-300 text-center h-[50px] w-[420px] focus:scale-105 transition outline-0"
                placeholder="QUESTION..."
                autoComplete={"off"}
                value={questionValue}
                onChange={e => {
                    setQuestionValue(e.target.value)
                }}
            />
            {guessQuestionToggle ? (
                <input
                    name={"guessAnswer"}
                    type="text"
                    autoComplete={"off"}
                    className="rounded p-3 text-center w-[420px] focus:scale-105 transition outline-0"
                    placeholder="ANSWER_OPTION"
                    value={guessAnswerValue}
                    onChange={e => {
                        setGuessAnswerValue(e.target.value)
                    }}
                />
            ) : <>
                <div className="flex items-center gap-2 justify-center">
                    <div className={"relative"}>
                        <input onChange={() => setCorrectAnswer1Toggle(!correctAnswer1Toggle)}
                               checked={correctAnswer1Toggle}
                               type={"checkbox"}
                               className={"rounded-full absolute top-4 w-5 h-5"}/>
                        <input
                            name={"answer_1"}
                            type="text"
                            autoComplete={"off"}
                            className="rounded p-3 text-center outline-0"
                            placeholder="ANSWER_OPTION"
                            value={answer1Value}
                            onChange={e => {
                                setAnswer1Value(e.target.value)
                            }}
                        />
                    </div>

                    <div className={"relative"}>
                        <input onChange={() => setCorrectAnswer2Toggle(!correctAnswer2Toggle)}
                               checked={correctAnswer2Toggle}
                               type={"checkbox"}
                               className={"absolute rounded-full top-4 w-5 h-5"}/>
                        <input
                            name={"answer_2"}
                            type="text"
                            autoComplete={"off"}
                            className="rounded p-3 text-center outline-0"
                            placeholder="ANSWER_OPTION"
                            value={answer2Value}
                            onChange={e => {
                                setAnswer2Value(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <div className={"relative"}>
                        <input onChange={() => setCorrectAnswer3Toggle(!correctAnswer3Toggle)}
                               checked={correctAnswer3Toggle}
                               type={"checkbox"}
                               className={"absolute rounded-full top-4 w-5 h-5"}/>
                        <input
                            name={"answer_3"}
                            type="text"
                            autoComplete={"off"}
                            className="rounded p-3 text-center outline-0 "
                            placeholder="ANSWER_OPTION"
                            value={answer3Value}
                            onChange={e => {
                                setAnswer3Value(e.target.value)
                            }}
                        />
                    </div>

                    <div className={"relative"}>
                        <input onChange={() => setCorrectAnswer4Toggle(!correctAnswer4Toggle)}
                               checked={correctAnswer4Toggle}
                               type={"checkbox"}
                               className={"absolute rounded-full top-4 w-5 h-5"}/>
                        <input
                            name={"answer_4"}
                            type="text"
                            autoComplete={"off"}
                            className="rounded p-3 text-center outline-0"
                            placeholder="ANSWER_OPTION"
                            value={answer4Value}
                            onChange={e => {
                                setAnswer4Value(e.target.value)
                            }}
                        />
                    </div>
                </div>
            </>}
            <div className="m-2">
                <button
                    onClick={createQuestion}
                    className="bg-[#917FB3] font-bold text-[#FDE2F3] p-2 rounded hover:bg-[#E5BEEC] hover:text-black transition">
                    CREATE_QUESTION
                </button>
                <Link to={"/game"}>
                    <button
                        className="bg-[#917FB3] font-bold text-[#FDE2F3] p-2 mx-2 rounded hover:bg-[#E5BEEC] hover:text-black transition">
                        START_GAME
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default QuestionMaker;