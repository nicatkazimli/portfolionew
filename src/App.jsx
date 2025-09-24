import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import HomePage from './menu/HomePage/HomePage'
import AboutPage from './menu/AboutPage/AboutPage'
import Header from './Layout/Header/Header'
import ContactPage from './menu/ContactPage/ContactPage'

const Portfolio = lazy(() => import('./menu/Portfolio/Portfolio'));

const App = () => {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element ={<ContactPage />} />
        <Route
  path="/portfolio"
  element={
    <Suspense fallback={<div>Yüklənir...</div>}>
      <Portfolio />
    </Suspense>
  }
/>
      </Routes>
    </Router>
  )
}

export default App

