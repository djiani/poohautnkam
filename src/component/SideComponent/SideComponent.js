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
            <Card.Header className="cardhearder text-center">Monthly Meeting</Card.Header>
            <Card.Body className="cardbody">
                <Card.Text>
                    <p><span class="badge badge-success">Date: </span> 10th, April 2021</p>
                    <p><span class="badge badge-success">Time: </span>  9pm </p>
                    <p><span class="badge badge-success">Join Zoom Meeting</span> https://us02web.zoom.us/j/81847247919?pwd=Ui80RUhjRnJhNDBRWGVuNDJ0bStZUT09</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

function News(props) {
    return (
        <Card border="primary" className="card">
            <Card.Header className="cardhearder text-center">News</Card.Header>
            <Card.Body className="cardbody">
                <Card.Title>Poo Haut Nkam Ga Election Week</Card.Title>
                <Card.Text>
                    <p>Date: <span class="badge badge-success">Saturday April 10th</span></p>
                </Card.Text>
            </Card.Body>
            
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