import { createGlobalStyle } from 'styled-components'
import { darkTheme } from './constants'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${darkTheme.primaryColor};
    color: ${darkTheme.staticWhite};
  }
`;