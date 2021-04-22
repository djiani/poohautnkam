import {Form, Container, Row, Col, Button} from 'react-bootstrap';
import './Contactus.css';


export default function Contactus(){
    return(
        <Container className="contactus">
            <h5 className="mt-2"> You can contact us by Mail, Phone or by email using the information below</h5>
            <Row >
                <Col sm={12} md={6} >
                    <h5>By Mail</h5>
                    <ul>
                        <li>Cameroon Community of Georgia, Inc</li>
                        <li>1221 Cumberland Creek Pl SW</li>
                       <li> Marietta, GA 30008</li>
                    </ul>
                </Col>
                <Col sm={12} md={6}>
                    <h5>By Phone </h5>
                    <p>Call us at (770) 906 6715</p>
                </Col>
            </Row>
            <Form> 
                <h5>Send us an email with by filling this form</h5>
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
      </Container>

    )
}