import React from 'react';
import Landing from "../LandingPage/LandingPage";
import Home from "../Home/Home";
import {Routes, Route} from 'react-router-dom'

const Switch = () => {
    return (
       <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
       </Routes>
    );
}

export default Switch;