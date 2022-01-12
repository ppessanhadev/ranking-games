import { useContext } from 'react';
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { SubHeader } from '../components/SubHeader'
import { ListGames } from '../components/ListGames'
import { Loading } from '../components/Loading'
import { GameContext } from '../contexts/GameContext/context';

const Home: NextPage = () => {
  const { games, loading } = useContext(GameContext) as ContextType

  if (loading) return <Loading />

  return (
    <>
      <Header />
      <SubHeader title='Fase de seleção'>
        Selecione 8 games, que você deseja que entrem na competição e depois pressione o botão <b>Gerar meu campeonato</b> para prosseguir!  
      </SubHeader>
      <ListGames games={games} />
    </>
  )
}

export default Home;