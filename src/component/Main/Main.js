import React from 'react';
import MainComponent from '../MainComponent/MainComponent';
import SideComponent from '../SideComponent/SideComponent';
import { Container } from 'react-bootstrap';
import {Row, Col, } from 'react-bootstrap';
import  './Main.css';

function Main(props){
    return (
        <Container className="Main">
            <Row>
                <Col sm={9} >
                    <MainComponent> ${props.children}</MainComponent>
                </Col>
                <Col sm={3}>
                    <SideComponent>${props.children}</SideComponent>
                </Col>
            </Row>
        </Container>
    );
}


export default Main;