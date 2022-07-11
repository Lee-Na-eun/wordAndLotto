import styled, { keyframes } from 'styled-components';

const StartFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    100% {
        opacity: 1;
        transform: translateZ(0);
    }
`;

export const StartWrap = styled.div`
  opacity: 0;
  animation: ${StartFadeIn} 6s forwards;
  animation-delay: 15s;
`;

export const StartImg = styled.div`
  > img {
    width: 500px;
    object-fit: cover;
  }
`;

export const StartButton = styled.div`
  padding-top: 50px;
  > a {
    > button {
      cursor: pointer;
      width: 200px;
      height: 50px;
      outline: none;
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      border-radius: 10px;
      font-weight: bold;
      transition: 0.3s;
    }

    > button:hover {
      background-color: white;
      color: #000;
    }
  }
`;
