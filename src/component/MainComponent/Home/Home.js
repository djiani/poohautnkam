import React from 'react';
import {Carousel } from 'react-bootstrap';
import bbq from '../../../images/images/bbq.jpg';
import event1 from '../../../images/images/event1.jpg';
import event2 from '../../../images/images/event2.jpg';
import gala_2017 from '../../../images/images/gala_2017.jpg';
import fund_raising_2018 from '../../../images/images/fund_raising_2018.jpg';
import hautnkam_bbq_2019 from '../../../images/images/hautnkam_bbq_2019.jpg';
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
      <Carousel className="home">
        <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto carouselImg"
            src={bbq}
            alt="second slide"
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
            alt="Four slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto carouselImg"
            src= {gala_2017}
            alt="fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto carouselImg"
            src= {fund_raising_2018}
            alt="sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto carouselImg"
            src= {hautnkam_bbq_2019}
            alt="seventh slide"
          />
        </Carousel.Item>

      </Carousel>
    );
  }
  
