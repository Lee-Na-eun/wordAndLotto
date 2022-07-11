import { useEffect, useState } from 'react';
import randomWord from '../data/wordStart';

function Timer() {
  const [seconds, setSeconds] = useState(15);
  const [word, setWord] = useState(randomWord());
  const [changeWord, setChageWord] = useState('');
  const [invalidTxt, setInvalidTxt] = useState('');
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [seconds]);

  const onChangeWord = (e) => {
    setChageWord(e.target.value);
  };

  const enterTest = (e) => {
    if (e.key === 'Enter') {
      if (filterWord()) {
        setWord(changeWord);
        setChageWord('');
      }
    }
  };

  const filterWord = () => {
    const lastWord = word.charAt(word.length - 1);
    const firstWord = changeWord.charAt(0);
    if (lastWord !== firstWord || changeWord.length === 1) {
      setInvalidTxt('끝말잇기에 적합한 단어를 기입해주세요.');

      return false;
    } else {
      setInvalidTxt('');
      return true;
    }
  };

  return (
    <div>
      <div>TIME : {seconds}초</div>

      <div>
        <div>단어 : {word}</div>
        <input
          onChange={onChangeWord}
          value={changeWord}
          onKeyPress={enterTest}
          disabled={seconds === 0 ? true : false}
        />
      </div>

      <div>{invalidTxt}</div>

      <div>{seconds === 0 ? 'TIME OVER' : ''}</div>
    </div>
  );
}

export default Timer;
