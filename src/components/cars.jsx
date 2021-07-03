import React,{useState} from 'react'
import { Carousel } from 'antd';
 import './cars.css';

export const Carosol=() =>{
  return (
    <div className="carContainer"  id="caro">
   <Carousel autoplay dots={false}>
   <div className="inner-data">
        <img src="https://www.w3schools.com/w3images/ny.jpg"/>
        <div className="i-d">
          <h1>New jercy</h1>
          <p>The atmospher in new jercy</p>
      </div>
    </div>
    <div className="inner-data">
      <img src="https://www.w3schools.com/w3images/chicago.jpg"/>
      <div className="i-d">
          <h1>New York</h1>
          <p>The atmospher in new york</p>
      </div>
    </div>
    <div className="inner-data">
    <img src="https://www.w3schools.com/w3images/la.jpg"/>
    <div className="i-d">
          <h1>Los anglis</h1>
          <p>The atmospher in losk</p>
      </div>
    </div>
  </Carousel>
    </div>
  );
}

