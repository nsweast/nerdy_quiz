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
import { shuffleArray } from '../../helpers';

const PlayPage = () => {
  const [quizInfo, setQuizInfo] = useState({ info: [], isLoaded: false });
  const [index, setIndex] = useState(0);

  const params = useParams();

  useEffect(() => {
    getRandomTenById(params.quizId).then((data) =>
      setQuizInfo({ info: data.results, isLoaded: true })
    );
  }, [params.quizId]);

  const next = () => {
    if (index < quizInfo.info.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(quizInfo.info.length - 1);
    }
  };

  if (!quizInfo.isLoaded) {
    return (
      <PlayPageContainer>
        <Loading />
      </PlayPageContainer>
    );
  }

  const { question, correct_answer, incorrect_answers, type } =
    quizInfo.info[index];
  const answersArray = shuffleArray([correct_answer, ...incorrect_answers]);

  return (
    <PlayPageContainer>
      <Question dangerouslySetInnerHTML={{ __html: question }}>{}</Question>
      <AnswersContainer>
        {answersArray.map((answer) => (
          <Answer type={type} name={answer} key={answer} question={question} />
        ))}
      </AnswersContainer>
      <NextQuestionButton onClick={next}>
        <b>NEXT QUESTION</b>
      </NextQuestionButton>
    </PlayPageContainer>
  );
};

export default PlayPage;
