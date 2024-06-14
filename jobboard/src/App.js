import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/NavBar/navbar'; 
import LandingPage from './Components/LandingPage/Landingpage'; 
import MainPage from './Components/MainPage/mainpage'; 
import Profile from './Components/Profile/Profile'; 

function App() {
  return (
    <Router>
      <div>
        <Navbarr />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
