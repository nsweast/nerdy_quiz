import { NextButtonStyled, NextButtonStyledLink } from './NextButton.styles';
import { useContext } from 'react';
import { QuizContext } from '../../context';

const NextButton = ({ onClick, active, index, questions, quizId }) => {
  const context = useContext(QuizContext);

  if (index === questions.length - 1 && active) {
    return (
      <NextButtonStyledLink
        to={'/result/' + quizId}
        onClick={() => context.setTimerActive(false)}
      >
        <NextButtonStyled active={active}>
          <b>SEE RESULT!</b>
        </NextButtonStyled>
      </NextButtonStyledLink>
    );
  }

  if (active) {
    return (
      <NextButtonStyled onClick={onClick} active={active}>
        <b>NEXT QUESTION</b>
      </NextButtonStyled>
    );
  }

  return (
    <NextButtonStyled>
      <b>SELECT ANSWER</b>
    </NextButtonStyled>
  );
};

export default NextButton;
