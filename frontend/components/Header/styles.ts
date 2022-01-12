import styled from 'styled-components'
import { darkTheme } from '../../styles/constants';

export const PageHeader = styled.header`
  width: 100%;
  background-color: ${darkTheme.shadowColor};
  border-bottom: 1px solid ${darkTheme.staticWhite};
  padding: 10px;
  h2 {
    font-size: 28px;
    text-align: center;
    color: ${darkTheme.staticWhite};
    background-color: inherit;
  }
`;

export const Divisor = styled.hr`
  background: none;
  border: 1px solid ${darkTheme.primaryColor};
  max-width: 130px;
`