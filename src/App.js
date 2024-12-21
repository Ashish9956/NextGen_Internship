import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div >
   
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path='/login'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
                <Route path="/register" element={<Register/>} />
            </Routes>
  
    </div>
  );
}

export default App;
