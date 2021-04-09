import React from 'react';
import {Carousel } from 'react-bootstrap';
import bbq from '../../../images/bbq.jpg';
import event1 from '../../../images/event1.jpg';
import event2 from '../../../images/event2.jpg';
import logo from '../../../images/hautnkam-logo.jpg';
import './home.css';


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
        <Carousel >
          <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto  carouselImg"
            src={logo}
            alt="First slide"
          />
            <Carousel.Caption>
            <h1 className="text-primary">Poo Haut Nkam Election Week</h1>
            <p className="text-success ">Comme vous le savez tous le J.J pour les elections c est pour ce Samedi 10 Avril.  Le comite d election vous fait part des differents candidats enregistrer jusqu a ce jour.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto carouselImg"
            src={bbq}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto  carouselImg"
            src={event1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto carouselImg"
            src= {event2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
