import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img 
          src='https://img.icons8.com/?size=100&id=22skWjUReayF&format=png&color=000000' 
          width={35} 
          alt="Logo" 
        /> 
        <span>VIDEOGRAPH</span>
      </div>

      <nav>
        <Link to='/'>Ana səhifə</Link>
        <Link to='/about'>Haqqımda</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact'>Əlaqə</Link>
      </nav>

      <div className="social">
        <img className='svg' src='https://img.icons8.com/?size=100&id=hFoVFpm6gl9A&format=png&color=000000' width={30} /> <a href="#"><i className="fab fa-facebook-f">instagram</i></a>
       <img className='svg' src='https://img.icons8.com/?size=100&id=GN6LgEfShU2b&format=png&color=000000' width={30} /> <a href="#"><i className="fab fa-instagram">tiktok</i></a>
        <img className='svg' src='https://img.icons8.com/?size=100&id=118562&format=png&color=000000' width={30} /> <a href="#"><i className="fab fa-twitter"></i>facebook</a>
      </div>
    </div>
  )
}

export default Header
