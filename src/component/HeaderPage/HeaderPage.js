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
                    <Col sm={2} id="logo">
                        <Image src={logo}></Image>
                    </Col>
                    <Col sm={8} className="centerBlock">
                         <h1 className="m-2">Poo Haut-Nkam Community of Georgia</h1>                     
                    </Col>
                    <Col sm={2} className="loginButton">
                        <Button className="btn btn-sm btn-info m-4" onClick={()=>alert("login form is in implementation...")} >Login</Button>
                        
                    </Col>
                </Row> 
            </div> 
        </Container>
    </React.Fragment>);
}

export default HeaderPage;

  
