import React, { Component } from 'react';
import "./styles.css";
import Firebase from 'firebase';
import { auth, db } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import p5Types from "p5";
import Test from './test';


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
        deskval:130,              
        isAvailable:'',
        desk:this.props.value,
        status:'Available'
      };
      // this.handleInputChange = this.handleInputChange.bind(this);
      this.stresult = this.stresult.bind(this);
      this.edresult = this.edresult.bind(this);
      this.deskresult = this.deskresult.bind(this);
      this.isAvailable = this.isAvailable.bind(this);
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
    
    console.log(this.state.deskno);
    var bool=1;
    
    {
      db.ref().child("Booking/NewBooking/booking").orderByChild("deskno").equalTo(this.state.deskno).on("child_added", function(data) {
        // <div className="desknumber">
          // <h3> Data</h3>
        console.log("Desk Not Available")
        bool= 0;
        // </div>
        }
        
      )
      if (bool===0 ){
        bool=1;
        return this.setState(  { status: `Not Available`});
      }
      
        else
      return this.setState({status:'Available'});
    }

    
    // this.setState(  { status: `Available`});
    
  }

  isAvailable(e) {
    console.log(" Not Available" + e.target.value);
      // {
      //   db.ref().child("Booking/NewBooking/booking").orderByChild("deskno").equalTo(e.target.value).on("child_added", function(data) {
      //     // <div className="desknumber">
      //       // <h3> Data</h3>
      //     console.log(" Not Available" + e.target.value);
      //     this.setState({deskno:e.target.value})
          
      //     // </div>
      //     }
      //   )}
     
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
      const { reservations, startdate,enddate,deskno, desk, deskval } = this.state;

      return (
         <div>
           

            <h3 style={{margin:'20px'}}> Desk Availability</h3>
            <table style={{textAlign:'center', width:'100%'}} >
            <tr>
                <th>Start Date</th>
                <th>End Date</th> 
                <th>Desk Number</th>
                {/* <th>No. of People</th> */}
            </tr>
            <tr >
                <td><input name="startdate" type="Date"  onChange={this.stresult.bind(this)} /></td>
                <td><input name="enddate" type="Date"  onChange={this.edresult.bind(this)} /></td>           
                <td><input name="deskno" type="Number" min="100" max="150" value={this.state.deskno} onChange={this.deskresult.bind(this)} /></td>  
                {/* <td><input name="noofpeople" type="Number" onChange={this.handleInputChange} /></td>   */}
                <td><button onClick={this.gotUserData} style={{background:'yellow', padding:'10px', color:'Black'}}>Check Availability</button></td>  
            </tr>
            </table>
            <h3 style={{margin:'20px'}}>Result</h3>
            <table style={{ width:'100%'}} >
            <tr>
                <th>Desk Number</th>
                <th>Start Date</th>
                <th>End Date</th> 
                <th>Status</th>
                <th>Book Now</th>
            </tr>
            <tr></tr>
            <tr >
                <td>{this.state.deskno}</td>
                <td>{this.state.startdate}</td>           
                <td>{this.state.enddate}</td>  
               
                <td>{this.state.status}</td>
                {/* <td> {this.state.deskno !== this.isAvailable(deskno)? <div><h5>Available</h5></div>:<div><h5>Not Available</h5></div> } </td>   */}
                {/* <td>{this.isAvailable(this.state.deskno)}</td>\ */}
                {/* <td> {this.isAvailable(deskno)} </td> */}
                <td> {this.state.status === 'Available' ? <div style={{color:"green"}}><a href="/booknow">Book Now</a></div>:<div><h5></h5></div> }  </td>  
            </tr>
            </table>
                       
                
         </div>
      )
   }
}

export default Analytics