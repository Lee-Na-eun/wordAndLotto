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
        <ExplainTwo>이곳은 여러가지 단순한 게임들의 집합소 입니다.</ExplainTwo>
        <ExplainThree>
          당신의 시간을 가져갈 게임을 선택해주시면 됩니다.
        </ExplainThree>
        <ExplainFour>그럼 부디, 즐겨주세요.</ExplainFour>
        <Start />
      </ExplainWrap>
    </>
  );
}

export default Landing;
