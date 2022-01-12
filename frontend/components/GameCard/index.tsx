import { useState, useCallback } from 'react'
import type { NextPage } from 'next'
import { Card, InfoDivisor } from './styles'

interface Props {
  name: string;
  platform: string;
  imageUrl?: string;
  selectGame: Function;
}

export const GameCard: NextPage<Props> = ({ name, platform, imageUrl, selectGame }) => {
  const [selected, setSelected] = useState(false)

  const handleSelection = useCallback(() => {
    setSelected((prev: boolean) => !prev)
    selectGame()
  }, [selectGame])

  return (
    <Card selected={selected} image={imageUrl} onClick={handleSelection}>
      <InfoDivisor>
        <h2>{name}</h2>
        <span>{platform}</span>
      </InfoDivisor>
    </Card>
  )
}
