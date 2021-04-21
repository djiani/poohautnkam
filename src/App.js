import React, { Component } from 'react';
import HeaderPage from './component/HeaderPage/HeaderPage';
import NavBar from './component/NavBar/NavBar';
import Main from './component/Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <HeaderPage/>
        <NavBar/>
        <Main/>
      </>
    );
  }
}

export default App;
