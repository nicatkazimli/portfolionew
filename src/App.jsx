import React from 'react'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import HomePage from './menu/HomePage/HomePage'
import AboutPage from './menu/AboutPage/AboutPage'
import ContactPage from './menu/ContactPage/ContactPage'
import Header from './Layout/Header/Header'
import Portfolio from './menu/Portfolio/Portfolio'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />}  />
        <Route path='/portfolio' element={<Portfolio />}  />
      </Routes>
    </Router>
  )
}

export default App

