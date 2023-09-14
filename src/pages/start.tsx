import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import {playerStore} from "../store/player.store.tsx";
import {questionStore} from "../store/global.store.tsx";
import {useNavigate} from "react-router-dom";

function Start() {
    const {questionContainer} = questionStore();
    const {setPlayerName, playerName, playerContainer, setPlayerContainer} = playerStore();
    const navigate = useNavigate();
    const addPlayer = () => {
        if (playerName == "" || playerContainer.length === 10 || questionContainer.length === 0) return;
        const newPlayer: any = {
            playerName: playerName,
            score: 0,
        }
        setPlayerContainer([...playerContainer, newPlayer]);
        navigate("/game");
    };

    return (
        <div className="justify-center items-center flex h-screen">
            <div className="bg-[#2A2F4F] w-[1400px] h-[800px] rounded-lg flex-col flex justify-center items-center">
                <img src={logo} className="mb-4" alt={"logo"}/>
                <input
                    type="text"
                    className="rounded-lg text-center mb-1 p-2 placeholder:text-center outline-0 focus:scale-105 transition"
                    placeholder="PLAYER_NAME"
                    onChange={e => setPlayerName(e.target.value)}
                />
                <input
                    type="text"
                    className="rounded-lg text-center p-2 placeholder:text-center outline-0 focus:scale-105 transition"
                    placeholder="JOIN_LOBBY_CODE"
                />
                <button
                    className="bg-[#917FB3] font-bold text-[#FDE2F3] w-[195px] p-1 m-2 rounded-lg hover:bg-[#E5BEEC] hover:text-black transition"
                    onClick={addPlayer}>
                    JOIN_LOBBY
                </button>

                <Link to={"/host"}>
                    <button
                        className="bg-[#917FB3] font-bold text-[#FDE2F3] p-1 rounded-lg w-[195px] hover:bg-[#E5BEEC] hover:text-black transition">
                        CREATE_LOBBY
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Start;



