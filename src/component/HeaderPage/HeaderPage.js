import React from 'react';
import {Container, Image, Row, Col, Button} from 'react-bootstrap';
import logo from "../../images/logo_haut_nkam3.png";
import './HeaderPage.css';


function HeaderPage(props){
    return(
    <React.Fragment>
        <Container fluid className="header">
            <div className="bg-image"></div>
            <div className="bg-text">
                <Row >
                    <Col  md={2} className="d-none d-md-block">
                        <Image src={logo}></Image>
                    </Col>
                    <Col sm={12} md={8} className="centerBlock">
                         <h3 className="m-sm-2">Pooh Haut-Nkam Cultural Association Georgia USA</h3>                     
                    </Col>
                    <Col md={2} className="loginButton d-none d-md-block">
                        <Button className="btn btn-sm btn-info m-4" onClick={()=>alert("login form is in implementation...")} >Login</Button>
                    </Col>
                </Row> 
            </div> 
        </Container>
    </React.Fragment>);
}

export default HeaderPage;

  
