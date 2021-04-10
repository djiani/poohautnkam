import React from 'react';
//import { returnStatement } from '@babel/types';
import { Col, Row, Card, Accordion } from 'react-bootstrap';
import './aboutus.css';

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
            <Accordion.Toggle as={Card.Header} eventKey="2">
            2014-2016
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
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
        img: require('../../../images/pp2.jpg'), 

    },
    {
        post: "Vice President 1 ",
        name: "Thomas Nouafi", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: require('../../../images/pp2.jpg') 
    },
    {
        post: "Vice President 1 ",
        name: "Thomas Nouafi", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: require('../../../images/pp2.jpg') 
    },
    {
        post: "Vice President 1 ",
        name: "Thomas Nouafi", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: require('../../../images/pp2.jpg') 
    },
    {
        post: "Vice President 1 ",
        name: "Thomas Nouafi", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: require('../../../images/pp2.jpg') 
    }
    
    ]


    render(){
        const listTeamExecutive = this.teams.map(function(team, index){
            return(
                <Col xs={12} sm={6} md={3}>
                    <Card  bg={"light"}
                        key={index}
                        text= {'dark'}
                        >
                        <Card.Img variant="top" src={team.img} style={{height:100, width:"100%"}}/>
                        <Card.Body style={{height:120, width:"100%"}} >
                            <h6>{team.post}</h6>
                            <div className="team">
                                <span> {team.name} </span>
                                <span> {team.tel} </span>
                                <span> {team.email} </span>
                            </div>
                            
                            
                        </Card.Body>
                        </Card>
                </Col>
            //     <Col xs={12} sm={4} md={3}>
            //         <div className="card">
            //             <Card.Img variant="top" src={team.img} style={{height:100, width:"100%", margin: "0 auto"}}/>
            //             <div className="container">
            //                 <h5>{team.name}</h5>
            //                 <p className="title">{team.post}</p>
            //                 <p>{team.tel}.</p>
            //                 <p>{team.email}</p>
            //                 <p><button className="button">Contact</button></p>
            //             </div>
            //         </div>
            //   </Col>  

            )
        })
        

      

        return (
            <Row>
                {listTeamExecutive}
            </Row>
        )
    }
}





