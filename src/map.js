import React from "react";
import Select from 'react-select';
import Tabs from "./Tabs";
import Tab from "./Tab";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Text, View, StyleSheet } from 'react-native';
import Firebase from 'firebase';
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
            peoples: [],
        }
        
    }

    componentDidMount() {
        let ref = Firebase.database().ref('Booking/NewBooking');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });         
    
    }
 

render(){
    let peoplelist = Firebase.database().ref('Booking/NewBooking');
      let peoples = this.state.peoples;
      let options = peoples.map((people) =>
            <option key={people.Name}>{people.Name}</option>
            );
    return(
        <Tabs >
    
 <div label="People" >
 <img style={{float:'right', marginRight:'30%'}} src={offlayout} alt="Layout of Office" />             
 <div style={{width:'30%', marginLeft:'30px'}}>
   <h3> Select Employee Name</h3> <br/>
            <Dropdownbox state={this.state.peoples} />
            <div className='row'>
        <div className='col-xl-12'>
        { 
          peoples
          .map(people => 
            <div key={people.uid} className="card float-left" style={{width: '18rem', marginRight: '1rem'}}>
              <div className="card-body">
                <h5 className="card-title">{ people.name }</h5>
                <p className="card-text">{ people.division }</p>
                {/* <button onClick={ () => this.removeData(employee) } className="btn btn-link">Delete</button> */}
                {/* <button onClick={ () => this.updateData(employee) } className="btn btn-link">Edit</button> */}
              </div>
            </div>
            )
        } 
        </div>
      </div>

            {/* <Select options={this.state.optionItems} /> */}
        {/* <div>
            <select>
                {optionItems}
            </select>
        </div> */}
   {/* <DropdownButton id="dropdown-basic-button" title="Employee List">
     <Dropdown.Item href="#/action-1">Action</Dropdown.Item> <br />
     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> <br />
     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </DropdownButton> <br />
    */}         
      
        
         <br />
         <Image src={person} rounded /> <br/>
         <label>Name: Balamurugan D</label> <br /> <br/>
         <label>Designation : Software Engineer </label> <br/> <br/>
             
           
   <table >
     <tr>
         <th style={{paddingRight:'20px'}}>Week Days</th>
         <th>DeskBooked</th>
         
     </tr>
     <tr >
         <td>Mon</td>
         <td>100</td>           
         
     </tr>
     <tr >
         <td>Tue</td>
         <td>110</td>           
         
     </tr>
     <tr >
         <td>Wed</td>
         <td>110</td>           
         
     </tr>
     <tr >
         <td>Thu</td>
         <td>115</td>           
         
     </tr>
     <tr >
         <td>Fri</td>
         <td>115</td>           
         
     </tr>
     <tr >
         <td>Sat</td>
         <td>115</td>           
         
     </tr>
     </table>
         <br/>
         </div>
         </div>
 <div label="Desk" style={{width:'30%'}}>
 <img style={{float:'right', marginRight:'30%'}} src={offlayout} alt="Layout of Office"  />             
     <h3>Select the Desk Number</h3> <br />
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
         <th style={{paddingRight:'10px'}}>Week Days</th>
         <th style={{paddingRight:'40px'}}>Person</th> 
         <th style={{marginLeft:'40px'}}>Department</th>
     </tr>
     <tr >
         <td>Mon</td>
         <td>Balamurugan</td>           
         <td>Dev Team</td>
     </tr>
     <tr >
         <td>Tue</td>
         <td>Balamurugan</td>           
         <td>Dev Team</td>
     </tr>
     <tr >
         <td>Wed</td>
         <td>Micheal</td>           
         <td>Admin</td>
     </tr>
     <tr >
         <td>Thu</td>
         <td>Micheal</td>           
         <td>Admin</td>
     </tr>
     <tr >
         <td>Fri</td>
         <td>Thomas</td>           
         <td>SEO</td>
     </tr>
     <tr >
         <td>Sat</td>
         <td>Thomas</td>           
         <td>SEO</td>
     </tr>
     </table>
 </div>
 </div>
</Tabs>

    )
}
}

export default Map;
 