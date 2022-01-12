import styled from 'styled-components';
import { darkTheme } from './constants'

export const RedirectButton = styled.button`
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