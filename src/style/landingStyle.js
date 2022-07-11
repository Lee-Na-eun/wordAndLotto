import styled, { keyframes } from 'styled-components';

const textAni = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    50% {
        opacity: 1;
        transform: translateZ(0);
    }
    to{
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
`;

const timeDelay = 0;

export const ExplainWrap = styled.div`
  max-width: 600px;
  font-size: 30px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  > div {
    position: absolute;
  }
`;

export const WelcomeText = styled.div`
  opacity: 0;
  font-size: 50px;
  animation: ${textAni} 6s;
  animation-delay: ${timeDelay};
`;

export const ExplainOne = styled.div`
  animation: ${textAni} 6s;
  animation-delay: 3s;
  opacity: 0;
`;

export const ExplainTwo = styled.div`
  animation: ${textAni} 6s;
  animation-delay: 6s;
  opacity: 0;
`;

export const ExplainThree = styled.div`
  animation: ${textAni} 6s;
  animation-delay: 9s;
  opacity: 0;
`;

export const ExplainFour = styled.div`
  animation: ${textAni} 6s;
  animation-delay: 12s;
  opacity: 0;
`;
