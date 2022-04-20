import {
  NextQuestionButton,
  PlayPageContainer,
  Question,
  AnswersContainer,
} from './PlayPage.styles';
import Answer from '../../components/Answer';

const PlayPage = () => {
  return (
    <PlayPageContainer>
      <Question>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi
        aspernatur consectetur debitis deserunt dolorem error esse, facilis id
        ipsa iste quia quos ratione sapiente suscipit temporibus voluptatum.
        Deleniti, expedita.
      </Question>
      <AnswersContainer>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </AnswersContainer>
      <NextQuestionButton>
        <b>NEXT QUESTION</b>
      </NextQuestionButton>
    </PlayPageContainer>
  );
};

export default PlayPage;
