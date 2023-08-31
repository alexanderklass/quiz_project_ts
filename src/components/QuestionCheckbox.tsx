import React from "react";

interface IProps {
    guessQuestionToggle: boolean;
    setGuessQuestionToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const QuestionCheckbox: React.FC<IProps> = ({guessQuestionToggle, setGuessQuestionToggle}) => {
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