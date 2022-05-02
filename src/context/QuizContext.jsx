import { createContext, useEffect } from 'react';
import Router from '../routes';
import { useState } from 'react';

export const QuizContext = createContext();

const QuizContextProvider = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => console.log(userAnswers), [userAnswers]);

  const selectAnswer = (event, question, correct, category) => {
    const existAnswer = userAnswers.find(
      (answer) => answer.question === question
    );

    if (existAnswer) {
      setUserAnswers(
        userAnswers.map((answer) => {
          if (answer.question === question) {
            return {
              ...answer,
              userAnswer: event.target.value,
            };
          } else {
            return { ...answer };
          }
        })
      );
    } else {
      setUserAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          question: question,
          category: category,
          userAnswer: event.target.value,
          correctAnswer: correct,
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
