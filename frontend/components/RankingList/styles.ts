import styled from 'styled-components'
import { darkTheme } from '../../styles/constants'

interface Props {
  image?: string;
  position?: number;
  platform?: string;
}

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 85vw;
  margin: 0 auto;
`

export const RankingContainer = styled.div<Props>`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 36px;
  margin: 12px 0;
  background: ${props => {
    switch (props.position) {
      case 1:
        return '-webkit-linear-gradient(left, rgba(0,0,0, 0), rgba(236,233,122, 0.7))'
      case 2:
        return '-webkit-linear-gradient(left, rgba(0,0,0, 0), rgba(172, 172, 172, 0.7))'
      case 3:
        return '-webkit-linear-gradient(left, rgba(0,0,0, 0), rgba(174,104,66, 0.7))'
      default:
        return '-webkit-linear-gradient(left, rgba(0,0,0, 0), rgba(0,0,0, 0.7))'
    }
  }};
  border-radius: 6px;
  color: ${darkTheme.staticWhite};
  align-items: center;
`;

export const GameRank = styled.h1`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  font-size: 36px;
  font-weight: 700;

  span {
    font-size: 24px;
    font-weight: 400;
    align-self: center;
    margin-left: 24px;
  }
`

export const PlatformColor = styled.span<Props>`
  color: ${props => {
    const platforms = {
      sony: ['PS', 'PS2', 'PS3', 'PS4'],
      nintendo: ['WII', 'Switch', 'N64', 'GC'],
      microsoft: ['XONE', 'X360'],
      sega: ['DC'],
    };
    if (platforms.sony.some((plat) => plat === props.platform))
      return 'blue'
    if (platforms.nintendo.some((plat) => plat === props.platform))
      return 'tomato'
    if (platforms.microsoft.some((plat) => plat === props.platform))
      return 'green'

    return darkTheme.staticWhite
  }}
`;
