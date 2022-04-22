import { AnswerInput, AnswerContainer, AnswerLabel } from './Answer.styles';

const Answer = ({ type, name, question }) => {
  if (type === 'multiple') {
    return (
      <AnswerContainer>
        <AnswerInput type="checkbox" id={name} name={name} />
        <AnswerLabel
          htmlFor={name}
          dangerouslySetInnerHTML={{ __html: name }}
        />
      </AnswerContainer>
    );
  } else {
    return (
      <AnswerContainer>
        <AnswerInput type="radio" id={name} name={question} value={name} />
        <AnswerLabel
          htmlFor={name}
          dangerouslySetInnerHTML={{ __html: name }}
        />
      </AnswerContainer>
    );
  }
};

export default Answer;
