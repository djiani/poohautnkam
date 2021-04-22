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
                    <span className="badge badge-success">Date:</span> 10th, April 2021 <br/>
                    <span className="badge badge-success">Time:</span> 9pm <br/>
                    <a href=" https://us02web.zoom.us/j/81847247919?pwd=Ui80RUhjRnJhNDBRWGVuNDJ0bStZUT09" className="btn btn-block btn-link">Click to Join Zoom Meeting</a>
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
                <Card.Title>Election Week</Card.Title>
                <Card.Text>
                     <span className="badge badge-success">Date:</span> Saturday April 10th
                </Card.Text>
            </Card.Body>
            
        </Card>
    )
}

function IncommingEvent(props) {
    return (
        <Card border="primary" className="card">
            <Card.Header className="cardhearder text-center">Events</Card.Header>
            <ListGroup variant="flush" style={{width:"95%", margin:"0 auto", paddingBottom:"10px"}}>
                <ListGroup.Item>No InComming Events</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}