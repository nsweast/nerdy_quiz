import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { ALL_COLORS } from '../../constants';

export const HeaderLinkStyled = styled(Link)`
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.fg || ALL_COLORS.textBlack};
  background-color: ${(props) => props.bg};

  cursor: pointer;

  text-decoration: none;

  border-radius: 10px;

  user-select: none;
`;
