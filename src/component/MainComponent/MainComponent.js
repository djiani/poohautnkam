import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../MainComponent/Home';
import AboutUs from '../MainComponent/AboutUs';
import Projects from '../MainComponent/Projects';



function MainComponent(props){
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route  path="/aboutus/:id" component={AboutUs}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/membership" component={Projects}/>
            <Route exact path="/report" component={Projects}/>
        </Router>
    );
}


export default MainComponent;