import React, { Component } from "react";
import ReactDOM from "react-dom";
// import MenuButton from "./MenuButton";
import Menu from "./Menu";
import {Navbar, Nav } from "react-bootstrap";
import "./styles.css";
import "./Menu.css";
 
const NavItems = () =>
<>
  <a href="/chart">Organization Chart </a>
  <a href="/uploadlayout">Upload Layout</a>
  <a href="/booknow">Layout(Book Now</a>
  <a href="/reserve">Seat Reservation</a>
  <a href="/schedule">Schedules</a>
  <a href="/analytics">Analytics -Map</a>
</>



const menu = () =>
<header>
  <nav>
    <NavItems />
  </nav>
</header>

 
export default menu;