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

    const [correctAnswerToggle, setCorrectAnswerToggle] = useState<boolean>(false);


    const resetValues = () => {
        setQuestionValue("");
        setGuessAnswerValue("");
        setAnswer1Value("");
        setAnswer2Value("");
        setAnswer3Value("");
        setAnswer4Value("");
    }
    const createQuestion = (): void => {
        if (questionContainer.length === 10) return;
        const newQuestion: any = {
            question: questionValue,
            guessQuestionToggled: guessQuestionToggle,
            guessAnswer: guessAnswerValue,
            answer_1: {
                answer: answer1Value,
                correct: correctAnswerToggle,
            },
            answer_2: {
                answer: answer2Value,
                correct: false
            },
            answer_3: {
                answer: answer3Value,
                correct: false
            },
            answer_4: {
                answer: answer4Value,
                correct: false
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
                    <input onChange={onChangeGuessQuestion} className={"w-6 h-6 mr-1"} type={"checkbox"}/>
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
                    <input onChange={(event) => {
                        const newValue = event.target.checked;
                        setCorrectAnswerToggle(newValue);
                    }} checked={correctAnswerToggle} type={"checkbox"}/>
                    <input
                        name={"answer_1"}
                        type="text"
                        autoComplete={"off"}
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                        value={answer1Value}
                        onChange={e => {
                            setAnswer1Value(e.target.value)
                        }}
                    />
                    <input type={"checkbox"}/>
                    <input
                        name={"answer_2"}
                        type="text"
                        autoComplete={"off"}
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                        value={answer2Value}
                        onChange={e => {
                            setAnswer2Value(e.target.value)
                        }}
                    />
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <input type={"checkbox"}/>
                    <input
                        name={"answer_3"}
                        type="text"
                        autoComplete={"off"}
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                        value={answer3Value}
                        onChange={e => {
                            setAnswer3Value(e.target.value)
                        }}
                    />
                    <input type={"checkbox"}/>
                    <input
                        name={"answer_4"}
                        type="text"
                        autoComplete={"off"}
                        className="rounded p-3 text-center focus:scale-105 transition outline-0"
                        placeholder="ANSWER_OPTION"
                        value={answer4Value}
                        onChange={e => {
                            setAnswer4Value(e.target.value)
                        }}
                    />
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