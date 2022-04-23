import {
  NextQuestionButton,
  PlayPageContainer,
  Question,
  AnswersContainer,
} from './PlayPage.styles';
import Answer from '../../components/Answer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../../components/common/Loading';
import { shuffleArray } from '../../helpers';
import { getTenQuestionsById } from '../../providers';

const PlayPage = () => {
  const [quizInfo, setQuizInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [index, setIndex] = useState(0);

  const params = useParams();

  useEffect(() => {
    getTenQuestionsById(params.quizId).then((data) => {
      setQuizInfo(data);
      setIsLoaded(true);
    });
  }, [params.quizId]);

  const next = () => {
    if (index < quizInfo.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(quizInfo.length - 1);
    }
  };

  if (!isLoaded) {
    return (
      <PlayPageContainer>
        <Loading />
      </PlayPageContainer>
    );
  }

  const { question, correct_answer, incorrect_answers, type } = quizInfo[index];
  const answersArray = shuffleArray([correct_answer, ...incorrect_answers]);

  return (
    <PlayPageContainer>
      <Question>{question}</Question>
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
