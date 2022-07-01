import React from 'react'
import FoodComponent from './FoodComponent'
import Sidebar from './Sidebar'
import "./Home.css";
function Home() {
  return (
    <div className="home">
        <Sidebar></Sidebar>
        <FoodComponent></FoodComponent>
    </div>
  )
}

export default Home