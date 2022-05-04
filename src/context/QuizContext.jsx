import { createContext, useEffect } from 'react';
import Router from '../routes';
import { useState } from 'react';
import { ALL_PAGES } from '../constants';

export const QuizContext = createContext();

const QuizContextProvider = () => {
  const [currentPage, setCurrentPage] = useState(ALL_PAGES.home);
  const [currentUserAnswers, setCurrentUserAnswers] = useState([]);
  const [currentTimer, setCurrentTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    localStorage.setItem('userStat', JSON.stringify(history));
  }, [history]);

  const pageSwitcher = (page = ALL_PAGES.home) => {
    setCurrentPage(page);
  };

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
    setCurrentTimer(0);
  };

  const historyHandler = (time, wrong, correct) => {
    setHistory((prevHistory) => [...prevHistory, { time, wrong, correct }]);
  };

  return (
    <QuizContext.Provider
      value={{
        currentPage: currentPage,
        pageSwitcher: pageSwitcher,
        userAnswers: currentUserAnswers,
        selectAnswer: selectAnswer,
        clearCurrentSession: clearCurrentSession,
        currentTimer: currentTimer,
        setCurrentTimer: setCurrentTimer,
        timerActive: timerActive,
        setTimerActive: setTimerActive,
        historyHandler: historyHandler,
      }}
    >
      <Router />
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
