import { AnswerInput, AnswerContainer, AnswerLabel } from './Answer.styles';

const Answer = ({ name, question, onClick }) => {
  return (
    <AnswerContainer>
      <AnswerInput
        type="radio"
        id={name}
        name={question}
        value={name}
        onClick={onClick}
      />
      <AnswerLabel htmlFor={name}>{name}</AnswerLabel>
    </AnswerContainer>
  );
};

export default Answer;
