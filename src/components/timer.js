import { useEffect, useState } from 'react';
import randomWord from '../data/wordStart';
import { WordWrap, TimerAlert, WordGameWrap } from '../style/wordStyle';

function Timer({ setSuccess, success }) {
  const [seconds, setSeconds] = useState(15);
  const [word, setWord] = useState(randomWord());
  const [changeWord, setChageWord] = useState('');
  const [invalidTxt, setInvalidTxt] = useState('');
  const [timeOut, setTimeOut] = useState(false);
  const [correctArr, setCorrectArr] = useState([]);

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
      correctLength();
      setInvalidTxt('');
      return true;
    }
  };

  const correctLength = () => {
    setCorrectArr([...correctArr, changeWord]);
    if (correctArr.length === 2) {
      setSuccess(true);
      setCorrectArr([]);
    }
  };

  return (
    <WordWrap>
      <TimerAlert>TIME : {seconds}초</TimerAlert>

      <WordGameWrap>
        <p>단어 : {word}</p>
        <input
          onChange={onChangeWord}
          value={changeWord}
          onKeyPress={enterTest}
          disabled={seconds === 0 ? true : false}
        />
      </WordGameWrap>

      <div>{invalidTxt}</div>

      <div>{seconds === 0 && !success ? 'TIME OVER' : ''}</div>
    </WordWrap>
  );
}

export default Timer;
