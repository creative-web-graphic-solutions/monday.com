import React, { Component } from 'react';
import "./styles.css";
import Firebase from 'firebase';
import { auth, db } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';

 
function gotData(data) {
   console.log(data);
  }
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
  

  getUserData = () => {
    let ref = Firebase.database().ref('Booking/NewBooking/booking');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
   //  console.log('DATA RETRIEVED');
    
  }

  
   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        const {reservations} = this.state;
      return (
         <div>
            <h3>Latest Desk Reservations</h3>
            <table id='Reservations'>
               <tbody>
                  {/* <tr>{this.renderTableHeader1()}</tr> */}
                  {/* {this.renderTableData1()} */}s
               </tbody>               
            </table>
              { 
          reservations
          .map(reservation => 
            <div key={reservation.uid} >
             
                <table id='reservations' style={{width:'100%'}}>
                 
                <tbody>
                  <tr key={reservation.uid}>
                 
                <td style={{width:'20%'}}> { reservation.id }</td>
                <td style={{width:'10%'}}> { reservation.firstname }</td>
               <td style={{width:'17%'}}>  { reservation.division }</td>
                <td style={{width:'8%'}}> { reservation.deskno }</td>
                
                <td style={{width:'20%'}}> { reservation.fromdate }</td>
                <td style={{width:'15%'}}> { reservation.todate }</td>
             
                
                </tr>
                </tbody>
                </table>
               
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