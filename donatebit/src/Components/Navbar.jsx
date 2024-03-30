import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
        <div className="nav1">
       <h2 className='logotext'><a style={{color: "green"}} href="/">ShareBite</a></h2>
        </div>
        <div className="nav2">
   
        <li><a href="/">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="/#category">Category</a></li>
        <li><a href="#email">Email</a></li>
        <li><a href="/fund">Fundraiser</a></li>

        </div>
      
        
    </div>
  )
}

export default Navbar