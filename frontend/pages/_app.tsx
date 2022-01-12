import { GlobalStyles } from '../styles/GlobalStyles';
import type { AppProps } from 'next/app'
import { GameProvider } from '../contexts/GameContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </GameProvider>
  )
}

export default MyApp
