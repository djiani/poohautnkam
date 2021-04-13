import React from 'react';
import { Col, Row, Card, Accordion, ListGroup } from 'react-bootstrap';
import './aboutus.css';

function AboutUs(props){
    return (
    <div> 
        <Accordion defaultActiveKey="2" className="mt-2 mb-2">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2" className="cardhearder text-center">
                <h1>2021-2023</h1>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <h1>Executive Team from 2021 to 2023</h1>
                    <ExecutiveTeam2021 />
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="cardhearder text-center">
                <h1>2019-2021</h1>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <h1>Executive Team from 2019 to 2021</h1>
                    <ExecutiveTeam2019 />
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="cardhearder text-center">
                <h1>2017-2019</h1>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <h1>Executive Team from 2017 to 2019</h1>
                    <ExecutiveTeam2017 />
                </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    </div>
    );
}


export default AboutUs;

class ExecutiveTeam2021 extends React.Component{

    teams2021 = [{
        post: "President",
        name: "Simplice Tchamna", 
        email: "simplicetchamna@gmail.com",
        tel: "478 387-4572",
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p2699231349-2.jpg",
    },
    {
        post: "Vice President",
        name: "Blaise Buyum", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p2699230080-2.jpg"
    },
    {
        post: "Deputy Secretary 1",
        name: "Merlin Mpoudeu", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },
    {
        post: "Deputy Secretary 2",
        name: "Liliane Monthé", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p2150555941-2.jpg" 
    },
    {
        post: "Treasurer",
        name: "Jacob Fomo", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },

    {
        post: "Financial Secretary",
        name: "Christelle Djeukam", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },
    {
        post: "Financial Secretary",
        name: "Hidocie Medzo", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg"
    },

    {
        post: "Chief Whip / Censeur",
        name: "Emmanuel Tchamgam", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p2699231971-2.jpg"
    }
    ]

    render(){
        const listTeamExecutive = this.teams2021.map(function(team, index){
            return(
                <Col xs={12} sm={6} md={4} key={index} className="text-center">
                    <Card  bg={"dark"}
                        key={index}
                        text= {'primary'}
                        border={"warning"}
                        >
                        <Card.Img variant="top" src={team.img} width="200px" height="135px" />
                        <Card.Body className="text-center">
                            <Card.Title>{team.post}</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                        <ListGroup variant="flush" >
                            <ListGroup.Item>{team.name}</ListGroup.Item>
                            <ListGroup.Item>{team.tel}</ListGroup.Item>
                            <ListGroup.Item>{team.email}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>)
        })
        
        return (
            <Row>
                {listTeamExecutive}
            </Row>
        )
    }
}

class ExecutiveTeam2019 extends React.Component{

    teams2019 = [{
        post: "President",
        name: "Thomas Nouafi", 
        email: "thomas@gmail.com",
        tel: "478 387-4572",
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p2699230922-2.jpg", 

    },
    {
        post: "Vice President",
        name: "Blaise Buyum", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p2699230080-2.jpg"
    },
    {
        post: "Deputy Secretary 1",
        name: "Merlin Mpoudeu", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },
    {
        post: "Deputy Secretary 2",
        name: "Liliane Monthé", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },
    {
        post: "Treasurer",
        name: "Jacob Fomo", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },

    {
        post: "Financial Secretary",
        name: "Christelle Djeukam", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },
    {
        post: "Financial Secretary",
        name: "Hidocie Medzo", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },

    {
        post: "Chief Whip / Censeur",
        name: "Emmanuel Tchamgam", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    }
    ]

    render(){
        const listTeamExecutive = this.teams2019.map(function(team, index){
            return(
                <Col xs={12} sm={6} md={4} key={index}>
                    <Card  bg={"dark"}
                        key={index}
                        text= {'primary'}
                        border={"warning"}
                        >
                        <Card.Img variant="top" src={team.img} width="200px" height="135px" />
                        <Card.Body className="text-center">
                            <Card.Title>{team.post}</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                        <ListGroup variant="flush" >
                            <ListGroup.Item>{team.name}</ListGroup.Item>
                            <ListGroup.Item>{team.tel}</ListGroup.Item>
                            <ListGroup.Item>{team.email}</ListGroup.Item>
                        </ListGroup>
                        </Card>
                </Col>)
        })
        
        return (
            <Row>
                {listTeamExecutive}
            </Row>
        )
    }
}


class ExecutiveTeam2017 extends React.Component{

    teams2017 = [{
        post: "President",
        name: "Thomas Nouafi", 
        email: "simplicetchamna@gmail.com",
        tel: "478 387-4572",
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p2699230922-2.jpg"

    },
    {
        post: "Vice President",
        name: "Sylvain Yankou", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p2150583363-2.jpg"
    },
    {
        post: "Deputy Secretary 1",
        name: "Merlin Mpoudeu", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },
    {
        post: "Deputy Secretary 2",
        name: "Liliane Monthé", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },
    {
        post: "Treasurer",
        name: "Jacob Fomo", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },

    {
        post: "Financial Secretary",
        name: "Christelle Djeukam", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },
    {
        post: "Financial Secretary",
        name: "Hidocie Medzo", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    },

    {
        post: "Chief Whip / Censeur",
        name: "Emmanuel Tchamgam", 
        email: "thomas@gmail.com",
        tel: "478 387-4572", 
        img: "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947899-2.jpg" 
    }
    ]

    render(){
        const listTeamExecutive = this.teams2017.map(function(team, index){
            return(
                <Col xs={12} sm={6} md={4} key={index}>
                    <Card  bg={"dark"}
                        key={index}
                        text= {'primary'}
                        border={"warning"}
                        >
                        <Card.Img variant="top" src={team.img} width="200px" height="135px" />
                        <Card.Body className="text-center">
                            <Card.Title>{team.post}</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                        <ListGroup variant="flush" >
                            <ListGroup.Item>{team.name}</ListGroup.Item>
                            <ListGroup.Item>{team.tel}</ListGroup.Item>
                            <ListGroup.Item>{team.email}</ListGroup.Item>
                        </ListGroup>
                    </Card>
            </Col>)
        })
        
        return (
            <Row>
                {listTeamExecutive}
            </Row>
        )
    }
}





