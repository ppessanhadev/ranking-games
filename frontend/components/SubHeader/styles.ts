import styled from 'styled-components'
import { darkTheme } from '../../styles/constants'

export const Container = styled.section`
  margin: 36px auto;
  width: 90%;
`

export const HeroTitle = styled.h1`
  font-size: 48px;
  line-height: 72px;
  color: ${darkTheme.staticWhite};
`

export const HeroSubTitle = styled.span`
  font-size: 16px;
  color: ${darkTheme.staticWhite};
  b {
    text-decoration: underline;
  }
`