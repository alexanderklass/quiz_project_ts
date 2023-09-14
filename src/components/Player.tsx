import {BsFillPersonFill} from "react-icons/bs";

interface IProps {
    name: string;
    score: number;
}

const Player = ({name, score}: IProps) => {
    return (<>
        <div className={"bg-purple-300 w-40 rounded-lg p-1 flex justify-around items-center "}>
            <BsFillPersonFill className={"text-5xl"}/>
            <p>{name} {score}</p>
        </div>
    </>);
};

export default Player;
