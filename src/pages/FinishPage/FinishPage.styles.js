import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const FinishPageContainer = styled.div`
  width: 70%;
  margin: 0 auto;

  background-color: ${ALL_COLORS.white};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-radius: 10px;
  box-shadow: 20px 20px 40px ${ALL_COLORS.purpleGrey},
    -20px -20px 40px ${ALL_COLORS.purpleGrey};

  h4,
  span {
    margin: 0;
    padding: 20px;
  }

  @media (max-height: 1000px) {
    min-height: 700px;
    box-shadow: 5px 5px 50px ${ALL_COLORS.purpleGrey};
  }
`;

export const ShowWrongAnswersButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ALL_COLORS.blue};
  color: ${ALL_COLORS.white};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const WrongAnswersContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const WrongAnswerBlock = styled.div`
  width: 70%;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: 1px ${ALL_COLORS.grey} solid;

  strong,
  span {
    text-align: center;
    margin: 0;
    padding: 5px;
  }

  @media (max-height: 1000px) {
    width: 80%;
    padding: 10px;
  }
`;

export const WrongUserAnswer = styled.span`
  color: ${ALL_COLORS.red};
`;
export const CorrectAnswerForUser = styled.span`
  color: ${ALL_COLORS.green};
`;
