import React from 'react';
//import { returnStatement } from '@babel/types';
import { Col, Row, Card, Button } from 'react-bootstrap';

function AboutUs(props){
    return (
       <div>
           <ExecutiveTeam/>
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
    }
    
    ]


    render(){
        const listTeamExecutive = this.teams.map(function(team){
            return(
                <Col xs={12} sm={6} md={4}>
                    <Card >
                        <Card.Img variant="top" src={team.img} style={{height:250}}/>
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



function ByLaw(props){
    
}