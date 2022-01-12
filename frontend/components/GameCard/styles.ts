import styled from 'styled-components'
import { darkTheme } from '../../styles/constants';

type Props = {
  selected?: boolean;
  image?: string;
}

export const Card = styled.div<Props>`
  display: flex;
  align-items: flex-end;
  width: 200px;
  height: 250px;
  margin: 12px;
  top: 0;
  left: 0;
  position: relative;

  background: ${props => props.image ? `url(${props.image}) no-repeat 0 0` : darkTheme.shadowColor};
  background-size: cover;
  background-position: center center;
  border-radius: 6px;
  border: ${props => props.selected && `2px solid gold`};

  :hover {
    transition: all 0.3s ease-out;
    top: -4px;
    left: 2px;
    cursor: pointer;
  }
  h2, span {
    color: ${darkTheme.staticWhite};
    background-color: transparent;
    text-shadow: 1px 3px 4px rgba(0,0,0, 1);
  }
`;

export const InfoDivisor = styled.div`
  width: 100%;
  padding: 24px 8px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: -webkit-linear-gradient(top, rgba(0,0,0, 0), rgba(0,0,0, 1));
`
