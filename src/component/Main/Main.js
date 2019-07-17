import React from 'react';
import MainComponent from '../MainComponent/MainComponent';
import SideComponent from '../SideComponent/SideComponent';
import { Container } from 'react-bootstrap';
import {Row, Col, } from 'react-bootstrap';

function Main(props){
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Welcome to POO Haut-Nkam Association Georgia</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={9}>
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