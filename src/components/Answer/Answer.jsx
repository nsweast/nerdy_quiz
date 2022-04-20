import { AnswerCheckbox, AnswerContainer, AnswerLabel } from './Answer.styles';

const Answer = ({ type, name }) => {
  return (
    //TODO: add label for checkbox id + name
    <AnswerContainer>
      <AnswerCheckbox
        type={type === 'multiple' ? 'checkbox' : 'radio'}
        id={name}
        name={name}
      />
      <AnswerLabel htmlFor={name}>{name}</AnswerLabel>
    </AnswerContainer>
  );
};

export default Answer;
