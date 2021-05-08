import React from 'react';
import MainComponent from '../MainComponent/MainComponent';
import SideComponent from '../SideComponent/SideComponent';
import { Container } from 'react-bootstrap';
import {Row, Col, } from 'react-bootstrap';
import  './Main.css';

function Main(props){
    return (
        <Container className="main">
            <Row>
                <Col xs={12} sm={8} md={9}>
                    <MainComponent> ${props.children}</MainComponent>
                </Col>
                <Col xs={12} sm={4} md={3}>
                    <SideComponent>${props.children}</SideComponent>
                </Col>
            </Row>
        </Container>
    );
}


export default Main;