import './App.css';
import Login from './login.js';
import Home from './home'
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Gallery from './exPage.jsx';
import MealPlanner from './MealPlanner.js'
import CalendarComponent from './CalendarComponent.js';
import NewLogin from './NewLogin'
import Signup from './signup.js'
import Split from './planner.jsx'
import CreateAccount from './createAccount.js'
import CalorieCalculator from './CalCount.js'
import ArmEx from './arm.js'
import BackEx from './back.jsx'
import ChestEx from './chest.jsx';
import LegEx from './legs.jsx';
import ShouldEx from './shoulder.jsx';
import AbEx from './abs.jsx';
import RunAnalyzer from './runAnalyzer.jsx';

function App() {


  return(
    <Router>
      <Routes>
        <Route path="/login" element={<NewLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/MealPlanner" element={<MealPlanner />} />
        <Route path="/CalendarComponent" element={<CalendarComponent />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/split" element={<Split />} />
        <Route path="/CalorieCalculator" element={<CalorieCalculator />} />
        <Route path="/arms" element={<ArmEx />} />
        <Route path="/back" element={<BackEx />} />
        <Route path='/chest' element={<ChestEx />} />
        <Route path='/legs' element={<LegEx />} />
        <Route path='/shoulder' element={<ShouldEx />} />
        <Route path='/abs' element={<AbEx />} />
        <Route path='/runAnalyzer' element={<RunAnalyzer />} />
        
        
      </Routes>
    </Router>
  )






  /*
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  
  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>loding....</p>
      ): (backendData.users.map((users,i) =>
          <p key={i}>{users}</p>
      ))}
    </div>
  );
  */
}

export default App;
