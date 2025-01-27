import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css'
import Main from './MainComponent'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configure';

const store = ConfigureStore();
class App extends Component {

    render() {
      return (
        <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
          
        
      );
    }
  }

export default App;