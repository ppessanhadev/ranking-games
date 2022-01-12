import { useContext } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { SubHeader } from '../components/SubHeader'
import { RankingList } from '../components/RankingList'
import { RedirectButton } from '../styles/RedirectButton'
import { GameContext } from '../contexts/GameContext/context'


const Ranking: NextPage = () => {
  const { rankedGames, loading } = useContext(GameContext) as ContextType
  const router = useRouter()

  if (loading) return <Loading />

  return (
    <>
      <Header />
      <SubHeader title='Resultado final!'>
        Veja o resultado final da disputa dos jogos selecionados abaixo.
      </SubHeader>
      <RankingList games={rankedGames} />
      <RedirectButton onClick={() => router.push('/')}>
        Jogar novamente!
      </RedirectButton>
    </>
  )
}

export default Ranking;