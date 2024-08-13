import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Main from './components/Main';
import TodoList from "./todo/TodoList";

import Header from "./components/Header";
import { Login } from "./pages/Login";
import LoginSuccess from './pages/LoginSuccess';

import Exchange from "./components/Exchange";


function App() {
  return (
    <RecoilRoot>
      <>
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginsuccess" element={<LoginSuccess />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes> 
      </>
    </RecoilRoot>
  );
}

export default App;
