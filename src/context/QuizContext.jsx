import { createContext, useCallback, useEffect } from 'react';
import Router from '../routes';
import { useState } from 'react';

export const QuizContext = createContext();

const QuizContextProvider = () => {
  const [currentUserAnswers, setCurrentUserAnswers] = useState([]);
  const [currentTimer, setCurrentTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [fetchedQuizIds, setFetchedQuizIds] = useState([]);
  const [userStats, setUserStats] = useState(
    JSON.parse(localStorage.getItem('userStat')) || []
  );

  useEffect(() => {
    localStorage.setItem('userStat', JSON.stringify(userStats));
  }, [userStats]);

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

  const userStatsHandler = useCallback((time, wrong, correct) => {
    setUserStats((prevStats) => [...prevStats, { time, wrong, correct }]);
  }, []);

  return (
    <QuizContext.Provider
      value={{
        userAnswers: currentUserAnswers,
        selectAnswer: selectAnswer,
        clearCurrentSession: clearCurrentSession,
        currentTimer: currentTimer,
        setCurrentTimer: setCurrentTimer,
        timerActive: timerActive,
        setTimerActive: setTimerActive,
        fetchedQuizIds: fetchedQuizIds,
        setFetchedQuizIds: setFetchedQuizIds,
        userStats: userStats,
        setUserStats: setUserStats,
        userStatsHandler: userStatsHandler,
      }}
    >
      <Router />
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
