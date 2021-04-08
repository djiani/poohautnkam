import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from '../MainComponent/AboutUS/AboutUs';
import OurVision from '../MainComponent/OurVision';
import ByLaws from './ByLaws/ByLaws';
import Projects from '../MainComponent/Projects';
//import Gallery from './Media/Gallery'



function MainComponent(props){
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/aboutus/executive_team" component={AboutUs}/>
            <Route exact path="/aboutus/ourvision" component={OurVision}/>
            <Route exact path="/aboutus/bylaws" component={ByLaws}/>
            <Route exact path="/media/gallery" component={Projects}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/membership" component={Projects}/>
            <Route exact path="/report" component={Projects}/>
        </Router>
    );
}


export default MainComponent;