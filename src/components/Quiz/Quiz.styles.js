import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';
import { Link } from 'react-router-dom';

export const QuizBlock = styled.section`
  width: 18%;
  height: 300px;
  background-color: ${ALL_COLORS.lightBlue};
  box-shadow: 5px 5px 30px ${ALL_COLORS.purpleGrey},
    -5px -5px 30px ${ALL_COLORS.purpleGrey};

  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;

  border-radius: 10px;

  h3,
  span {
    text-align: center;
  }
`;

export const PlayQuizLink = styled(Link)`
  padding: 10px;
  background-color: ${ALL_COLORS.yellow};
  cursor: pointer;

  color: inherit;
  text-decoration: none;
  border-radius: 10px;
`;
