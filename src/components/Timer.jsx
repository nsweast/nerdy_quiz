import { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => setTime((prevTime) => prevTime + 1000), 1000);
    console.log('hui');
  }, []);

  return <span>{Math.floor((time / 1000) % 60)}</span>;
};

export default Timer;
