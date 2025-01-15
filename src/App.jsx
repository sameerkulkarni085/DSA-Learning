import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import Array from './components/ArrayPage/index';
import LinkedList from "./components/LinkedList/index";
import Searching from "./components/Searching/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<Array />} />
        <Route path="/linkedlist" element={<LinkedList />} />
        <Route path="/searching" element={<Searching />} />
      </Routes>
    </Router>
  );
};

export default App;
