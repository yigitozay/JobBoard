import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/NavBar/navbar'; 
import LandingPage from './Components/LandingPage/Landingpage'; 
import MainPage from './Components/MainPage/mainpage'; 
import Profile from './Components/Profile/Profile'; 
import TrackedJobsPage from './Components/MainPage/JobTable';

function App() {
  
  return (
    <Router>
      <Navbarr />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path = "/tracked-jobs" element= {<TrackedJobsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
