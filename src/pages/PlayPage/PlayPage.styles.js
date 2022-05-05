import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const PlayPageContainer = styled.section`
  position: relative;

  width: 70%;
  height: 50vh;
  margin: 0 auto;

  background-color: ${ALL_COLORS.white};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 10px;
  box-shadow: 20px 20px 40px ${ALL_COLORS.purpleGrey},
    -20px -20px 40px ${ALL_COLORS.purpleGrey};

  h4 {
    text-align: center;
  }
`;

export const QuestionNumber = styled.span`
  position: absolute;

  top: 10px;
  right: 10px;
`;

export const Question = styled.div`
  width: 70%;

  padding: 0 10%;
  text-align: center;

  font-size: large;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
