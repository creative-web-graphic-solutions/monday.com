import React from 'react';
import "./styles.css";
import Firebase from 'firebase';
import { db } from './config';

import 'bootstrap/dist/css/bootstrap.min.css';


class Empanalytics extends React.Component {

  constructor(props){
    super(props);
    // Firebase.initializeApp(db);

    this.state = {
      booking: [],      
    }

  }

  componentDidMount() {
    this.getUserData();
    this.getSelectedUser();
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

  getSelectedUser = () => {
    let ref = Firebase.database().ref('Booking/NewBooking');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }

  render() {
      
    const { booking } = this.state;
    return(

      <div >
      <div className="row">
        <div className='col-xl-12'>
          <h5>Latest Reservations</h5>
        </div>
      </div>
      {/* <div className='row'> */}
      <table id='Reservations' style={{width:'100%'}}>
        
                    <tr>
                      
                      <th style={{width:'20%'}}>First Name </th>
                      <th style={{width:'20%'}}>Last Name</th>
                      <th style={{width:'5%'}}>Desk Number</th>
                      <th style={{width:'15%'}}>Division</th>
                      <th style={{width:'15%'}}>Start Date</th>
                      <th style={{width:'15%'}}>End Date</th>
                      <th style={{width:'5%'}}>Inhouse Hour </th>
                      <th style={{width:'5%'}}>Online Hour</th> 
                    </tr>
                  
            </table>      
        {/* <div className='col-xl-12'> */}
        { 
          booking
          .map(book => 
            <div key={book.uid} >
              {/* <div className="card-body"> */}
                {/* < className="card-title"> */}
                <table id='Reservations' style={{width:'100%'}}>
                 
                <tbody>
                  <tr key={book.uid}>
                 
                <td style={{width:'20%'}} > { book.firstname }</td>
                <td style={{width:'20%'}} > { book.lastname }</td>
                <td style={{width:'5%'}}> { book.deskno }</td>
                <td style={{width:'15%'}}>  { book.division }</td>
                <td style={{width:'15'}}> { book.startdate }</td>
                <td style={{width:'15'}}> { book.enddate }</td>
                <td style={{width:'5%'}}> { book.inhousehour }</td>
                <td style={{width:'5%'}}> { book.onlinehour}</td>
                {/* <td><button style={{width:'5%', marginRight:'2%'}} onClick={ () => this.removeData(schedule) } className="btn btn-link">Delete</button> </td> */}
                {/* <td><button style={{widht:'5%'}} onClick={ () => this.updateData(schedule) } className="btn btn-link">Edit</button></td> */}
                </tr>
                </tbody>
                </table>
                {/* <p className="card-text">{ schedule.role }</p> */}
                
              {/* </div> */}
            </div>
            )
        }  
        {/* </div> */}
      {/* </div> */}

      <h3> Desk Availability</h3>
     
      <table id='booking' style={{width:'100%', background:'lightgrey'}}>
                  {/* <thead>
                    <tr>
                      
                      <th>Start Date </th>
                      <th>End Date</th>
                      <th>Desk Number</th>                      
                      <th>Number of People</th>
                    </tr>
                  </thead> */}
                <tbody>
                  <tr key={booking.uid}>
                  {/* <form onSubmit={ this.handleSubmit }> */}
                <td style={{width:'20%'}}> 
                <input type="date" ref='startdate' className="form-control" placeholder="StartDate" />
                </td>
                <td style={{width:'20%'}}> 
                <input type="date" ref='enddate' className="form-control" placeholder="EndDate" />
                </td>
                <td style={{width:'20%'}}> 
                <input type="number" ref='deskno' className="form-control" placeholder="DeskNumber" />
                </td>
                <td style={{width:'20%'}}>  
                <input type="number" ref='noofpeople' className="form-control" placeholder="No.of People" />
                </td>
                                
                <td><button style={{width:'20%'}} onClick={ () => this.handleSubmit() } className="btn btn-link">Check Availability</button></td>
                {/* </form */}
                </tr>
                </tbody>
                </table>
                  <h3> Result </h3>
                  
    </div>
  )
}

handleSubmit = (event) => {
    event.preventDefault();
  let startdate = this.refs.startdate.value;
  let enddate = this.refs.enddate.value;
  let deskno = this.refs.deskno.value;
  let noofpeople = this.refs.noofpeople.value;
  
  // let role = this.refs.role.value;
  let uid = this.refs.uid.value;

  if (uid ){
    const { booking } = this.state;
    const devIndex = booking.findIndex(data => {
      return data.uid === uid 
    });
    booking[devIndex].startdate = startdate;
    booking[devIndex].enddate = enddate;
    booking[devIndex].deskno = deskno;
    booking[devIndex].noofpeople = noofpeople;
   
    // schedules[devIndex].role = role;
    this.setState({ booking });
    this.getSelectedUser();
  }
 

  
}


}

export default Empanalytics;

