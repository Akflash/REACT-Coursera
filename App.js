import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css'
import Main from './MainComponent'
import {BrowserComponent} from 'react-router-dom'


class App extends Component {

    render() {
      return (
          <BrowserComponent>
          <div className="App">
          <Main />
        </div>
          </BrowserComponent>
        
      );
    }
  }

export default App;