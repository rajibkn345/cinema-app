import React from "react";
import './App.css'
import Navbar from './components/Navbar'
import Booking  from "./components/Booking"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Cinema from "./components/Cinema";
import Reserved from "./components/Reserved"



const App = () => {
  return (
    <Router>
      <Navbar /> {/* Place it here if it's part of your main layout */}
      <Routes>
        <Route path="/booking" element={<Booking />} />
        <Route path='/' element={<Cinema />} />
        
      </Routes>
    </Router>
  );
}

export default App; 