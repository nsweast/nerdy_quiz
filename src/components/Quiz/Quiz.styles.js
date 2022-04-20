import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';
import { Link } from 'react-router-dom';

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

export const PlayQuizButton = styled(Link)`
  padding: 5px;
  background-color: ${ALL_COLORS.yellow};
  cursor: pointer;

  color: inherit;
  text-decoration: none;
`;
