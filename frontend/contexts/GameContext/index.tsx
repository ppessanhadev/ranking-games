import { useEffect, useState, useMemo, useCallback, ReactNode } from 'react'
import { GameContext } from './context';
import { getGames } from '../../services/games'
import { getScores } from '../../services/scores'
import { useRouter} from 'next/router'

type Props = {
  children: ReactNode;
}

export const GameProvider = ({ children }: Props) => {
  const router = useRouter()

  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [rankedGames, setRankedGames] = useState<Game[]>([])
  const [gamesSelected, setGamesSelected] = useState<string[]>([])

  const years = useMemo(() => {
    const mappedYears = Object.values(games.map((game: Game) => game.year))
    return mappedYears.filter((year, index) => mappedYears.indexOf(year) === index)
  }, [games])

  useEffect(() => {
    getGames()
      .then(setGames)
      .catch((e) => console.info(e.message))
      .finally(() => setLoading(false))
  }, [])

  const listRankedGames = useCallback(() => {
    router.push('/ranking')
    setLoading(true)
    getScores(gamesSelected)
      .then(setRankedGames)
      .catch((e) => console.info(e.message))
      .finally(() => setLoading(false))
    setRankedGames([])
  }, [gamesSelected, router])

  const shared = { 
    games,
    years,
    rankedGames,
    loading,
    setLoading,
    gamesSelected,
    setGamesSelected,
    listRankedGames 
  }
  return (
    <GameContext.Provider value={shared}>
      {children}
    </GameContext.Provider>
  )
}