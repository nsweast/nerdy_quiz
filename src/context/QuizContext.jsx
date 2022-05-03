import { createContext, useEffect } from 'react';
import Router from '../routes';
import { useState } from 'react';

export const QuizContext = createContext();

const QuizContextProvider = () => {
  const [currentUserAnswers, setCurrentUserAnswers] = useState([]);

  useEffect(() => console.log(currentUserAnswers), [currentUserAnswers]);

  const selectAnswer = (event, question, correct, category) => {
    const existAnswer = currentUserAnswers.find(
      (answer) => answer.question === question
    );

    if (existAnswer) {
      setCurrentUserAnswers(
        currentUserAnswers.map((answer) => {
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
      setCurrentUserAnswers((prevAnswers) => [
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

  const clearCurrentSession = () => {
    setCurrentUserAnswers([]);
  };

  return (
    <QuizContext.Provider
      value={{
        userAnswers: currentUserAnswers,
        selectAnswer: selectAnswer,
        clearCurrentSession: clearCurrentSession,
      }}
    >
      <Router />
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
