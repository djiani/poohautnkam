import React from 'react';
import {Card} from 'react-bootstrap';
import './OurVision.css';


function OurVision(props){
    return (
        <div className="ourvision">
            <Card className="text-center mt-2">
                <Card.Header className=" h2 bg-info text-white">Who are We?</Card.Header>
                <Card.Body>
                    <Card.Text>
                    We the descendants of western region of Cameroon, people from the division of Haut-Nkam, residing in Georgia USA. 
                    • In full accordance with the above statement 
                    • Proud of our origin 
                    • Conscious of the strength of any union
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center">
            <Card.Header className=" h2 bg-warning text-white">Our Mission</Card.Header>
                <Card.Body>
                    <Card.Text>
                    To support and inspire the Haut Nkam community youth towards good education and academic success by bringing the community together to support them.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center">
            <Card.Header className="h2 bg-info text-white">Our Vision</Card.Header>
                <Card.Body>
                    <Card.Text>
                    We plan and coordinate events intended to help motivate the Haut Nkam community 
            youth of the Georgia metropolitan area to be good students, to seek academic excellence, 
            and to make their families and community proud. We create an environment 
            where our youth are recognized and rewarded for their hard work.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="text-center">
            <Card.Header className="h2 bg-warning text-white">Our Purpose</Card.Header>
                <Card.Body>
                    <Card.Text className="text-justify">
                    The purposes of the HNC-LAP are: 
                - To motivate all families in the HNC community to invest in their children education.
                - To invest as a group into the future of our youth.<br/>
                - To continuously integrate our youth into our growing community.<br/> 
                - To create and/or strengthen bonds between children and families within our community.<br/> 
                - To bring the children of our community together under a common and worthy goal which is education.<br/>
                - To prepare a next HNC generation of good, responsible, and educated Citizens. 
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}
export default OurVision;