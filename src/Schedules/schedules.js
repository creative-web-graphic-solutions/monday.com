import React from 'react';
import "./styles.css";
import Firebase from 'firebase';
import { db } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';


class Schedules extends React.Component {

  constructor(props){
    super(props);
    // Firebase.initializeApp(db);

    this.state = {
      schedules: []
      
    }
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
    Firebase.database().ref('Reservation/Schedules').set(this.state);
    console.log('DATA SAVED');
  }
  
  getUserData = () => {
    let ref = Firebase.database().ref('Reservation/Schedules');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }

  render() {
      
    const { schedules } = this.state;
    return(

      <div >
      <div className="row">
        <div className='col-xl-12'>
          <h5>CWGS Development Team</h5>
        </div>
      </div>
      {/* <div className='row'> */}
      <table id='schedules' style={{width:'100%'}}>
                    <tr>
                      
                      <th style={{width:'20%'}}>First Name </th>
                      <th style={{width:'10%'}}>Last Name</th>
                      <th style={{width:'8%'}}>Desk Number</th>
                      <th style={{width:'17%'}}>Division</th>
                      <th style={{width:'20%'}}>Email</th>
                      <th style={{width:'15%'}}>Phone Number</th>
                      <th style={{width:'20%'}}> Edit Delete</th>
                      
                    </tr>
                
                  </table>
      
        {/* <div className='col-xl-12'> */}
        { 
          schedules
          .map(schedule => 
            <div key={schedule.uid} >
              {/* <div className="card-body"> */}
                {/* < className="card-title"> */}
                <table id='schedules' style={{width:'100%'}}>
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
                  <tr key={schedule.uid}>
                 
                <td style={{width:'20%'}}> { schedule.firstname }</td>
                <td style={{width:'10%'}}> { schedule.lastname }</td>
                <td style={{width:'8%'}}> { schedule.deskno }</td>
                <td style={{width:'17%'}}>  { schedule.division }</td>
                <td style={{width:'20%'}}> { schedule.email }</td>
                <td style={{width:'15%'}}> { schedule.phoneno }</td>
                <td><button style={{widht:'5%'}} onClick={ () => this.updateData(schedule) } className="btn btn-link">Edit</button></td>
                <td><button style={{width:'5%', marginRight:'2%'}} onClick={ () => this.removeData(schedule) } className="btn btn-link">Delete</button> </td>
                
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
      <div className='row'>
        <div className='col-xl-12'>
          <h1>Add New Team Member Here</h1>
          <form onSubmit={ this.handleSubmit }>
            <div className="form-row">
              <input type='hidden' ref='uid' />
              <div className="form-group col-md-6">
                <label>FirstName</label>
                <input type="text" ref='firstname' className="form-control" placeholder="FirstName" />
              </div>
              <div className="form-group col-md-6">
                <label>LastName</label>
                <input type="text" ref='lastname' className="form-control" placeholder="LastName" />
              </div>
              <div className="form-group col-md-6">
                <label>DeskNo</label>
                <input type="text" ref='deskno' className="form-control" placeholder="DeskNo" />
              </div>
              <div className="form-group col-md-6">
                <label>Division</label>
                <input type="text" ref='division' className="form-control" placeholder="Division" />
              </div>
              <div className="form-group col-md-6">
                <label>Email</label>
                <input type="text" ref='email' className="form-control" placeholder="Email" />
              </div>
              <div className="form-group col-md-6">
                <label>PhoneNo</label>
                <input type="text" ref='phoneno' className="form-control" placeholder="PhoneNo" />
              </div>
              
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

handleSubmit = (event) => {
  event.preventDefault();
  let firstname = this.refs.firstname.value;
  let lastname = this.refs.lastname.value;
  let deskno = this.refs.deskno.value;
  let division = this.refs.division.value;
  let email = this.refs.email.value;
  let phoneno = this.refs.phoneno.value;
  // let role = this.refs.role.value;
  let uid = this.refs.uid.value;

  if (uid && firstname && lastname){
    const { schedules } = this.state;
    const devIndex = schedules.findIndex(data => {
      return data.uid === uid 
    });
    schedules[devIndex].firstname = firstname;
    schedules[devIndex].lastname = lastname;
    schedules[devIndex].deskno = deskno;
    schedules[devIndex].division = division;
    schedules[devIndex].email = email;
    schedules[devIndex].phoneno = phoneno;
    // schedules[devIndex].role = role;
    this.setState({ schedules });
  }
  else if (firstname && lastname ) {
    const uid = new Date().getTime().toString();
    const { schedules } = this.state;
    schedules.push({ uid, firstname, lastname, deskno, division, email, phoneno })
    this.setState({ schedules });
  }

  this.refs.firstname.value = '';
  this.refs.lastname.value = '';
  this.refs.deskno.value = '';
  this.refs.division.value = '';
  this.refs.email.value = '';
  this.refs.phoneno.value = '';
  this.refs.uid.value = '';
}

removeData = (schedule) => {
  const { schedules } = this.state;
  const newState = schedules.filter(data => {
    return data.uid !== schedule.uid;
  });
  this.setState({ schedules: newState });
}

updateData = (schedule) => {
  this.refs.uid.value = schedule.uid;
  this.refs.firstname.value = schedule.firstname;
  this.refs.lastname.value = schedule.lastname;
  this.refs.deskno.value = schedule.deskno;
  this.refs.division.value = schedule.division;
  this.refs.email.value = schedule.email;
  this.refs.phoneno.value = schedule.phoneno;
}
  
}

export default Schedules;

