import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Confirm from './pages/Confirm';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Confirm" element={<Confirm />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
