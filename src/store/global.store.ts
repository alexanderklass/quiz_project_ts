import {create} from 'zustand';

export interface IQuestionContainer {
    question: string | number;
    guessQuestionToggled: boolean;
    guessAnswer: string | number;
    answers: [object]
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
    setQuestionContainer: (questionContainer: IQuestionContainer[]) => set({questionContainer: questionContainer}),
    setImage: (img: string | null) => set({image: img}),
    setAudio: (aud: string | null) => set({audio: aud}),
}));
