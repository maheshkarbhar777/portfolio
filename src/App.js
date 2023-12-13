import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Assuming you are using BrowserRouter
import Home from './Pages/Home/Homescreen';
import Navbar from './Pages/Home/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='*' element={<div>404 Page Not Found</div>}></Route>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
