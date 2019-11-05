import React from 'react';
//import { returnStatement } from '@babel/types';
import { Col, Row, Card, Accordion } from 'react-bootstrap';


function AboutUs(props){
    return (
    <div> 

        <Accordion defaultActiveKey="0">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
            2018-Present
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
                <h1>Executive Team from 2018 to Present</h1>
                <ExecutiveTeam />
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
            2016-2018
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
            <Card.Body>
                <h1>Executive Team from 2016 to 2018</h1>
                <ExecutiveTeam />
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
            2014-2016
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
            <Card.Body>
                <h1>Executive Team from 2014 to 2016</h1>
                <ExecutiveTeam />
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    </div>
    );
}


export default AboutUs;

class ExecutiveTeam extends React.Component{
    teams = [{
        post: "President",
        name: "Thomas Nouafi", 
        email: "thomas@gmail.com",
        tel: "478 387-4572",
        img: require('../../images/pp2.jpg'), 

    },
    {
        post: "Vice President 1 ",
        name: "Thomas Nouafi", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: require('../../images/pp.jpg') 
    },
    {
        post: "Vice President 1 ",
        name: "Thomas Nouafi", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: require('../../images/pp.jpg') 
    },
    {
        post: "Vice President 1 ",
        name: "Thomas Nouafi", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: require('../../images/pp.jpg') 
    },
    {
        post: "Vice President 1 ",
        name: "Thomas Nouafi", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: require('../../images/pp.jpg') 
    }
    
    ]


    render(){
        const listTeamExecutive = this.teams.map(function(team){
            return(
                <Col xs={12} sm={6} md={4}>
                    <Card >
                        <Card.Img variant="top" src={team.img} style={{height:250, width:"80%", margin: "0 auto"}}/>
                        <Card.Body>
                            <Card.Title>{team.post}</Card.Title>
                            <Card.Text>
                            <ul>
                                <li>Name: {team.name} </li>
                                <li>Tel: {team.tel}</li>
                                <li>Email: {team.email}</li>
                            </ul>{team.description}
                            
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                </Col>
            )
        })
        

        return (
            <Row>
                {listTeamExecutive}
            </Row>
        )
    }
}





