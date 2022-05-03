import { useContext, useEffect } from 'react';
import { QuizContext } from '../context';

const Timer = ({ total }) => {
  const context = useContext(QuizContext);

  useEffect(() => {
    let interval;

    if (context.timerActive) {
      interval = setInterval(() => {
        context.setCurrentTimer((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [context.timerActive]);

  if (total) {
    return (
      <span>
        {('0' + Math.floor((context.currentTimer / 60000) % 60)).slice(-2)}:
        {('0' + Math.floor((context.currentTimer / 1000) % 60)).slice(-2)}
      </span>
    );
  }

  return (
    <span>
      {('0' + Math.floor((context.currentTimer / 60000) % 60)).slice(-2)}:
      {('0' + Math.floor((context.currentTimer / 1000) % 60)).slice(-2)}
    </span>
  );
};

export default Timer;
