import React, { Component } from 'react';
import "./styles.css";
import Firebase from 'firebase';
import { db } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';

class Analytics extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
        reservations: []        
                      
      }
      // this.handleInputChange = this.handleInputChange.bind(this);
   }
    
    componentDidMount() {
    this.getUserData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database().ref('Booking/NewBooking').set(this.state);
    console.log('DATA SAVED');
  }
  
  getUserData = () => {
    let ref = Firebase.database().ref('Booking/NewBooking');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
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
      const { reservations } = this.state;
      return (
         <div>
            <h3>Latest Desk Reservations</h3>
            <table id='Reservations'>
               <tbody>
                  {/* <tr>{this.renderTableHeader1()}</tr> */}
                  {/* {this.renderTableData1()} */}
               </tbody>               
            </table>
            { 
          reservations
          .map(reservation => 
            <div key={reservation.uid} >
              {/* <div className="card-body"> */}
                {/* < className="card-title"> */}
                <table id='reservations' style={{width:'100%'}}>
                  {/* <thead>
                    <tr>
                      
                      <th>First Name </th>
                      <th>Last Name</th>
                      <th>Desk Number</th>
                      <th>Division</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                    </tr>
                  </thead> */}
                <tbody>
                  <tr key={reservation.uid}>
                 
                <td style={{width:'20%'}}> { reservation.firstname }</td>
                <td style={{width:'10%'}}> { reservation.lastname }</td>
                <td style={{width:'8%'}}> { reservation.deskno }</td>
                <td style={{width:'17%'}}>  { reservation.division }</td>
                               
               
                </tr>
                </tbody>
                </table>
                {/* <p className="card-text">{ schedule.role }</p> */}
                
              {/* </div> */}
            </div>
            )
        } 
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