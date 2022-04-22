import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { ALL_COLORS } from '../../constants';

export const HeaderStyled = styled.header`
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLeft = styled.nav``;
export const NavRight = styled.nav``;

export const HeaderButtonStyled = styled(Link)`
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.fg || ALL_COLORS.textBlack};
  background-color: ${(props) => props.bg};

  cursor: pointer;

  text-decoration: none;
`;
