import {Link} from "react-router-dom";
import logo from "../assets/logo.png";

function Start() {
    return (
        <div className="justify-center items-center flex h-screen">
            <div className="bg-[#2A2F4F] w-[1400px] h-[800px] rounded-lg flex-col flex justify-center items-center">
                <img src={logo} className="mb-4" alt={"logo"}/>
                <input
                    type="text"
                    className="rounded-lg text-center  p-2 placeholder:text-center outline-0 focus:scale-105 transition"
                    placeholder="JOIN_LOBBY_CODE"
                />

                <Link to={"/"}>
                    <button
                        className="bg-[#917FB3] font-bold text-[#FDE2F3] w-[195px] p-1 m-2 rounded-lg hover:bg-[#E5BEEC] hover:text-black transition">
                        JOIN_LOBBY
                    </button>
                </Link>

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



