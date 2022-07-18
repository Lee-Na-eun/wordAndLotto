import './App.css';
import Word from './page/word';
import Landing from './page/landing';
import LetterPrac from './page/letterPrac';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/word' element={<Word />}></Route>
          <Route path='/letterPrac' element={<LetterPrac />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
