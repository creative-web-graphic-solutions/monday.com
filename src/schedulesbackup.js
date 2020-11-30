import React, { Component } from 'react';
import Firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { StyleSheet, Alert, View, Text, Button, ScrollView, TextInput } from 'react-native';

 import {db} from './config';
import { render } from 'react-dom';


 const styles = StyleSheet.create({
  
   TextItem: {
      padding: '12px',
      box:'10px',
      textAlign: 'center',
      backgroundColor: '#4CAF50',
      color: 'white'
  
    }
 });

 class ScheduleItem extends React.Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
        allpeople:'',
         id:'',
         Firstname:'',
         Lastname:'',
         Division:'',
         DeskNo:'',
         Email:'',
         phone:'',
         // presentpeople: ''         
      };
      
   }

   componentDidMount() {
      db.ref('Reservation/Schedules').on('value', querySnapShot => {
         let data = querySnapShot.val() ? querySnapShot.val() : {};         
         let allpeoples = {...data};
         this.setState({
           allpeople: allpeoples,

         });       
          
       });
   }
    // render(){
    //   let ScheduleItemKeys = Object.keys(this.state.ScheduleItem);
    //   return(
    //      <view>
    //         {ScheduleItemKeys.length > 0 ? (
    //         ScheduleItemKeys.map(key => (
    //         <scheduleItem key={key} id={key}  scheduleItem={this.state.scheduleItem[key]} />
    //         ))
    //         ) : (
    //         <Text>No Items</Text>
    //         )} 
    //          { <Text >
    //               {allpeople}
    //           </Text> }
           
    //      </view>
    //   )
    // }
    
   };


class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         // students: [
         //    { id: 1, Firstname: 'Wasif', Lastname: 'D', Division: 'Dev Team', DeskNo: 21, Email: 'wasif@email.com', Phone: '9710122551' },
         // //    { id: 2, Firstname: 'John', Lastname: 'F', Division: 'Dev2 Team', DeskNo: 11, Email: 'john@email.com', Phone: '6456466757' },
         // //    { id: 3, Firstname: 'Saad', Lastname: 'H', Division: 'Admin Team', DeskNo: 51, Email: 'saad@email.com', Phone: '4645654676' },
         // //    { id: 4, Firstname: 'Asad', Lastname: 'L', Division: 'Dev2 Team', DeskNo: 30, Email: 'Asad@email.com', Phone: '6456547656' }            
         // ],
         allpeople: {},
         id:'',
         Firstname:'',
         Lastname:'',
         Division:'',
         DeskNo:'',
         Email:'',
         phone:'',
         // presentpeople: ''
         
      };
      this.addNewpeople = this.addNewpeople.bind(this);
   }

   componentDidMount() {
      db.ref('Reservation/Schedules').on('value', querySnapShot => {
         let data = querySnapShot.val() ? querySnapShot.val() : {};         
         let allpeoples = {...data};
         this.setState({
           allpeople: allpeoples,

         });
         
         
          
       });
   }
   addNewpeople() {
      let newpeople = db.ref('Reservation/Schedules').push({
         DeskNo: this.state.DeskNo,
         Firstname: this.state.Firstname,
         Lastname: this.state.Lastname,
         Division: this.state.Division,
         Email: this.state.Email,
         phone: this.state.phone
       });
       
       Alert('Action!', 'A new item was created');
       this.setState({
         presentpeople: '',
         Firstname:'',
         Lastname:'',
         DeskNo:'',
         Division:'',
         Email:'',
         phone:''

       });
       
   }
   clear() {
      db.ref('Reservation/Schedules').remove();
   }

   renderTableData() {
   //  return this.state.students.map((student, index) => {
   //     const { id, Firstname, Lastname, Division, DeskNo, Email,Phone } = student //destructuring
   //     return (
   //        <tr key={id}>
   //           <td>{id}</td>
   //           <td>{Firstname}</td>
   //           <td>{Lastname}</td>
   //           <td>{Division}</td>
   //           <td>{DeskNo}</td>
   //           <td>{Email}</td>
   //           <td>{Phone}</td>
   //        </tr>
   //     )
   //  })

   // Import Admin SDK

   let ref = db.ref("Reservation/Schedules");

// Attach an asynchronous callback to read the data at our posts reference
   ref.on("value", function(snapshot) {
   console.log(snapshot.val());

   }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
   
   });
 }

 renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    let peoplelist = Firebase.database().ref('Reservation/Schedules');
    // alert(peoplelist.Firstname);
      return (
         <div>
            
            <View>
            {/* <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>            */}

               {/* <ScheduleItem /> */}
               {/* <Text >
                    {id}
                  {FirstName}
                  {LastName}
              </Text> */}
            
            </View>
            
            <TextInput
          placeholder="FirstName"
          
          value={this.state.Firstname}
          style={styles.TextItem}
          onChangeText={e => {
            this.setState({
              Firstname: e,
            });
          }}
          onSubmitEditing = {this.addNewpeople}
        />
         <TextInput
          placeholder="LastName"
          value={this.state.Lastname}
          style={styles.TextItem}
          onChangeText={e => {
            this.setState({
              Lastname: e,
            });
          }}
          
        />
         <TextInput
          placeholder="Division"
          value={this.state.Division}
          style={styles.TextItem}
          onChangeText={e => {
            this.setState({
              Division: e,
            });
          }}
          onSubmitEditing = {this.addNewpeople}
        />
         <TextInput
          placeholder="DeskNo"
          value={this.state.DeskNo}
          style={styles.TextItem}
          onChangeText={e => {
            this.setState({
              DeskNo: e,
            });
          }}
          onSubmitEditing = {this.addNewpeople}
        />
         <TextInput
          placeholder="Email"
          value={this.state.Email}
          style={styles.TextItem}
          onChangeText={e => {
            this.setState({
              Email: e,
            });
          }}
          onSubmitEditing = {this.addNewpeople}
        />
         <TextInput
          placeholder="Phone"
          value={this.state.phone}
          style={styles.TextItem}
          onChangeText={e => {
            this.setState({
              phone: e,
            });
          }}
          onSubmitEditing = {this.addNewpeople}
        />

     
        <Button
          title="Add New People"
          onPress={this.addNewpeople}
          color="lightgreen"
        />
         </div>
      )
   }
}

export default Table