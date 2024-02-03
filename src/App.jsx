import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Review from "./Components/Review";
import Planning from "./Components/Planning";
import Signup from "./Components/Signup";
import Choose from "./Components/Choose";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/choose' element={<Choose />} />
      <Route path='/planning' element={<Planning />} />
      <Route path='/review' element={<Review />} />
      <Route path='/' element={<Signup />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
