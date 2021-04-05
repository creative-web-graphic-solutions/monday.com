import React from 'react';
import "./styles.css";
import Firebase from 'firebase';
import { db } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import gql from 'graphql-tag';
import UserInfo from './userquery';
import mondaySdk from 'monday-sdk-js';
import { useQuery } from '@apollo/react-hooks';
const monday = mondaySdk();


const Row = ({ id }) => (
  <tr>
    <td>
    <button style={{widht:'5%'}} onClick={ () => this.updateData(id) } className="btn btn-link">Edit</button>
    </td>
    <td>
    <button style={{width:'5%'}} onClick={ () => this.removeData(id) } className="btn btn-link">Delete</button> 
    </td>
  </tr>
);


const GET_USERS = gql`
    {
      users{
        id
        name
        photo_original
        email
        phone
      }

    }
`

const User = ({User: {id,name,photo_original, email,phone}}) => (
  <div className='Card'>
    <ul>

      <li>{name}</li>
      <li>{photo_original}</li>
      <li>{email}</li>
      <li>{phone}</li>      
    </ul>
  
  </div>
)



class Schedules extends React.Component {

  constructor(props){
    super(props);
    // Firebase.initializeApp(db);

    this.state = {
      schedules: [],
      monusername:'',
      monemail:'',
      monphoneno:'',
      monschedules:[],
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

  monuserdata = () =>{
    console.log("User Data retrieved");
    let monusername = [];
    let monemail = [];
    let monphone = [];

    // const {loading, error, data} = useQuery(GET_USERS);
    const result =  monday.api('{users{id name phone photo_original email}}')
    .then((users) => {
      console.log( JSON.stringify(users));
      // monusername.push('Balamurugan');
      // monphone.push(users.data.users[2]);
      // monemail.push(users.data.users[3]);
      
      this.setState({monusername: users.data.users[0].name});
      this.setState({monemail:users.data.users[0].email});
      this.setState({monphone:users.data.users[0].phone});
      
    }).catch((err) => {
      console.log(err);
    });
    
    
    // {this.state.users.map(user => (
    //   <Row user = {user} />
    // ))}   
 }

 monupdatedata = () =>{
   console.log('monupdatedata');
  //  this.setState({firstname:"balamuurgan"});
  this.refs.firstname.value = this.state.monusername;
  this.refs.email.value = this.state.monemail;
  this.refs.phoneno.value = this.state.monphone;

  this.setState({monusername:''});
  this.setState({monemail:''});
  this.setState({monphone:''});

}


  render() {
   
   
    const { schedules } = this.state;
    const {monschedules} = this.state;
    return(
      
      <div>
      <div className="row">
        <div className='col-xl-12'>
          <h5>CWGS Development Team</h5>
           <br/>         
        </div>
      </div>

      
        < div className="row" >
        <h4 style={{marginLeft:"2%"}}>monday User Detail</h4>
      <button type="button" className="btn btn-primary" onClick={this.monuserdata} style={{backgroundColor:"green", marginLeft:"30%" }}>Add monday User</button>
      
      
      <table id='schedules' style={{width:'100%'}}>
                  <thead>
                    <tr>
                      
                      <th style={{width:'30%'}}> Name </th>
                      
                      <th style={{width:'8%'}}>Desk Number</th>
                      <th style={{width:'12%'}}>Division</th>
                      <th style={{width:'25%'}}>Email</th>
                      <th style={{width:'15%'}}>Phone Number</th>
                      <th style={{width:'5%'}}> Edit</th>
                      {/* <th style={{width:'5%'}}> Delete</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    {/* { 
          monschedules
          .map(monschedule =>  */}
            {/* <div key={1} >     */}
                  
                  <tr key={monschedules.uid} >
                 
                <td style={{width:'30%'}}> { this.state.monusername }</td>
                
                <td style={{width:'8%'}}> {  }</td>
                <td style={{width:'12%'}}>  { }</td>
                <td style={{width:'25%'}}> { this.state.monemail }</td>
                <td style={{width:'15%'}}> { this.state.monphone }</td>
                <td><button style={{width:'5%',float:'left'}} onClick={this.monupdatedata} className="btn btn-link">Edit</button></td>
                {/* <td><button style={{width:'5%'}} onClick={ this.monremovedata } className="btn btn-link">Delete</button> </td> */}
                
                </tr>
                
                {/* </div> */}
          {/* )} */}
                </tbody>

                  </table>
        </div>
        <br/> <br/>
            <h4 style={{marginLeft:'2%'}}>All Users</h4>
      <table id='schedules' style={{width:'100%'}}>
                  <thead>
                    <tr>
                      
                      <th style={{width:'20%'}}>First Name </th>
                      <th style={{width:'10%'}}>Last Name</th>
                      <th style={{width:'8%'}}>Desk Number</th>
                      <th style={{width:'12%'}}>Division</th>
                      <th style={{width:'25%'}}>Email</th>
                      <th style={{width:'15%'}}>Phone Number</th>
                      <th style={{width:'5%'}}> Edit</th>
                      <th style={{width:'5%'}}> Delete</th>
                    </tr>
                    </thead>
                   

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
                <td style={{width:'12%'}}>  { schedule.division }</td>
                <td style={{width:'25%'}}> { schedule.email }</td>
                <td style={{width:'15%'}}> { schedule.phoneno }</td>
                <td><button style={{widht:'5%'}} onClick={ () => this.updateData(schedule) } className="btn btn-link">Edit</button></td>
                <td><button style={{width:'5%', float:'left'}} onClick={ () => this.removeData(schedule) } className="btn btn-link">Delete</button> </td>
                
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
  else if (firstname && lastname ) {
    const uid = new Date().getTime().toString();

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

