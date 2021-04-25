import React,{useState} from 'react';
import {Tabs, Tab, Carousel} from 'react-bootstrap';
import balafi  from './projects/balachi1.jpeg'
import ecole from './projects/ecole.jpg';
import ecole1 from './projects/ecole1.jpeg';
import ecole2 from './projects/ecole2.jpeg';
import ecole3 from './projects/ecole3.jpeg';
import ecole4 from './projects/ecole4.jpeg';


import './Projects.css';

export default function Projects(props){
  const [key, setKey] = useState('2021');

  const Projects2019= (props)=>{
    return (
      <div>
        <h2>Construction du pont sur TSI' Sakou a Balafou</h2>
        <h4>Balafi</h4>
        <p>Balafi est un village de West Cameroun....
        Lo! in the orient when the gracious light Lifts up his burning head, 
        each under eye Doth homage to his new-appearing sight, 
        Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, 
        Resembling strong youth in his middle age, Yet mortal looks adore his beauty still, 
        Attending on his golden pilgrimage: But when from highmost pitch, with weary car, 
        Like feeble age, he reeleth from the day
      </p>
      <h4>Projects description</h4>
      <p>Lo! in the orient when the gracious light Lifts up his burning head, 
        each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; 
        And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, 
        Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: 
        But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,
      </p>
      <Carousel className="project">
        <Carousel.Item>
          <img className="img-fluid d-block mx-auto "  src={balafi} alt="second slide"/>
        </Carousel.Item>
      </Carousel>

      <h4>Project After completion</h4>
      <p>Lo! in the orient when the gracious light Lifts up his burning head, 
        each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; 
        And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, 
        Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: 
        But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,</p>

        <Carousel className="project">
        <Carousel.Item>
          <img className="img-fluid d-block mx-auto " src= {balafi} alt="Four slide"/>
        </Carousel.Item>
        
      </Carousel>
      <h3>We give a very thanks Everyone that contributed to this project</h3>
      </div>

    );
  }

  const Projects2018= (props)=>{
    return (
      <div>
        <h2>Projet 2018 rénovation école Mbalembo</h2>
        <h4>Mbalembo</h4>
        <p>Balafi est un village de West Cameroun....
        Lo! in the orient when the gracious light Lifts up his burning head, 
        each under eye Doth homage to his new-appearing sight, 
        Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, 
        Resembling strong youth in his middle age, Yet mortal looks adore his beauty still, 
        Attending on his golden pilgrimage: But when from highmost pitch, with weary car, 
        Like feeble age, he reeleth from the day
      </p>
      <h4>Projects description</h4>
      <p>Lo! in the orient when the gracious light Lifts up his burning head, 
        each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; 
        And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, 
        Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: 
        But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,
      </p>
      <Carousel className="project">
        <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto "
            src={ecole}
            alt="second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto  "
            src= "https://sergemaillimediastudio.zenfolio.com/img/s/v-10/p3426947615-2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block mx-auto "
            src= {balafi}
            alt="Four slide"
          />
        </Carousel.Item>
      </Carousel>

      <h4>Project After completion</h4>
      <p>Lo! in the orient when the gracious light Lifts up his burning head, 
        each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; 
        And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, 
        Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: 
        But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,</p>

        <Carousel className="project">
        
        <Carousel.Item>
          <img className="img-fluid d-block mx-auto " src={ecole1} alt="second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid d-block mx-auto " src={ecole2} alt="second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid d-block mx-auto " src={ecole3} alt="second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid d-block mx-auto " src={ecole4} alt="second slide"/>
        </Carousel.Item>
      </Carousel>
      <h3>We give a very thanks Everyone that contributed to this project</h3>
      </div>

    );
  }
    return (
      <>
      <h4>Projects Realized by Poo haut Nhautnkam</h4>
      <p>Choose the year the wiew what projects what done on that year</p>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="2021" title="2021">
        <Projects2019 />
      </Tab>
      <Tab eventKey="2019" title="2019">
        <Projects2018/>
      </Tab>
      <Tab eventKey="2018" title="2018">
        <Projects2019 />
      </Tab>
      <Tab eventKey="2017" title="2017">
        <Projects2019 />
      </Tab>
    </Tabs>
    </>);
}




