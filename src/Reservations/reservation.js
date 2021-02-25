import React, { Component } from 'react';

import Firebase from 'firebase';
import { auth, db } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import p5Types from "p5";

function gotData(data){
  // console.log(data.val());
  var book = data.val();
  var keys = Object.keys(book);
  console.log(keys);
  for(var i=0; i<keys.length; i++){
      var k = keys[i];
      var firstname = book[k].firstname;
      var lastname = book[k].lastname;
      var deskno = book[k].deskno;
      var startdate = book[k].startdate;
      var enddate = book[k].enddate;
      console.log(firstname,lastname,deskno);
      //  var li = React.createElement('li', deskno +':' + startdate +':'+ enddate);

       console.log(deskno);
        
      //  if (deskno === this.state.deskno)
      //   alert('Not available');
      //  li.class('booklisting');
        // li.parent('bookinglist');

  }
}


class Analytics extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
        reservations: [],       
        startdate:null,
        enddate:null,
        deskno:100,
        deskval:''              
      };
      // this.handleInputChange = this.handleInputChange.bind(this);
      this.stresult = this.stresult.bind(this);
      this.edresult = this.edresult.bind(this);
      this.deskresult = this.deskresult.bind(this);
      
   }
    
    componentDidMount() {
     
    // this.getUserData();
       
    db.ref("Booking/NewBooking/booking").on("value", snapshot =>{
      let allreservations = [];
      snapshot.forEach(snap => {
        allreservations.push(snap.val());
      });
      this.setState({reservations:allreservations});
    });
  }

  // gotData = (data) =>{
  //   console.log(data.val());
  //   alert(this.state.deskno);
  // }
  
  componentDidUpdate(prevProps, prevState) {
   
    // check on previous state
    // only write when it's different with the new state
    // if (prevState !== this.state) {
    //   this.writeUserData();
    // }
  }

  // writeUserData = () => {
  //   Firebase.database().ref('Booking/NewBooking').set(this.state);
  //   console.log('DATA SAVED');
  // }


  gotUserData = () => {
        
    var ref = db.ref('Booking/NewBooking/booking');
    ref.on('value', gotData);
    
    

  }

  stresult(e) {
    console.log('result');
    // console.log(e.target.value);
    this.setState({
      startdate:e.target.value
      
      })
  }

  edresult(e){
    this.setState({
      enddate:e.target.value
    })
  }

  deskresult(e){
    this.setState({
      deskno:e.target.value
    })
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
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    // this.setState({
    //   [name]: value
    // });
  }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      const { reservations, startdate,enddate,deskno, desks, deskval } = this.state;
      return (
         <div>
            <h3>Latest Desk Reservations</h3>           
           
            <div >
              {/* <div className="card-body"> */}
                {/* < className="card-title"> */}
                <table id='schedules' style={{width:'100%'}}>
                  <thead>
                    <tr>
                      
                      <th>First Name </th>
                      <th>Last Name</th>
                      <th>Desk Number</th>
                      <th>Division</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Inhouse Hour</th>
                      <th>Online Hour</th>
                    </tr>
                  </thead>
                <tbody>
                { 
          reservations
          .map(reservation => 
                  <tr key={reservation.uid}>
                 
                <td > { reservation.firstname }</td>
                <td > { reservation.lastname }</td>
                <td > { reservation.deskno }</td>
                <td >  { reservation.division }</td>
                <td > { reservation.startdate }</td>
                <td > { reservation.enddate }</td>
                <td > { reservation.inhousehour }</td>  
                <td > { reservation.onlinehour }</td>
                </tr>
                
                 )
        } 
          {/* {
          this.state.reservations.map(reservation => {
            return (
              <div key={reservation.uid}>
                {reservation.firstname}
              </div>
              );
            })} */}
                </tbody>
                </table>
                {/* <p className="card-text">{ schedule.role }</p> */}
                
              {/* </div> */}
            </div>
           

                
         </div>
      )
   }
}

export default Analytics