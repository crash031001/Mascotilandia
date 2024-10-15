import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom'
import HomeView from "./views/HomeView";
import InfoView from "./views/InfoView"
import LoginView from './views/LoginView';
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeView/>} />
        <Route path="/info" element={<InfoView/>} />
        <Route path="/login" element={<LoginView/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
