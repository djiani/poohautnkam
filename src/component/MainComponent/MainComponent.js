import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUS/AboutUs';
import OurVision from './OurVision/OurVision';
import ByLaws from './ByLaws/ByLaws';
import Projects from './Projects/Projects';
import Gallery from './Media/Gallery/Gallery';
import Donate from './Donate/Doante';
import Membership from './Membership/Membership';
import Contactus from './Contactus/Contactus';
import Events from './Events/Events';



function MainComponent(props){
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/aboutus/executive_team" component={AboutUs}/>
            <Route exact path="/aboutus/ourvision" component={OurVision}/>
            <Route exact path="/aboutus/membership" component={Membership}/>
            <Route exact path="/aboutus/bylaws" component={ByLaws}/>
            <Route exact path="/media/gallery" component={Gallery}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/donate" component={Donate}/>
            <Route exact path="/contactus" component={Contactus}/>
        </Router>
    );
}


export default MainComponent;