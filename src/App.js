import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Colorful from './pages/Colorful';
import Contact from './pages/Contact';
import Mass from './pages/Mass';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<Layout>
              <Homepage /></Layout>} />

          <Route path="/Colorful"
            element={<Layout>
              <Colorful /></Layout>} />
          <Route path="/Contact" 
          element={<Layout>
              <Contact /></Layout>} />
          <Route path="/Mass" element={<Mass />} />
          <Route path="*" element={<div>Not found page</div>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
