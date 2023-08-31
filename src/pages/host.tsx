import Logo from "../assets//logo.png";
import {useState} from "react";
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
                                       guessQuestionToggle={guessQuestionToggle}/>
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