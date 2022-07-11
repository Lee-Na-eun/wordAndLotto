import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [seconds]);

  return (
    <div>
      <div>TIME : {seconds}</div>

      <div>
        <div>단어 : 바나나</div>
        <input />
      </div>
    </div>
  );
}

export default Timer;
