import React, { Component } from 'react';
import "./styles.css";
import Firebase from 'firebase';
import { auth, db } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { components } from 'react-select';


function gotData(data){
    console.log(data.val());
    var book = data.val();
    var keys = Object.keys(book);
    console.log(keys);
    for(var i=0; i<keys.length; i++){
        var k = keys[i];
        var firstname = book[k].firstname;
        var lastname = book[k].lastname;
        console.log(firstname,lastname);
        // var li = createElement('li', firstname + lastname);


    }
}

function errData(err){
    console.log('Error')
    console.log(err);
}

class Checkdesk extends Component {
    constructor(props){
        super(props)
        this.state = {
            schedules :[]
        }

    }

    componentDidMount(){
        var ref = db.ref('Booking/NewBooking/booking');
        ref.on('value', gotData, errData);
        // db.ref('Reservation/Schedules').once('value').then(snapshot =>{
        //     console.log('user data:', snapshot.val());
        // })
        // db.ref("Booking/NewBooking").on("value", snapshot => {
        //     let allbookings = [];
        //     snapshot.forEach(snap => {
        //         allbookings.push(snap.val());
        //     });
        //     this.setState({bookings:allbookings})
        //     alert("executing componentdidupdate");
        // });
    }


    getUserdata = () =>{
        let ref = Firebase.database().ref("Reservation/Schedules")
    }

    render() {
        const {schedules } = this.state;
        return(
            // <h3> Latest Reservations </h3>       
           
              <table id='schedules' style={{width:'100%'}}>
                <thead>
                  <tr>
                      
                    <th>First Name </th>
                    <th>Last Name</th>
                    <th>Desk Number</th>
                    <th>Division</th>
                    {/* <th>Start Date</th> */}
                    {/* <th>End Date</th> */}
                    {/* <th>Inhouse Hour</th> */}
                    {/* <th>Online Hour</th> */}
                  </tr>
                </thead>
              <tbody>
              {/* { 
        schedules
        .map(schedule => 
                <tr key={schedule.uid}>
               
              <td > { schedule.firstname }</td>
              <td > { schedule.lastname }</td>
              <td > { schedule.deskno }</td>
              <td > { schedule.division }</td>
              {/* <td > { booking.startdate }</td> */}
              {/* <td > { booking.enddate }</td> */}
              {/* <td > { booking.inhousehour }</td>   */}
              {/* <td > { booking.onlinehour }</td> */}
              {/* </tr> */}
              
               )
      }          */}
              </tbody>
              </table>
            
           
           

        )
    }
    
}

export default Checkdesk;
