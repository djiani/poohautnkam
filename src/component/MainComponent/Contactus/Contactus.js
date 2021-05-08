import {Form, Container, Row, Col, Button, Card} from 'react-bootstrap';
import './Contactus.css';


export default function Contactus(){
    return(
        <Container className="contactus m-2 p-2">
            <Row >
                <Col sm={12} md={6} >
                    <Card border="primary" bg="light" text= "dark" className="contactCard">
                        <Card.Body>
                            <Card.Title>Contact us by Mail</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>
                                <span>Cameroon Community of Georgia, Inc</span><br/>
                                <span>1221 Cumberland Creek Pl SW</span> <br/>
                                <span> Marietta, GA 30008</span> <br/>
                            
                            </Card.Text>
                            <Card.Link href="#">Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col sm={12} md={6}>
                    <Card border="primary" bg="light" text= "dark" className="contactCard">
                        <Card.Body>
                            <Card.Title>Contact us by Phone</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>
                                <span>Call us at (770) 906 6715</span><br/>
                                <span>Call us at (770) 906 6715</span><br/>
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Card border="primary text-center" bg="light" text= "dark" className="email_section p-4">
                <h3>Contact us by Email</h3>
                <p>Fill the form below and we will get back to you as soon as possible</p>
                    <Form className="contactForm text-left"> 
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="subject" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button type="submit" className="btn-block">Submit form</Button>
                    </Form>
            </Card>
      </Container>

    )
}