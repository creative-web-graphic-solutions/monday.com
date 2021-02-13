import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import uploadlayout from "./uploadlayout/uploadlayout";
import booknow from "./booknow/Booknow";
import DefaultChart from "./default-chart/default-chart";
import PanZoomChart from "./pan-zoom-chart/pan-zoom-chart";
import CustomNodeChart from "./custom-node-chart/custom-node-chart";
import ExportChart from "./export-chart/export-chart";
import { Banner} from "monday-ui-react-core";
import DragDropChart from "./drag-drop-chart/drag-drop-chart";
import EditChart from "./edit-chart/edit-chart";
import Schedules from "./Schedules/schedules";
import Analytics from "./Analytics/analytics";
import Map from "./Map/map";
import { MenuButton, MenuItem, DropdownChevronDown, Sun } from "monday-ui-react-core";
import EditNode from "./edit-node/edit-node";
import Exportchart from "./export-chart/export-chart";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <h1 style={{textAlign:'center'}}> Team Seating Plan</h1>
        
        {/* <MenuButton component={DropdownChevronDown} dialogPosition={MenuButton.dialogPositions.center} ariaLabel={"chevron menu icon menu button"}>
        <MenuItem icon={Sun} iconType={MenuItem.iconType.SVG} title="The sun" />
        </MenuButton>        */}
  
        <nav>
        <NavLink to="/edit-chart" activeClassName="selected">Organization Chart</NavLink>
        {/* <NavLink to="/export-chart" activeClassName="selected">Export Chart</NavLink> */}
        {/* <NavLink to="/edit-node" activeClassName="selected">Edit Node</NavLink> */}
          <NavLink to="/uploadlayout" exact activeClassName="selected">Uploadlayout</NavLink>
          <NavLink to="/booknow" activeClassName="selected">Layout(Booknow)</NavLink>
          <NavLink to="/schedules" activeClassName="selected">Schedules</NavLink>
          <NavLink to="/analytics" activeClassName="selected">Analytics</NavLink>
         
          <NavLink to="/map" activeClassName="selected">Map</NavLink>
          
          
        </nav>
        < Route path="/edit-chart" component={EditChart} />         
        {/* <Route path="/export-chart" component={Exportchart} />    */}
        {/* <Route path="/edit-node" component={EditNode} />         */}
        <Route exact path="/uploadlayout" component={uploadlayout} />
        <Route path="/booknow" component={booknow} />
        <Route path="/schedules" component={Schedules} />
        <Route path="/analytics" component={Analytics} />
        
        <Route path="/map" component={Map} />
        <Route path="/drag-drop-chart" component={DragDropChart} />
        
        
      </div>
    </Router>
  );
};

export default App;
