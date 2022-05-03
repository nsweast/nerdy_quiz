import {
  PlayPageContainer,
  Question,
  AnswersContainer,
} from './PlayPage.styles';
import Answer from '../../components/Answer';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { shuffleArray } from '../../helpers';
import quizProvider from '../../providers';
import { QuizContext } from '../../context';
import NextButton from '../../components/NextButton';
import Timer from '../../components/Timer';

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
  }, [params.quizId]);

  const answerSet = (question) => {
    return context.userAnswers.find((answer) => answer.question === question);
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

  const { question, allAnswers, correct_answer, category } = questions[index];
  return (
    <PlayPageContainer>
      <Question>{question}</Question>
      <AnswersContainer>
        {allAnswers.map((answer) => (
          <Answer
            name={answer}
            key={answer}
            question={question}
            onClick={(event) =>
              context.selectAnswer(event, question, correct_answer, category)
            }
          />
        ))}
      </AnswersContainer>
      <NextButton
        onClick={answerSet(question) && nextQuestion}
        active={answerSet(question)}
        index={index}
        questions={questions}
        quizId={params.quizId}
      />
      <Timer />
    </PlayPageContainer>
  );
};

export default PlayPage;
