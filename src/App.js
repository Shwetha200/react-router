import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Colorful from './Colorful';
import Contact from './Contact';
import Mass from './Mass';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}> </Route>
          <Route path="/Colorful" element={<Colorful />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Mass" element={<Mass />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
