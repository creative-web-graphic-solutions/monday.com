import React, { Component } from "react";
import "./Menu.css";
import {Navbar, Nav } from "react-bootstrap";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {one, two, three, four, five, six} from "./Components";
import {LayoutOne, LayoutTwo, LayoutThree, LayoutFour, LayoutFive, LayoutSix} from "./layout";
import Tree from"./Treeview";

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

 
class Menu extends Component {
  render() {
    var visibility ;
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <BrowserRouter>
       
        <h2 style={{textAlign:'center'}}>Team Seating Plan</h2>
         <nav style={{paddingTop:'15px',paddingLeft:'10px'}}>
           <Link to="/chart"> Organization Chart </Link>
           <Link to="/uploadlayout"> Upload Office Layout </Link>
           <Link to="/booknow"> Layout(Book Now)</Link> 
           <Link to="/schedules">Schedules </Link>
           <Link to="/analytics">Analytics </Link>
           <Link to="/map"> Map </Link>
          </nav>
        
  
  <Switch>
  <RouteWrapper path="/chart" component={one} layout={LayoutOne} />
  <RouteWrapper path="/uploadlayout" component={two} layout={LayoutTwo} />
  <RouteWrapper path="/booknow" component={three} layout={LayoutThree} />
  <RouteWrapper path="/schedules" component={four} layout={LayoutFour} />
  <RouteWrapper path="/analytics" component={five} layout={LayoutFive} />
  <RouteWrapper path="/map" component={six} layout={LayoutSix} />
  </Switch>
  
  </BrowserRouter>

      </div>
    );
  }
}
 
export default Menu;