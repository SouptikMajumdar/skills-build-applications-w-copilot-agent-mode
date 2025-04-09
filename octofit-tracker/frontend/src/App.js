import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './octofitapp-small.png';

const App = () => {
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Octofit Logo" />
        <h1>OctoFit Tracker</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/activities">Activities</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/teams">Teams</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
};

export default App;
