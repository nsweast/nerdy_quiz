import { useContext, useEffect } from 'react';
import { QuizContext } from '../context';

const Timer = ({ timer, active }) => {
  const { setCurrentTimer } = useContext(QuizContext);

  useEffect(() => {
    let interval;

    if (active) {
      interval = setInterval(() => {
        setCurrentTimer((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [active, setCurrentTimer]);

  return (
    <span>
      {('0' + Math.floor((timer / 60000) % 60)).slice(-2)}:
      {('0' + Math.floor((timer / 1000) % 60)).slice(-2)}
    </span>
  );
};

export default Timer;
