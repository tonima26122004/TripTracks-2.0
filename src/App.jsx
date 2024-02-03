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
<<<<<<< HEAD
      <Route path='/Home' element={<Home />} />
      <Route path='/planning' element={<Planning />} />
      <Route path='/review' element={<Review />} />
      <Route path='/' element={<Register />} />
      <Route path='/register1' element={<Register1 />} />
      <Route path='/register2' element={<Register2 />} />
      <Route path='/register3' element={<Register3 />} />
      <Route path='/Choose' element={<Choose />} />
=======
      <Route path='/home' element={<Home />} />
      <Route path='/choose' element={<Choose />} />
      <Route path='/planning' element={<Planning />} />
      <Route path='/review' element={<Review />} />
      <Route path='/' element={<Signup />} />
>>>>>>> ea27b4fcb55b7e871da702a41c8a82106547b929
    </Routes>
  </BrowserRouter>
  )
}

export default App;
