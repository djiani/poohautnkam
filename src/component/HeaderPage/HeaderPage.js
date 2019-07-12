import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';


function HeaderPage(props){
    return(
    <React.Fragment>
        <Jumbotron fluid>
            <Container>
                <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
                </p>
            </Container>
        </Jumbotron>
    </React.Fragment>);
}

export default HeaderPage;