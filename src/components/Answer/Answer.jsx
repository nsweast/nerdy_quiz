import { AnswerCheckbox, AnswerContainer, AnswerLabel } from './Answer.styles';

const Answer = () => {
  return (
    //TODO: add label for checkbox id + name
    <AnswerContainer>
      <AnswerCheckbox type="checkbox" id="ss" name="some" />
      <AnswerLabel htmlFor="ss">Answer Example</AnswerLabel>
    </AnswerContainer>
  );
};

export default Answer;
