import {create} from 'zustand';


export interface IQuestionContainer {
    question: string | number;
    guessQuestionToggled: boolean;
    guessAnswer: string | number;
    answer_1: {
        answer: string | number;
        correct: boolean;
    };
    answer_2: {
        answer: string | number;
        correct: boolean;
    };
    answer_3: {
        answer: string | number;
        correct: boolean;
    };
    answer_4: {
        answer: string | number;
        correct: boolean;
    };
}

export interface IQuestions {
    questionContainer: IQuestionContainer[];
    guessQuestionToggle: boolean;
    image: string | null;
    audio: string | null;
    setQuestionContainer: (questionContainer: IQuestionContainer[]) => void;
    setGuessQuestionToggle: (guessQuestionToggle: boolean) => void;
    setImage: (image: string | null) => void;
    setAudio: (audio: string | null) => void;
}

export const questionStore = create<IQuestions>((set) => ({
    questionContainer: [],
    guessQuestionToggle: false,
    image: null,
    audio: null,
    setGuessQuestionToggle: (toggle: boolean) => set({guessQuestionToggle: toggle}),
    setQuestionContainer: (questionContainer: IQuestionContainer[]) => set({questionContainer:questionContainer}),
    setImage: (img: string | null) => set({image: img}),
    setAudio: (aud: string | null) => set({audio: aud}),
}));
