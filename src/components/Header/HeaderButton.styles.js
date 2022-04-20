import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';
import { Link } from 'react-router-dom';

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
