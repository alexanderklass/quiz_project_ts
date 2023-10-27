import {create} from 'zustand';

export interface IPlayerContainer {
    playerName: string;
    score: number;
    room?: string;
    role?: string;
    token?: string;
}

export interface IPlayer {
    players: IPlayerContainer[];
    setPlayers: (players: IPlayerContainer[]) => void;
    playerName: string;
    addPlayer: (newPlayer: IPlayerContainer) => void;
    updatePlayerScore: (updatedScore: object) => void;
    setPlayerName: (playerName: string) => void;
}

export const playerStore = create<IPlayer>((set) => ({
    players: [],
    playerName: "",
    setPlayerName: (name: string) => set({playerName: name}),
    setPlayers: (players) => set({players: players}),
    addPlayer: (newPlayer: IPlayerContainer) => {
        set((state) => (
            {...state, players: [...state.players, newPlayer]}));
    },
    updatePlayerScore: (updatedScore: any) => {
        set((state) => ({
            ...state,
            players: state.players.map((player) =>
                player.playerName === updatedScore.playerName ? {...player, score: updatedScore} : player
            ),
        }));
    },
}))