import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [mobileMenu,setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true}>Home</Link></li>
        <li><Link to="programs" smooth={true}  offset={-250} >Program</Link></li>
        <li><Link to="about" smooth={true} offset={-120}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-250}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-250}>Testimonilas</Link></li>
        <li><Link className='btn' to="contact" smooth={true} offset={-230}>Contact Us</Link></li>
      </ul>
      <img src={menu} className='menuIcon' alt="" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
