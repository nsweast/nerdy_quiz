import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';
import { Link } from 'react-router-dom';

export const NextButtonStyled = styled.div`
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
  border-radius: 10px;

  color: ${ALL_COLORS.white};
  background-color: ${(props) =>
    !props.active ? ALL_COLORS.grey : ALL_COLORS.green};

  cursor: ${(props) => (props.active ? 'pointer' : 'default')};
`;

export const NextButtonStyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
