import React from "react";
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom"
import { HP1 } from './'

const Main = () => {
  return (
    <Router>
    <div id="main">
      <Routes>
        <Route path="/" element={<HP1 />}/>
      </Routes>
    </div>
    </Router>
  );
};

export default Main;
