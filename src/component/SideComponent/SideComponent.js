import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './SideComponent.css';

function SideComponent(props) {
    return (
        <>
            <Meeting />
            <News/>
            <IncommingEvent/>

        </>
    );
}


export default SideComponent;


function Meeting(props) {
    return (
        <Card border="primary" className="card" >
            <Card.Header>Monthly Meeting</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <span className="h4">Saturday: </span> 13th, July 2019 at 8:30pm <br />
                    <span className="h4">Adresse: </span>: 5754 Vinings Retrait Way SW Mableton, GA 30126.<br />
                    <span className="h4">Reception:</span> Mr. Noufi Thomas <br />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

function News(props) {
    return (
        <Card border="primary" className="card">
            <Card.Header>News</Card.Header>
            <ListGroup  variant="flush" style={{width:"95%", margin:"0 auto", paddingBottom:"10px"}}>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
           
            
        </Card>
    )
}

function IncommingEvent(props) {
    return (
        <Card border="primary" className="card">
            <Card.Header>Events</Card.Header>
            <ListGroup variant="flush" style={{width:"95%", margin:"0 auto", paddingBottom:"10px"}}>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}