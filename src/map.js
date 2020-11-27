import React from "react";
import Select from 'react-select';
import Tabs from "./Tabs";
import Tab from "./Tab";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Text, View, StyleSheet } from 'react-native';
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import offlayout from "./officelayout.jpg";
import person from "./bala.jpg";

const options = [
    {value:'Balamurugan', label:'Balamurugan'},
    {value:'Micheal', label:'Micheal'},
    {value:'Mark', label:'Mark'}
]

const Dropdownbox = () => (
    <Select options={options} />
)

const deskoptions = [
    {value:'100', label:'100'},
    {value:'101', label:'101'},
    {value:'102', label:'102'}
]

const Deskdropdown = () => (
    <Select options={deskoptions} />
)

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

  

render(){
    return(
        <Tabs >
    
 <div label="People" >
 <img style={{float:'right', marginRight:'30%'}} src={offlayout} alt="Layout of Office" />             
 <div style={{width:'30%', marginLeft:'30px'}}>
   <h3> Select Employee Name</h3> <br/>
   
   {/* <DropdownButton id="dropdown-basic-button" title="Employee List">
     <Dropdown.Item href="#/action-1">Action</Dropdown.Item> <br />
     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> <br />
     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </DropdownButton> <br />
    */}         
      
        <Dropdownbox />
         <br />
         <Image src={person} rounded /> <br/>
         <label>Name</label> <br /> <br/>
         <label>Designation</label> <br/> <br/>
             
           
   <table >
     <tr>
         <th style={{paddingRight:'20px'}}>Week Days</th>
         <th>DeskBooked</th>
         
     </tr>
     <tr >
         <td>Mon</td>
         <td></td>           
         
     </tr>
     <tr >
         <td>Tue</td>
         <td></td>           
         
     </tr>
     <tr >
         <td>Wed</td>
         <td></td>           
         
     </tr>
     <tr >
         <td>Thu</td>
         <td></td>           
         
     </tr>
     <tr >
         <td>Fri</td>
         <td></td>           
         
     </tr>
     <tr >
         <td>Sat</td>
         <td></td>           
         
     </tr>
     </table>
         <br/>
         </div>
         </div>
 <div label="Desk" style={{width:'30%'}}>
 <img style={{float:'right', marginRight:'30%'}} src={offlayout} alt="Layout of Office"  />             
     <h3>Select Desk Number</h3> <br />
     <div style={{width:'30%', marginLeft:'30px'}}>
     {/* <DropdownButton id="dropdown-basic-button" title="Desk Number">
     <Dropdown.Item href="#/action-1">Action</Dropdown.Item> <br />
     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> <br />
     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </DropdownButton> <br /> */}
        <Deskdropdown /> <br/>

   <h3> Desk Assigned for People</h3> <br/>
   <table >
     <tr>
         <th style={{paddingRight:'20px'}}>Week Days</th>
         <th style={{paddingRight:'20px'}}>Person</th> 
         <th style={{paddingRight:'20px'}}>Department</th>
     </tr>
     <tr >
         <td>Mon</td>
         <td> </td>           
         <td></td>
     </tr>
     <tr >
         <td>Tue</td>
         <td></td>           
         <td></td>
     </tr>
     <tr >
         <td>Wed</td>
         <td></td>           
         <td></td>
     </tr>
     <tr >
         <td>Thu</td>
         <td></td>           
         <td></td>
     </tr>
     <tr >
         <td>Fri</td>
         <td></td>           
         <td></td>
     </tr>
     <tr >
         <td>Sat</td>
         <td></td>           
         <td></td>
     </tr>
     </table>
 </div>
 </div>
</Tabs>

    )
}
}

export default Map;
 