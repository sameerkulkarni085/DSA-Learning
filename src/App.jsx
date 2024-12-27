import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import Array from './components/ArrayPage/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<Array />} />
      </Routes>
    </Router>
  );
};

export default App;
