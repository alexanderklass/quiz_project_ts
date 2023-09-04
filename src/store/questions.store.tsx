import {create} from 'zustand';

export interface IQuestions {
    questionContainer: Array<object>;
    guessQuestionToggle: boolean;
    image: string | null;
    audio: string | null;
    question: string | number;
    answer_1: string | number;
    answer_2: string | number;
    answer_3: string | number;
    answer_4: string | number;
    guessAnswer: string | number;
    setQuestionContainer: (questionContainer: Array<object>) => void;
    setGuessQuestionToggle: (guessQuestionToggle: boolean) => void;
    setImage: (image: string | null) => void;
    setAudio: (audio: string | null) => void;
    setQuestion: (question: string | number) => void;
    setAnswer_1: (answer_1: string | number) => void;
    setAnswer_2: (answer_2: string | number) => void;
    setAnswer_3: (answer_3: string | number) => void;
    setAnswer_4: (answer_4: string | number) => void;
    setGuessAnswer: (guessAnswer: string | number) => void;
}

export const questionStore = create<IQuestions>((set) => ({
    questionContainer: [],
    guessQuestionToggle: false,
    image: null,
    audio: null,
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    guessAnswer: "",
    setQuestionContainer: (questionContainer: Array<object>) => set({questionContainer: questionContainer}),
    setGuessQuestionToggle: (toggle: boolean) => set({guessQuestionToggle: toggle}),
    setImage: (img: string | null) => set({image: img}),
    setAudio: (aud: string | null) => set({audio: aud}),
    setQuestion: (q: string | number) => set({question: q}),
    setAnswer_1: (ans: string | number) => set({answer_1: ans}),
    setAnswer_2: (ans: string | number) => set({answer_2: ans}),
    setAnswer_3: (ans: string | number) => set({answer_3: ans}),
    setAnswer_4: (ans: string | number) => set({answer_4: ans}),
    setGuessAnswer: (guess: string | number) => set({guessAnswer: guess}),
}));
