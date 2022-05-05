import {
  CorrectAnswerForUser,
  FinishPageContainer,
  ShowWrongAnswersButton,
  WrongAnswerBlock,
  WrongAnswersContainer,
  WrongUserAnswer,
} from './FinishPage.styles';
import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../context';
import Timer from '../../components/Timer';
import { getCorrectAnswers, getWrongAnswers } from '../../helpers';

const FinishPage = () => {
  const { userAnswers, currentTimer, userStatsHandler } =
    useContext(QuizContext);
  const [showWrong, setShowWrong] = useState(false);

  const correctAnswers = getCorrectAnswers(userAnswers);
  const wrongAnswers = getWrongAnswers(userAnswers);

  useEffect(() => {
    userStatsHandler(currentTimer, wrongAnswers.length, correctAnswers.length);
  }, [
    userStatsHandler,
    currentTimer,
    wrongAnswers.length,
    correctAnswers.length,
  ]);

  const showAnswers = () => {
    setShowWrong(true);
  };

  if (userAnswers.length > 0) {
    return (
      <FinishPageContainer>
        <h4>{userAnswers[0].category}</h4>

        <span>
          You scored <strong>{correctAnswers.length * 10} points</strong>
        </span>

        <span>
          You've answered correctly to{' '}
          <strong>
            {correctAnswers.length} of {userAnswers.length}
          </strong>{' '}
          questions
        </span>

        <span>
          Time spent: <Timer timer={currentTimer} />
        </span>

        {!showWrong && (
          <ShowWrongAnswersButton onClick={showAnswers}>
            <b>WHERE I WAS WRONG?</b>
          </ShowWrongAnswersButton>
        )}

        <WrongAnswersContainer>
          {showWrong &&
            wrongAnswers.map((answer) => {
              return (
                <WrongAnswerBlock key={answer.question}>
                  <strong>{answer.question}</strong>
                  <div>
                    Your answer:{' '}
                    <WrongUserAnswer>{answer.userAnswer}</WrongUserAnswer>
                  </div>
                  <div>
                    Correct answer:{' '}
                    <CorrectAnswerForUser>
                      {answer.correctAnswer}
                    </CorrectAnswerForUser>
                  </div>
                </WrongAnswerBlock>
              );
            })}
        </WrongAnswersContainer>
      </FinishPageContainer>
    );
  } else {
    return (
      <FinishPageContainer>
        <h4>Didn't play the game</h4>
      </FinishPageContainer>
    );
  }
};

export default FinishPage;
