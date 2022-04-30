import { createContext, useContext } from 'react';
import Router from '../routes';

const QuizContext = createContext();

const QuizContextProvider = () => {
  useContext(QuizContext);

  return (
    <QuizContext.Provider>
      <Router />
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
