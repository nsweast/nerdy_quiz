import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const AnswerContainer = styled.div`
  background-color: ${ALL_COLORS.purpleGrey};
  display: flex;
  gap: 3%;

  align-items: center;

  padding: 10px;
`;

export const AnswerCheckbox = styled.input`
  transform: scale(1.5);
`;

export const AnswerLabel = styled.label``;
