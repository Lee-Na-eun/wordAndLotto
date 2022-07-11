import './App.css';
import Start from './components/start';
import Word from './page/word';
import Landing from './page/landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/word' element={<Word />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
