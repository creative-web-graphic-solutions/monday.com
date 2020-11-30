import React from 'react';
import Select from 'react-select';
import Firebase from 'firebase';
import { db } from './config';
import  SelectBox2 from './dropdown';

class Empanalytics extends React.Component {

  constructor(props){
    super(props);
    // Firebase.initializeApp(db);

    this.state = {
      employees: [],
      peoples:[]
      
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
    Firebase.database().ref('Employee/Employeelist').set(this.state);
    console.log('DATA SAVED');
  }
  
  getUserData = () => {
    let ref = Firebase.database().ref('Employee/Employeelist');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }

  handleTextFieldChange(event) {
    let location = event.target.value;
    let text = location // capitalize first letter
      .toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substr(1))
      .join(' ');
    this.props.setLocation(text, 'location');
  }

  render() {
      
    const { employees } = this.state;
    return(

      <div className="container">
      <div className="row">
        <div className='col-xl-12'>
          <h1>Firebase Development Team</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-12'>
        { 
          employees
          .map(employee => 
            
            <div key={employee.uid} className="card float-left" style={{width: '18rem', marginRight: '1rem'}}>
              <Select options={employee.name} />
              <div className="card-body">
                
                <h5 className="card-title">{ employee.name }</h5>
                <p className="card-text">{ employee.role }</p>
                {/* <button onClick={ () => this.removeData(employee) } className="btn btn-link">Delete</button> */}
                {/* <button onClick={ () => this.updateData(employee) } className="btn btn-link">Edit</button> */}
              </div>
            </div>
            )
        } 
        </div>

      </div>
      <SelectBox2 />
     
    </div>
  )
}

handleSubmit = (event) => {
  event.preventDefault();
  let name = this.refs.name.value;
  let role = this.refs.role.value;
  let uid = this.refs.uid.value;

  if (uid && name && role){
    const { employees } = this.state;
    const devIndex = employees.findIndex(data => {
      return data.uid === uid 
    });
    employees[devIndex].name = name;
    employees[devIndex].role = role;
    this.setState({ employees });
  }
  else if (name && role ) {
    const uid = new Date().getTime().toString();
    const { employees } = this.state;
    employees.push({ uid, name, role })
    this.setState({ employees });
  }

  this.refs.name.value = '';
  this.refs.role.value = '';
  this.refs.uid.value = '';
}

removeData = (employee) => {
  const { employees } = this.state;
  const newState = employees.filter(data => {
    return data.uid !== employee.uid;
  });
  this.setState({ employees: newState });
}

updateData = (employee) => {
  this.uid.value = employee.uid;
  this.name.value = employee.name;
  this.role.value = employee.role;
}
  
}

export default Empanalytics;

