import React from 'react'
import './Category.css'

function Category() {
  return (
    <div>
    <div className='grid2'>
    <h1>Categories</h1>
  </div>
<div className="grid-container">
  
 
<div className="grid-item" id="item1"></div>
  <div className="grid-item" id="item2"></div>
  <div className="grid-item" id="item3"></div>
  <div className="grid-item" id="item4"></div>
  <div className="grid-item" id="item5"></div>
  <div className="grid-item" id="item6"></div>
 
</div>
<footer className="footer">
      <div className="footer-container">
        <div className="footer-category">
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Food</a></li>
            <li><a href="#">Clothes</a></li>
            <li><a href="#">Financial Aid</a></li>
            <li><a href="#">Medical Supplies</a></li>
            <li><a href="#">Toys and Games</a></li>
            <li><a href="#">Medical Supplies</a></li>
            
          </ul>
        </div>
        <div className="footer-info">
          <h3>Contact Info</h3>
          <p>Address: 123 Main St, City, Country</p>
          <p>Email: example@example.com</p>
        
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Donation Web App. All rights reserved.</p>
      </div>
    </footer>
</div>

 
  )
}

export default Category