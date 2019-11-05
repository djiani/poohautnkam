import React from 'react';
import {Container, Image, Row, Col, Carousel} from 'react-bootstrap';
import logo from "../../images/logo_haut_nkam2.jpg";
import event1 from "../../images/logo_haut_nkam2.jpg";
import event2 from "../../images/logo_haut_nkam.jpg";
import './HeaderPage.css';


function HeaderPage(props){
    return(
    <React.Fragment>
        <Container fluid>
            <Row className="jumbotron">
                <Col sm={2} id="logo">
                   <Image src={logo} ></Image>
               </Col>
               <Col sm="8">
                    <h1>Welcome to POO Haut-Nkam Association Georgia</h1>
               </Col>
               <Col sm={2}>
                   <button className="btn btn-info">Login</button>
               </Col>
            </Row>
               
        </Container>
    </React.Fragment>);
}

export default HeaderPage;


function ControlledCarousel() {
    
  
    return (
        <Carousel>
        <Carousel.Item>
          <img
            width="100" height="100"
            src={event1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100" height="100"
            src={event2}
            alt="Third slide"
          />
      
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    );
  }
  
