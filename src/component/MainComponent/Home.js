import React from 'react';
import {Carousel, } from 'react-bootstrap';
import bbq from '../../images/bbq.jpg';
import event1 from '../../images/event1.jpg';
import event2 from '../../images/event2.jpg';
function Home(props){
    return (
       <div>
           
            <ControlledCarousel/>
        
       </div>
    );
}


export default Home;


function ControlledCarousel() {
    
  
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bbq}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={event1}
            alt="Third slide"
          />
      
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {event2}
            alt="Third slide"
          />
{/*       
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    );
  }
  
