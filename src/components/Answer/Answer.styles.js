import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const AnswerContainer = styled.div`
  background-color: ${ALL_COLORS.purpleGrey};
  display: flex;
  margin: 0 10px;

  border-radius: 10px;

  align-items: center;

  padding: 7px;
`;

export const AnswerInput = styled.input`
  transform: scale(1.3);
  margin-right: 10px;
  cursor: pointer;
`;

export const AnswerLabel = styled.label`
  cursor: pointer;
  user-select: none;
`;
