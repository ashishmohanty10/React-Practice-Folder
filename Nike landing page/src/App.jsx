import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Location/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
