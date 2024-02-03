import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Review from "./Components/Review";
import Planning from "./Components/Planning";
import Register from './Components/Register';
import Register1 from './Components/Register1';
import Register2 from './Components/Register2';
import Register3 from './Components/Register3';
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
