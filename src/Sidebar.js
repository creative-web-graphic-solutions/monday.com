import React from "react";
import { slide as Menu } from "react-burger-menu";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {one, two, three, four} from "./Components";
import {LayoutOne, LayoutTwo, LayoutThree, LayoutFour} from "./layout"
  

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


export default props => {
  return (
    <Menu {...props}>
    <BrowserRouter>
  <h2> Content Main App content</h2>
  <ul>
     <li> <Link to="/chart"> Organization Chart </Link></li>
     <li> <Link to="/two"> two </Link></li>
     <li> <Link to="/three"> Three</Link> </li>
     <li> <Link to="/four">Four </Link></li>
  </ul>
  
  <Switch>
  <RouteWrapper path="/chart" component={one} layout={LayoutOne} />
  <RouteWrapper path="/two" component={two} layout={LayoutTwo} />
  <RouteWrapper path="/three" component={three} layout={LayoutThree} />
  <RouteWrapper path="/four" component={four} layout={LayoutFour} />
  </Switch>
  
  </BrowserRouter>
  </Menu>
    // Pass on our props
    // <Menu {...props}>
    //   <a className="menu-item" href="/">
    //     Home
    //   </a>
      
    //   <a className="menu-item" href="/"> Upload Layout
    //  </a>     
      

    //   <a className="menu-item" href="/Office">
    //     Office (Book Now)
    //   </a>

    //   <a className="menu-item" href="/Seat Reservation">
    //     Seat Reservation
    //   </a>

    //   <a className="menu-item" href="/Schedules">
    //     Schedules
    //   </a>

    //   <a className="menu-item" href="/Analytics">
    //     Analytics - Map
    //   </a>

    // </Menu>
  );
};

