import { createContext, useContext, useCallback, useEffect } from 'react';
import Router from '../routes';
import { useState } from 'react';

export const QuizContext = createContext();

const QuizContextProvider = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  let i;

  useEffect(() => {
    console.log(userAnswers);
  }, [userAnswers]);

  const selectAnswer = (event, question) => {
    const existAnswer = userAnswers.find(
      (answer) => answer.question === question
    );

    if (existAnswer) {
      setUserAnswers(
        userAnswers.map((answer) => ({
          ...answer,
          userAnswer:
            answer.question === question
              ? event.target.value
              : answer.userAnswer,
        }))
      );
    } else {
      setUserAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          question: question,
          userAnswer: event.target.value,
        },
      ]);
    }
  };

  return (
    <QuizContext.Provider
      value={{ userAnswers: userAnswers, selectAnswer: selectAnswer }}
    >
      <Router />
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
