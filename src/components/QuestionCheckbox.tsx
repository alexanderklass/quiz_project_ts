import {questionContext} from "../store/host.store.tsx";
import {useContext} from "react";

const QuestionCheckbox = () => {
    const {setGuessQuestionToggle, guessQuestionToggle} = useContext(questionContext);
    const onChangeGuessQuestion = (): void => {
        setGuessQuestionToggle(!guessQuestionToggle);
    }

    return (
        <div className={"flex flex-row gap-1"}>
            <label className={"text-white flex justify-center items-center"}>
                <input onChange={onChangeGuessQuestion} className={"w-6 h-6 mr-1"} type={"checkbox"}/>
                Guess Question
            </label>
        </div>
    );
}

export default QuestionCheckbox;