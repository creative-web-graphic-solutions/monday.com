import React, { Component } from 'react';
import "./styles.css";

class Analytics extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
        Reservations: [
                { id: 1, Bookedby: "Mark", Team: "Admin Team", TableName: "103", FromDate:"01/01/20", ToDate:"06/10/20" },
                { id: 2, Bookedby: "Mike", Team: "Development Team", TableName: "110", FromDate:"01/01/20", ToDate:"31/10/20" }
              ],
        isGoing: true,
        numberOfGuests: 2      
                      
      }
      this.handleInputChange = this.handleInputChange.bind(this);
   }

   renderTableData1() {
    return this.state.Reservations.map((Reservation, index) => {
       const { id, Bookedby, Team, TableName, FromDate, ToDate } = Reservation //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{Bookedby}</td>
             <td>{Team}</td>
             <td>{TableName}</td>
             <td>{FromDate}</td>
             <td>{ToDate}</td>
            
          </tr>
       )
    })
 }

 renderTableHeader1() {
    let header = Object.keys(this.state.Reservations[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
         <div>
            <h3>Latest Desk Reservations</h3>
            <table id='Reservations'>
               <tbody>
                  <tr>{this.renderTableHeader1()}</tr>
                  {this.renderTableData1()}
               </tbody>               
            </table>
            
            <h3 style={{margin:'20px'}}> Desk Availability</h3>
            <table style={{textAlign:'center', width:'100%'}} >
            <tr>
                <th>Start Date</th>
                <th>End Date</th> 
                <th>Desk Number</th>
                <th>No. of People</th>
            </tr>
            <tr >
                <td><input name="isGoing" type="Date"  onChange={this.handleInputChange} /></td>
                <td><input name="isGoing" type="Date" onChange={this.handleInputChange} /></td>           
                <td><input name="isGoing" type="Number" onChange={this.handleInputChange} /></td>  
                <td><input name="isGoing" type="Number" onChange={this.handleInputChange} /></td>  
                <td><button style={{background:'red', padding:'10px'}}>Check Availability</button></td>  
            </tr>
            </table>
            <h3 style={{margin:'20px'}}>Result</h3>
            <table style={{ width:'100%'}} >
            <tr>
                <th>Desk Number</th>
                <th>Start Date</th>
                <th>End Date</th> 
                <th>Status</th>
                <th >Book Now</th>
            </tr>
            <tr >
                <td></td>
                <td></td>           
                <td></td>  
                <td></td>  
                <td></td>  
            </tr>
            </table>

         </div>
      )
   }
}

export default Analytics