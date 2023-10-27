import Logo from "../assets//logo.png";
import MediaShow from "../components/MediaShow.tsx";
import CategoryList from "../components/CategoryList.tsx";
import QuestionMaker from "../components/QuestionMaker.tsx";
import {questionStore} from "../store/global.store.ts";
import {socketStore} from "../store/socket.store.ts";

const Host = () => {
    const {questionContainer,} = questionStore();
    const {lobbyCode} = socketStore();

    return (<div className="justify-center items-center flex flex-col h-screen">
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
                        name="lobbyCode"
                        type="text"
                        className="rounded text-center p-1 outline-0 w-[100px]"
                        placeholder="LOBBY_CODE"
                        readOnly
                        value={lobbyCode}
                    />
                    <button
                        className="bg-[#917FB3] font-bold text-[#FDE2F3] w-[100px] p-1 m-2 rounded hover:bg-[#E5BEEC] hover:text-black transition">
                        COPY
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <p className="text-white text-lg font-bold mr-3">
                            {questionContainer.length}/10 Questions
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>)
};

export default Host;