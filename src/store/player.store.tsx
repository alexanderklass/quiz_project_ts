import {create} from 'zustand';

export interface IPlayerContainer {
    playerName: string;
    score: number;
}

export interface IPlayer {
    playerContainer: IPlayerContainer[];
    setPlayerContainer: (playerContainer: IPlayerContainer[]) => void;
    playerName: string;
    setPlayerName: (playerName: string) => void;
}

export const playerStore = create<IPlayer>((set) => ({
    playerContainer: [],
    playerName: "",
    setPlayerName: (name: string) => set({playerName: name}),
    setPlayerContainer: (playerContainer: IPlayerContainer[]) => set({playerContainer: playerContainer})
}))