import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import Array from './components/ArrayPage/index';
import LinkedList from "./components/LinkedList/index";
import Searching from "./components/Searching/index";
import Sorting from "./components/Sorting/index";
import Recursion from "./components/Recursion/index";
import Backtracking from "./components/Backtracking/index";
import Greedy from "./components/Greedy/index";
import Dynamic from "./components/Dynamic/index";
import Pattern from "./components/Pattern/index";
import Divide from "./components/Divide/index";
import Branch from "./components/Branch/index";
import Random from "./components/Random/index";
import StringComponent from "./components/Strings/index";
import StackComponent from "./components/Stack/index";

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
        <Route path="/backtracking" element={<Backtracking />} />
        <Route path="/greedy" element={<Greedy />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/pattern" element={<Pattern />} />
        <Route path="/divide" element={<Divide />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/random" element={<Random />} />
        <Route path="/string" element={<StringComponent />} />
        <Route path="/stack" element={<StackComponent />} /> 
      </Routes>
    </Router>
  );
};

export default App;
