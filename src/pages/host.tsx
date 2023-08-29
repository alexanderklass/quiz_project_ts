import Logo from "../assets//logo.png";
import {useState, useCallback} from "react";
import MediaShow from "../components/MediaShow.tsx";
import CategoryList from "../components/CategoryList.tsx";
import QuestionMaker from "../components/QuestionMaker.tsx";
import {questionContext} from "../store/host.store.tsx";

const Host = () => {
    const [questionContainer, setQuestionContainer] = useState<object[]>([]);
    const [guessQuestionToggle, setGuessQuestionToggle] = useState<boolean>(false);
    const [inputQuestion, setInputQuestion] = useState<string | number>();
    const [guessAnswer, setGuessAnswer] = useState<string | number>();
    const [answer_one, setAnswer_one] = useState<string | number>();
    const [answer_two, setAnswer_two] = useState<string | number>();
    const [answer_three, setAnswer_three] = useState<string | number>();
    const [answer_four, setAnswer_four] = useState<string | number>();
    const [image, setImage] = useState<string | null>();
    const [audio, setAudio] = useState<string | null>();

    const handleCreateQuestion = useCallback((): void => {
        let question_object: object;
        if (inputQuestion === "" || questionContainer.length === 10) return;
        if (guessQuestionToggle) {
            question_object = {
                question: inputQuestion,
                guessAnswer: guessAnswer
            }
        } else {
            question_object = {
                question: inputQuestion,
                answer_1: answer_one,
                answer_2: answer_two,
                answer_3: answer_three,
                answer_4: answer_four,
            }
        }
        setQuestionContainer(previousQuestions => [...previousQuestions, question_object]);
        setInputQuestion("");
    }, [inputQuestion, guessQuestionToggle, guessAnswer, answer_one, answer_two, answer_three, answer_four]);

    return <div className="justify-center items-center flex flex-col h-screen">
        <div className="relative bg-[#2A2F4F] rounded-lg">
            <div className="flex-row flex justify-center w-[1400px] h-[800px] items-center">
                <CategoryList/>
                <questionContext.Provider value={{
                    guessQuestionToggle,
                    inputQuestion,
                    audio,
                    image,
                    setGuessQuestionToggle,
                    setInputQuestion,
                    setQuestionContainer,
                    setGuessAnswer,
                    setAnswer_one,
                    setAnswer_two,
                    setAnswer_three,
                    setAnswer_four,
                    setAudio,
                    setImage,
                }}>
                    <section className="flex flex-col w-full justify-center items-center gap-2">
                        <MediaShow/>
                        <div className={"flex flex-row"}>
                            <QuestionMaker/>
                        </div>
                    </section>
                </questionContext.Provider>

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
                        <button onClick={handleCreateQuestion}
                                className="bg-[#917FB3] font-bold text-[#FDE2F3] p-2 rounded hover:bg-[#E5BEEC] hover:text-black transition">
                            CREATE_QUESTION
                        </button>
                        <button
                            className="bg-[#917FB3] font-bold text-[#FDE2F3] p-2 mx-2 rounded hover:bg-[#E5BEEC] hover:text-black transition">
                            START_GAME
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>;
};

export default Host;