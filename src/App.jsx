import React from 'react'
import './App.css'
import NavBar from './header/NavBar'
import Home from './Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path ='/' element = {<Home />}/>
        <Route path ='/home' element = {<Home/>}/>
        <Route path ='/contact' element = {<Register/>}/>
        <Route path ='/about' element = {<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
