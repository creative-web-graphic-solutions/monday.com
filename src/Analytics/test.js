import React, { Component } from 'react';
import { auth, db } from '../config';


// const  = props => <h1>{props.room}</h1> 
 class test extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              status:'Not Available',
              deskno:''
         }
     }

   
    render() {
        return (
            <div>
                
                {this.state.status}
                {this.state.deskno}
                {
            db.ref().child("Booking/NewBooking/booking").orderByChild("deskno").equalTo(130).on("child_added", function(data) {
              // <div className="desknumber">
                // <h3> Data</h3>
              console.log("Desk Not Available")
              this.setState({ status: `Not Available`});
              // </div>
              }
            )}

                
            </div>
        )
    }
}

export default test
