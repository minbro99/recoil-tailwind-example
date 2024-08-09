import React from 'react';
import './App.css';
// import { countState, doubleCountState } from "./atom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';

function App() {
  
  return (
    <div className="App">
      <>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      </>
    </div>
  );
}

export default App;
