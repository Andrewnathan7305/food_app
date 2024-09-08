import React from 'react'
import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Explore from '../../components/Explore/Explore'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


const Home = () => {
    const [category,setCategory] =useState("ALL");
  return (
    <div>
      <Header/>
      <Explore category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/> 
    </div>
  )
}

export default Home
