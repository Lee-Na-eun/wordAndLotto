function randomStart() {
  const wordArr = [
    '바나나',
    '사포',
    '기차',
    '장발장',
    '여우',
    '김부각',
    '일기',
    '과일',
  ];

  const randomIdx = Math.floor(Math.random() * wordArr.length);

  return wordArr[randomIdx];
}

export default randomStart;
