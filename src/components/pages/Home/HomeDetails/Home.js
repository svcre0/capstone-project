import React from "react";
import ShopCards from  "./shopCards";
import './Home.css';


import HomePage from "./HomePage";
import HomeCards from "./HomeCards";
import Experiences from "./Experiences";
import Questions from "./Questions";
import Header from "../../../layout/Header/Header";

const Home = () => {
  return (
    <>
    <div className="home">
  
 <Header/>  
 <HomePage/>
 <HomeCards/>
 <Experiences/>
 <ShopCards/> 
 <Questions/>
  

    </div>
    </>
  );
};

export default Home;
