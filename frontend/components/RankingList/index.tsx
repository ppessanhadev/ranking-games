import { useContext } from 'react'
import type { NextPage } from 'next'
import { GameContext } from '../../contexts/GameContext/context'
import { ListContainer, RankingContainer, GameRank, PlatformColor } from './styles'

type Props = {
  games: Game[]
}

export const RankingList: NextPage<Props> = ({ games }) => {
  return (
    <ListContainer>
      { games.map((game, index) => (
        <RankingContainer key={game.id} image={game.imageUrl} position={index + 1}>
          <GameRank>
            {index + 1}.
            <span>
              {game.title}
              <PlatformColor platform={game.platform}>[{game.platform}]</PlatformColor>
            </span>
          </GameRank>
        </RankingContainer>
      ))}
    </ListContainer>
  )
}
