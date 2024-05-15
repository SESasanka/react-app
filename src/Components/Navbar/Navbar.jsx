import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'

function Navbar() {

  const [menu,setMenu] = useState("home")

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><a href="#home"><p onClick={()=>setMenu("home")} >Home</p></a>{menu==="home"? <img src={underline} />:<></>}</li>
            <li><a href="#about"><p onClick={()=>setMenu("about")}>About Me</p></a>{menu==="about"? <img src={underline} />:<></>}</li>
            <li><a href="#services"><p onClick={()=>setMenu("services")}>Services</p></a>{menu==="services"? <img src={underline} />:<></>}</li>
            <li><a href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></a>{menu==="work"? <img src={underline} />:<></>}</li>
            <li><a href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></a>{menu==="contact"? <img src={underline} />:<></>}</li>
        </ul>
        <a href="#contact"><div className="nav-content">Connect with Me</div></a>
    </div>
  )
}

export default Navbar