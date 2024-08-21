import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
