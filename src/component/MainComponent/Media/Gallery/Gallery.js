import React, {useState } from "react";
import {Row, Col, Alert, Button, ResponsiveEmbed} from 'react-bootstrap';

export default function Gallery() {
    
        const [show, setShow] = useState(false);
        const [index, setIndex] = useState(0);
        const img = [
            {url:"https://sergemaillimediastudio.zenfolio.com/p370874366/ecc43121c",
             msg: "CAMCOGA Cultural Night 2019"},
            {url:"https://sergemaillimediastudio.zenfolio.com/p773190490/e802ed8c6",
            msg: "Pooh Haut-Nkam gala 2018"},
            {url:"https://sergemaillimediastudio.zenfolio.com/p711997624/ea0e2fb8c",
            msg: "Pooh Haut-Nkam NYE"}
        ]

        if (show) {
            return (
                <Alert variant="light" onClose={() => setShow(false)} dismissible className="text-center m-auto">
                        <Alert.Heading>{img[index].msg}</Alert.Heading>
                        <ResponsiveEmbed aspectRatio="4by3" >
                            <embed  src={img[index].url} />
                        </ResponsiveEmbed>
                        <Alert.Link href="https://sergemaillimediastudio.zenfolio.com/p370874366/ecc43121c">an example link</Alert.Link>.
     
                </Alert>
            );
          }
          return( 
              <Row className="mt-2 text-center" >
                <Col sm={6} md={4} >
                    <button  onClick={() => {setShow(true); setIndex(0)}} >
                        <img src="https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947615-2.jpg" width="100%"  alt={img[0].msg} className="img-thumbnail" />
                    </button>
                    <p>{img[0].msg}</p>
                </Col>
                <Col sm={6} md={4}>
                    <button  onClick={() => {setShow(true); setIndex(1)}} >
                        <img src="https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p2150553798-2.jpg" width="100%"  alt={img[1].msg}  className="img-thumbnail"/>
                    </button>
                    <p>{img[1].msg}</p>
                </Col>
                <Col sm={6} md={4}>
                    <button  onClick={() => {setShow(true); setIndex(2)}} >
                        <img src="https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p2699230092-2.jpg" width="100%"  alt={img[2].msg} className="img-thumbnail" />
                    </button>
                    <p>{img[1].msg}</p>
                </Col>
            </Row>);
    }
    
