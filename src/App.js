import React, { Component } from 'react';
import HeaderPage from './component/HeaderPage/HeaderPage';
import NavBar from './component/NavBar/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <HeaderPage/>
        <NavBar/>
        <h1>body text here!!!</h1>
        
      </>
    );
  }
}

export default App;
