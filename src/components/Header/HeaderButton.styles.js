import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

//TODO: make 'a' Link
export const HeaderButtonStyled = styled.a`
  padding: 15px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${props => props.fg || ALL_COLORS.textBlack};
  background-color: ${props => props.bg};
  
  cursor: pointer;
`