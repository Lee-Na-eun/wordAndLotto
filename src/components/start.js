import { StartImg, StartButton, StartWrap } from '../style/startStyle';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <StartWrap>
      <StartImg>
        <img src={require('../bingo.jpg')} />
      </StartImg>
      <StartButton>
        <Link to='/word'>
          <button>START</button>
        </Link>
      </StartButton>
    </StartWrap>
  );
}

export default Start;
