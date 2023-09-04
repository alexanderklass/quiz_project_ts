import Logo from "../assets//logo.png";
import {Link} from "react-router-dom";
import MediaShow from "../components/MediaShow.tsx";
import CategoryList from "../components/CategoryList.tsx";
import QuestionMaker from "../components/QuestionMaker.tsx";
import {questionStore} from "../store/questions.store.tsx";

const Host = () => {
    const {
        questionContainer,
        guessQuestionToggle,
        question,
        answer_1,
        answer_2,
        answer_3,
        answer_4,
        guessAnswer,
        setQuestionContainer,
        setQuestion,
        setAnswer_1,
        setAnswer_2,
        setAnswer_3,
        setAnswer_4,
        setGuessAnswer,
    } = questionStore();

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

    return <div className="justify-center items-center flex flex-col h-screen">
        <div className="relative bg-[#2A2F4F] rounded-lg">
            <div className="flex-row flex justify-center w-[1400px] h-[800px] items-center">
                <CategoryList/>
                <section className="flex flex-col w-full justify-center items-center gap-2">
                    <MediaShow/>
                    <div className={"flex flex-row"}>
                        <QuestionMaker/>
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
        </div>
    </div>;
};

export default Host;