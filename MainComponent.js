import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from './dishes';
import { COMMENTS } from './comments';
import { LEADERS } from './leaders';
import { PROMOTIONS } from './promotions';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom'
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders : LEADERS,
        promotions : PROMOTIONS
        
    };
  }


  render() {
    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) =>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured )[0]}
        leader={this.state.leaders.filter((leader) => leader.featured )[0]}
        />
      )
    }
    return (
      <div>
        
        <Header />
        <Switch>
              <Route path='/home' > <HomePage /> </Route>
              <Route exact path = '/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path = '/contactus' component ={Contact} />
              <Redirect to="/home" />
          </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;