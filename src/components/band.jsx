import React from 'react'

import './band.css';

export const Band=() =>{
  return (
    <div className="band" id="brand">
        <div className="upper">
            <h1>THE BAND</h1>
            <h4>We Love Music</h4>
            <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="lower">
            <div className="lowInner">
            <span>Name</span>
            <img src="https://www.w3schools.com/w3images/bandmember.jpg"/>
            </div>
            <div className="lowInner">
            <span>Name</span>
            <img src="https://www.w3schools.com/w3images/bandmember.jpg"/>
            </div>
            <div className="lowInner">
            <span>Name</span>
            <img src="https://www.w3schools.com/w3images/bandmember.jpg"/>
            </div>
        </div>
    </div>
  );
}

