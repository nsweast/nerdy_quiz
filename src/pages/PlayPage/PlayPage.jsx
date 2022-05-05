import {
  PlayPageContainer,
  Question,
  AnswersContainer,
  QuestionNumber,
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
  const {
    currentTimer,
    setTimerActive,
    userAnswers,
    selectAnswer,
    timerActive,
  } = useContext(QuizContext);

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
        setTimerActive(true);
      });
  }, [params.quizId, setTimerActive]);

  const answerSet = (question) => {
    return userAnswers.find((answer) => answer.question === question);
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
      <h4>{category}</h4>
      <QuestionNumber>
        {index + 1} / {questions.length}
      </QuestionNumber>
      <Question>{question}</Question>

      <AnswersContainer>
        {allAnswers.map((answer) => (
          <Answer
            name={answer}
            key={question + answer}
            question={question}
            onClick={(event) =>
              selectAnswer(event, question, correct_answer, category)
            }
          />
        ))}
      </AnswersContainer>

      <NextButton
        onClick={answerSet(question) && nextQuestion}
        active={answerSet(question)}
        index={index}
        questions={questions}
      />

      <Timer timer={currentTimer} active={timerActive} />
    </PlayPageContainer>
  );
};

export default PlayPage;
