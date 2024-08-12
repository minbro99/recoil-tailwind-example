import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from './pages/TodoList';
import NavBar from "./components/NavBar";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
