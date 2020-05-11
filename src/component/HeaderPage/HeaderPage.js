import React from 'react';
import {Container, Image, Row, Col} from 'react-bootstrap';
import logo from "../../images/logo_haut_nkam3.png";
//import event1 from "../../images/logo_haut_nkam2.jpg";
//import event2 from "../../images/logo_haut_nkam.jpg";
import './HeaderPage.css';


function HeaderPage(props){
    return(
    <React.Fragment>
        <Container fluid className="header">
            <div className="bg-image"></div>
            <div className="bg-text">
                <Row >
                    <Col sm={2} id="logo">
                        <Image src={logo}  ></Image>
                    </Col>
                    <Col sm="8" className="centerBlock">
                         <h1 className="m-2">Haut-Nkam Community of Georgia</h1>                     
                    </Col>
                    <Col sm={2} className="loginButton">
                        <button className="btn btn-info m-4">Login</button>
                    </Col>
                </Row> 
            </div> 
        </Container>
    </React.Fragment>);
}

export default HeaderPage;


// function ControlledCarousel() {
    
  
//     return (
//         <Carousel>
//         <Carousel.Item>
//           <img
//             width="100" height="100"
//             src={event1}
//             alt="First slide"
//           />
//           {/* <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption> */}
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             width="100" height="100"
//             src={event2}
//             alt="Third slide"
//           />
      
//           {/* <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption> */}
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
  
