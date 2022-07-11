import {
  ExplainWrap,
  WelcomeText,
  ExplainOne,
  ExplainTwo,
  ExplainThree,
  ExplainFour,
} from '../style/landingStyle';

import { useState } from 'react';
import Start from '../components/start';

function Landing() {
  return (
    <>
      <ExplainWrap>
        <WelcomeText>WELCOME!</WelcomeText>
        <ExplainOne>재미를 위한 사이트에 오신 것을 환영합니다.</ExplainOne>
        <ExplainTwo>주어진 시간 내에 끝말잇기 3번을 성공하시면</ExplainTwo>
        <ExplainThree>
          로또 추첨을 할 수 있는 추첨권 한 장이 부여됩니다.
        </ExplainThree>
        <ExplainFour>그럼 부디, 즐겨주세요.</ExplainFour>
        <Start />
      </ExplainWrap>
    </>
  );
}

export default Landing;
