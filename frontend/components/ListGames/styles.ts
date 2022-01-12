import styled from 'styled-components'
import { darkTheme } from '../../styles/constants'

export const MainContent = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`;

export const ContainerCard = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`

export const YearInfo = styled.h1`
  margin: 0 auto;
`

export const GenerateCupButton = styled.button`
  border: none;
  padding: 12px;
  margin: 12px;
  cursor: pointer;

  font-size: 18px;
  font-weight: 700;
  background-color: ${darkTheme.staticWhite};
  color: ${darkTheme.primaryColor};
  border-radius: 6px;

  float: right;
  :disabled {
    opacity: 0.4;
    cursor: unset;
  }
`