import React from 'react'
import '../App.css'
import Category from '../Components/Category';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

function Home() {
  return (
    <div>
         <Navbar/>
        <Header/>
        <Category/>
    </div>
  )
}

export default Home