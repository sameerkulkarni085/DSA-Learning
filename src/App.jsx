import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import Array from './components/ArrayPage/index';
import LinkedList from "./components/LinkedList/index";
import StringComponent from "./components/Strings/index";
import StackComponent from "./components/Stack/index"; // Ensure correct import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<Array />} />
        <Route path="/linkedlist" element={<LinkedList />} />
        <Route path="/string" element={<StringComponent />} />
        <Route path="/stack" element={<StackComponent />} /> {/* Add route for stack page */}
      </Routes>
    </Router>
  );
};

export default App;
