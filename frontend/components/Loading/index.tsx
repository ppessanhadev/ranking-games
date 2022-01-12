import type { NextPage } from 'next'
import { Loader, LoaderContainer } from './styles'


export const Loading: NextPage = () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  )
}