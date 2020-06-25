import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from './dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
//import {Switch, Route, Redirect} from 'react-router-dom'
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }


  render() {
    return (
      <div>
        
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;