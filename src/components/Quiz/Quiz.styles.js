import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const QuizBlock = styled.section`
  width: 18%;
  height: 300px;
  background-color: white;

  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;

  h4,
  span {
    text-align: center;
  }
`;

//TODO: make it Link
export const PlayQuizButton = styled.a`
  padding: 5px;
  background-color: ${ALL_COLORS.yellow};
  cursor: pointer;
`;
