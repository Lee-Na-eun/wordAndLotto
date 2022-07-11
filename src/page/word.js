import Timer from '../components/timer';
import { useState } from 'react';
import Confetti from 'react-confetti';

function Word() {
  const [success, setSuccess] = useState(false);

  return (
    <div>
      <Timer setSuccess={setSuccess} success={success} />
      {success ? (
        <>
          <div>시간 안에 끝말잇기를 성공하셨습니다.</div>
          <Confetti />
        </>
      ) : null}
    </div>
  );
}

export default Word;
