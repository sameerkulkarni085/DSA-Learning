import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import Array from './components/ArrayPage/index';
import LinkedList from "./components/LinkedList/index";
import Searching from "./components/Searching/index";
import Sorting from "./components/Sorting/index";
import Recursion from "./components/Recursion/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<Array />} />
        <Route path="/linkedlist" element={<LinkedList />} />
        <Route path="/searching" element={<Searching />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/recursion" element={<Recursion />} />
      </Routes>
    </Router>
  );
};

export default App;
