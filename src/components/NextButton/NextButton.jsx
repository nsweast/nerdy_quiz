import { NextButtonStyled, NextButtonStyledLink } from './NextButton.styles';

const NextButton = ({ onClick, active, index, questions }) => {
  if (index === questions.length - 1) {
    return (
      <NextButtonStyledLink to="/result">
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
