
 import './tour.css';
import {Button} from 'antd'
export const Tour=() =>{
  return (
    <div className="tourContainer" id="tour">
        <div className="tourwrap">
            <div className="Ttitle">
                 <h1 style={{color:"white"}}>TOUR DATES</h1>
                <p>Remember to book your tickets!</p>
            </div>
            <div className="Tinput">
                <input type="text" placeholder="September"/>
                <input type="text" placeholder="Octomber"/>
                <input type="text" placeholder="November"/>
                <div className="sol1">
                    <Button type="primary" danger >Shold out</Button>
                </div>
                <div className="sol2">
                    <Button type="primary" danger style={{backgroundColor:"black"},{color:"white"}} >Shold out</Button>
                </div>
            </div>
             <div className="Tplace">
                <div className="place">
                     <img src="https://www.w3schools.com/w3images/newyork.jpg"/>
                     <div className="inner-place">
                        <h5 style={{fontWeight:"800"}}>New York</h5>
                        <span>Fri 27 Nov 2016</span>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <Button>Buy Tickets</Button>
                     </div>
                </div>
                <div className="place">
                     <img src="https://www.w3schools.com/w3images/paris.jpg"/>
                     <div className="inner-place">
                        <h5 style={{fontWeight:"800"}}>Paris</h5>
                        <span>Sat 28 Nov 2016</span>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <Button>Buy Tickets</Button>
                     </div>
                </div>
                <div className="place">
                     <img src="https://www.w3schools.com/w3images/sanfran.jpg"/>
                     <div className="inner-place">
                        <h5 style={{fontWeight:"800"}}>San Francisco</h5>
                        <span>Sun 29 Nov 2016</span>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <Button>Buy Tickets</Button>
                     </div>
                </div>
             </div>
        </div>
    </div>
  );
}
