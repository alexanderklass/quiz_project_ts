import Logo from "../assets//logo.png";
import {useState} from "react";
import {Link} from "react-router-dom";
import MediaShow from "../components/MediaShow.tsx";
import CategoryList from "../components/CategoryList.tsx";
import QuestionMaker from "../components/QuestionMaker.tsx";

export interface IState {
    questions: {
        question: string;
        guessAnswer?: string | undefined;
        answer_1: string;
        answer_2: string;
        answer_3: string;
        answer_4: string;
    }[];
}

const Host = () => {
    const [questionContainer, setQuestionContainer] = useState<IState["questions"]>([]);
    const [guessQuestionToggle, setGuessQuestionToggle] = useState<boolean>(false);
    const [image, setImage] = useState<string | null>();
    const [audio, setAudio] = useState<string | null>();
    const [question, setQuestion] = useState<string | number>("");
    const [answer_1, setAnswer_1] = useState<string | number>("");
    const [answer_2, setAnswer_2] = useState<string | number>("");
    const [answer_3, setAnswer_3] = useState<string | number>("");
    const [answer_4, setAnswer_4] = useState<string | number>("");
    const [guessAnswer, setGuessAnswer] = useState<string | number>("");

    const resetInputs = (): void => {
        setQuestion("");
        setGuessAnswer("");
        setAnswer_1("");
        setAnswer_2("");
        setAnswer_3("");
        setAnswer_4("");
    };

    const createQuestion = (): void => {
        let object;
        if (question === "" || questionContainer.length === 10) return;
        if (guessQuestionToggle) {
            object = {
                question: question,
                guessAnswer: guessAnswer,
            };
        } else {
            object = {
                question: question,
                answer_1: answer_1,
                answer_2: answer_2,
                answer_3: answer_3,
                answer_4: answer_4
            };
        }
        setQuestionContainer([...questionContainer, object]);
        resetInputs();
    };

    const renderQuestions = () => {
        return questionContainer.map((question, index) => {
            return (
                <div className={"m-1 p-1 bg-white rounded flex flex-col justify-center items-start"} key={index}>
                    <p>Question: {question.question}</p>
                    <p>Answer_1: {question.answer_1}</p>
                    <p>Answer_2: {question.answer_2}</p>
                    <p>Answer_3: {question.answer_3}</p>
                    <p>Answer_4: {question.answer_4}</p>
                </div>
            )
        })
    };

    return <div className="justify-center items-center flex flex-col h-screen">
        <div className="relative bg-[#2A2F4F] rounded-lg">
            <div className="flex-row flex justify-center w-[1400px] h-[800px] items-center">
                <CategoryList/>
                <section className="flex flex-col w-full justify-center items-center gap-2">
                    <MediaShow setImage={setImage} image={image} setAudio={setAudio} audio={audio}/>
                    <div className={"flex flex-row"}>
                        <QuestionMaker questionContainer={questionContainer}
                                       setQuestionContainer={setQuestionContainer}
                                       setGuessQuestionToggle={setGuessQuestionToggle}
                                       guessQuestionToggle={guessQuestionToggle}
                                       question={question}
                                       setQuestion={setQuestion}
                                       setAnswer_1={setAnswer_1}
                                       setAnswer_2={setAnswer_2}
                                       setAnswer_3={setAnswer_3}
                                       setAnswer_4={setAnswer_4}
                                       guessAnswer={guessAnswer}
                                       setGuessAnswer={setGuessAnswer}
                                       answer_1={answer_1}
                                       answer_2={answer_2}
                                       answer_3={answer_3}
                                       answer_4={answer_4}/>
                    </div>
                </section>

                <div className="absolute top-5 right-10 w-[100px] h-[100px]">
                    <img className="object-cover" src={Logo} alt={"logo"}/>
                </div>
            </div>
            <section className="flex flex-row justify-between items-center">
                <div className="flex flex-col items-center justify-center">
                    <input
                        type="text"
                        className="rounded text-center p-1 outline-0 w-[100px]"
                        placeholder="LOBBY_CODE"
                        readOnly
                    />
                    <button
                        className="bg-[#917FB3] font-bold text-[#FDE2F3] w-[100px] p-1 m-2 rounded hover:bg-[#E5BEEC] hover:text-black transition">
                        COPY
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <p className="text-white text-lg font-bold">
                            {questionContainer.length}/10 Questions
                        </p>
                    </div>
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
            </section>
            {renderQuestions()}
        </div>
    </div>;
};

export default Host;