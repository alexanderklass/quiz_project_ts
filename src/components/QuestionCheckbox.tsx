import {questionStore} from "../store/questions.store.tsx";


const QuestionCheckbox = () => {

    const {setGuessQuestionToggle, guessQuestionToggle} = questionStore();
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