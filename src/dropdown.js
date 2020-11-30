import React from 'react';
import Select from 'react-select';
import Firebase from 'firebase';
import { db } from './config';

class SelectBox1 extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { 
          value: 'select',
          employees: []
        };
    }
    onChange(e) {
      this.setState({
        value: e.target.value
      })
    }
    render() {
      return (
        <div className="form-group">
          <label htmlFor="select1" >Select1</label>
          <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
            <option value="select">Select an Option</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
          </select>
        </div>
      )
    }
  }
  
  // a select with dynamically created options
  const options = ["Select an Option", "First Option", "Second Option", "Third Option"]
  
  class SelectBox2 extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { value: 'Select an Option'};
    }

    componentDidMount() {
        let ref = Firebase.database().ref('Employee/Employeelist');
        ref.on('value', snapshot => {
          const state = snapshot.val();
          this.setState(state);
        });
        console.log('DATA RETRIEVED');
    }
    

    onChange(e) {
      this.setState({
        value: e.target.value
      })
    }
    render() {
        const { employees } = this.state;
      return (
        <div className="form-group">

        {/* { 
            employees
            .map(employee => 
              
              <div key={employee.uid} className="card float-left" style={{width: '18rem', marginRight: '1rem'}}> */}
                
                <label htmlFor="select2" >Select2</label>
          <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
          {options.map(option => {
            return <option value={option} key={option} >{option}</option>
          })}
        </select>
                  
                  {/* <h5 className="card-title">{ employee.name }</h5> */}
                  {/* <p className="card-text">{ employee.role }</p> */}
                  {/* <button onClick={ () => this.removeData(employee) } className="btn btn-link">Delete</button> */}
                  {/* <button onClick={ () => this.updateData(employee) } className="btn btn-link">Edit</button> */}
                
              </div>
        //       )
        //   } 

        
         
        // </div>
        
        
        
      )
    }
  }
  
  
  
  
  export default SelectBox2;