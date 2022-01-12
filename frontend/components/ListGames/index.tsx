import React, { useCallback, useMemo, useContext } from 'react'
import type { NextPage } from 'next'
import { GameCard } from '../GameCard'
import { ContainerCard, YearInfo, GenerateCupButton, MainContent } from './styles'
import { GameContext } from '../../contexts/GameContext/context'
import { RedirectButton } from '../../styles/RedirectButton'

interface Props {
  games: Game[];
}

export const ListGames: NextPage<Props> = ({ games }) => {
  const { gamesSelected, setGamesSelected, years, listRankedGames } = useContext(GameContext) as ContextType

  const minimunQtdGames = useMemo<boolean>(() => gamesSelected.length < 8, [gamesSelected])

  const selectGame = useCallback((id) => {
    setGamesSelected((gameIds: number[]) => { 
      const alreadySelected = gameIds.find((gameId) => gameId === id)

      if (alreadySelected) {
        return gameIds.filter((gameId) => gameId !== id)
      }
      return [...gameIds, id]
    })
  }, [setGamesSelected])

  return (
    <MainContent>
      { years.map((year) => (
      <React.Fragment key={year}>
        <YearInfo>{year}</YearInfo>
        <ContainerCard>
          {games.map((game) => game.year === year && ( 
            <GameCard 
              key={game.id}
              name={game.title}
              platform={game.platform}
              imageUrl={game.imageUrl}
              selectGame={() => selectGame(game.id)}
            />
          ))}
        </ContainerCard>
      </React.Fragment>
      ))}
      <RedirectButton disabled={minimunQtdGames} onClick={listRankedGames}>
        Gerar meu campeonato
      </RedirectButton>
    </MainContent>
  )
}
