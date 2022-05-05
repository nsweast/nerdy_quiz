import { useContext, useEffect } from 'react';
import { QuizContext } from '../context';

const Timer = ({ timer, active }) => {
  const context = useContext(QuizContext);

  useEffect(() => {
    let interval;

    if (active) {
      interval = setInterval(() => {
        context.setCurrentTimer((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [active]);

  return (
    <span>
      {('0' + Math.floor((timer / 60000) % 60)).slice(-2)}:
      {('0' + Math.floor((timer / 1000) % 60)).slice(-2)}
    </span>
  );
};

export default Timer;
