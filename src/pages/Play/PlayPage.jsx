import {
  NextQuestionButton,
  PlayPageContainer,
  Question,
  AnswersContainer,
} from './PlayPage.styles';
import Answer from '../../components/Answer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRandomTenById } from '../../providers';
import Loading from '../../components/common/Loading';

const PlayPage = () => {
  const [quizInfo, setQuizInfo] = useState({ info: [], isLoaded: false });

  const params = useParams();

  useEffect(() => {
    getRandomTenById(params.quizId).then((data) =>
      setQuizInfo({ info: data.results, isLoaded: true })
    );
  }, []);

  if (!quizInfo.isLoaded) {
    return (
      <PlayPageContainer>
        <Loading />
      </PlayPageContainer>
    );
  }

  return (
    <PlayPageContainer>
      <Question>{quizInfo.info[0].question}</Question>
      <AnswersContainer>
        {[
          quizInfo.info[0].correct_answer,
          ...quizInfo.info[0].incorrect_answers,
        ].map((answer) => (
          <Answer type={quizInfo.info[0].type} name={answer} key={answer} />
        ))}
      </AnswersContainer>
      <NextQuestionButton>
        <b>NEXT QUESTION</b>
      </NextQuestionButton>
    </PlayPageContainer>
  );
};

export default PlayPage;
