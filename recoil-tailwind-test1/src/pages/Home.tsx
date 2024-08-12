import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from '../components/Header';
import NavBar from "../components/NavBar";

import Home1 from "./Home1";


const Home: React.FC = () => {
    return(
        <>
        <NavBar />
        <Header />
        <Home1 />
        <Routes>
        </Routes>
        </>
    )
}

export default Home;