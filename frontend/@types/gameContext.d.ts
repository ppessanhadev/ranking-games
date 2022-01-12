type ContextType = {
  games: Game[];
  years: number[];
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  gamesSelected: string[];
  setGamesSelected: Dispatch<SetStateAction<number[]>>;
  rankedGames: Game[];
  listRankedGames: () => void;
}