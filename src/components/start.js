import { StartButton, StartWrap } from '../style/startStyle';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <StartWrap>
      <StartButton>
        <Link to='/word'>
          <button>끝말잇기</button>
        </Link>
        <Link to='/letterPrac'>
          <button>타자연습</button>
        </Link>
        <Link to='/lotto'>
          <button>로또 추첨기</button>
        </Link>
      </StartButton>
    </StartWrap>
  );
}

export default Start;
