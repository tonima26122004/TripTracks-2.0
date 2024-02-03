import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Register1 from './Components/Register1';
import Register2 from './Components/Register2';
import Register3 from './Components/Register3';
import Choose from './Components/Choose';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/' element={<Register />} />
      <Route path='/Register1' element={<Register1 />} />
      <Route path='/Register2' element={<Register2 />} />
      <Route path='/Register3' element={<Register3 />} />
      <Route path='/Choose' element={<Choose />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
