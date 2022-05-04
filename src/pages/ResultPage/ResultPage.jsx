import {
  CorrectAnswerForUser,
  ResultPageContainer,
  ShowWrongAnswersButton,
  WrongAnswerBlock,
  WrongAnswersContainer,
  WrongUserAnswer,
} from './ResultPage.styles';
import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../context';
import Timer from '../../components/Timer';

const ResultPage = () => {
  const context = useContext(QuizContext);
  const [showWrong, setShowWrong] = useState(false);

  const correctAnswers = (array) => {
    return array.filter((answer) => answer.userAnswer === answer.correctAnswer);
  };

  const wrongAnswers = (array) => {
    return array.filter((answer) => answer.userAnswer !== answer.correctAnswer);
  };

  useEffect(() => {
    context.historyHandler(
      context.currentTimer,
      wrongAnswers(context.userAnswers).length,
      correctAnswers(context.userAnswers).length
    );
  }, []);

  const showAnswers = () => {
    setShowWrong(true);
  };

  if (context.userAnswers.length > 0) {
    return (
      <ResultPageContainer>
        <h4>{context.userAnswers[0].category}</h4>

        <span>
          You scored{' '}
          <strong>
            {correctAnswers(context.userAnswers).length * 10} points
          </strong>
        </span>

        <span>
          You've answered correctly to{' '}
          <strong>
            {correctAnswers(context.userAnswers).length} of{' '}
            {context.userAnswers.length}
          </strong>{' '}
          questions
        </span>

        <span>
          Time spent: <Timer timer={context.currentTimer} />
        </span>

        {!showWrong && (
          <ShowWrongAnswersButton onClick={showAnswers}>
            <b>WHERE I WAS WRONG?</b>
          </ShowWrongAnswersButton>
        )}

        <WrongAnswersContainer>
          {showWrong &&
            wrongAnswers(context.userAnswers).map((answer) => {
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
      </ResultPageContainer>
    );
  } else {
    return <div>Didn't play the game</div>;
  }
};

export default ResultPage;
