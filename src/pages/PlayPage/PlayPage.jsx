import {
  NextQuestionButton,
  PlayPageContainer,
  Question,
  AnswersContainer,
} from './PlayPage.styles';
import Answer from '../../components/Answer';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Loading from '../../components/common/Loading';
import { shuffleArray } from '../../helpers';
import quizProvider from '../../providers';
import { QuizContext } from '../../context';

const PlayPage = () => {
  const context = useContext(QuizContext);

  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(0);

  const params = useParams();

  useEffect(() => {
    quizProvider.questions
      .getTenQuestionsById(params.quizId)
      .then((questions) =>
        questions.map((question) => ({
          ...question,
          allAnswers: shuffleArray([
            question.correct_answer,
            ...question.incorrect_answers,
          ]),
        }))
      )
      .then((questions) => {
        setQuestions(questions);
        setLoaded(true);
      });
  }, [params]);

  const answerSet = (question) => {
    context.userAnswers.find((answer) => answer.question === question);
  };

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(questions.length - 1);
    }
  };

  if (!loaded) {
    return (
      <PlayPageContainer>
        <Loading />
      </PlayPageContainer>
    );
  }

  const { question, allAnswers } = questions[index];
  return (
    <PlayPageContainer>
      <Question>{question}</Question>
      <AnswersContainer>
        {allAnswers.map((answer) => (
          <Answer
            name={answer}
            key={answer}
            question={question}
            onClick={(event) => context.selectAnswer(event, question)}
          />
        ))}
      </AnswersContainer>
      <NextQuestionButton
        onClick={answerSet(question) && nextQuestion}
        active={answerSet(question)}
      >
        <b>NEXT QUESTION</b>
      </NextQuestionButton>
    </PlayPageContainer>
  );
};

export default PlayPage;
