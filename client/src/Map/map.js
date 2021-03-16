import React, {useState} from "react";
import Select from 'react-select';
import Tabs from "./Tabs";
import Tab from "./Tab";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import { Text, View, StyleSheet } from 'react-native';
import Firebase from 'firebase';
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import offlayout from "../officelayout.jpg";
import person from "./person.jpg";
import { auth, db } from '../config';

function gotData(data){
    // console.log(data.val());
    var book = data.val();
    var namelist = [];
    var keys = Object.keys(book);
    console.log(keys);
    for(var i=0; i<keys.length; i++){
        var k = keys[i];
        
        var firstname = book[k].firstname;
        namelist.push(<option key={keys[i]} value={firstname}>{firstname} </option>);
        var lastname = book[k].lastname;
        var deskno = book[k].deskno;
        var startdate = book[k].startdate;
        var enddate = book[k].enddate;
        console.log(firstname,lastname,deskno);
         var li = React.createElement('li', deskno +':' + startdate +':'+ enddate);
  
        //  console.log(this.state.deskno);
  
        //  if (deskno === this.state.deskno)
        //   alert('Not available');
        //  li.class('booklisting');
          // li.parent('bookinglist');
  
    }
    return namelist;
  }

const options = [

    {value:'Balamurugan', label:'Balamurugan'},
    {value:'Micheal', label:'Micheal'},
    {value:'Mark', label:'Mark'}
]

const Dropdownbox = () => (
    <Select options={options} />
)

const deskoptions = [
    {value:'100', label:'100'},
    {value:'101', label:'101'},
    {value:'102', label:'102'}
]

const Deskdropdown = () => (
    <Select options={deskoptions} />
)

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employees:[],
            peoples: [],
            fname:[],
            dept:[],
            firstname:'',
            stdate:'',
            eddate:'',
            deskstdate:'',
            deskeddate:'',
            deskno:'',
            // role:'engineer',
            url:'',
            empdeskno1:'',
            designation:'engineer',
              wkday1:'',
              wkday2:'',
              wkday3:'',
              wkday4:'',
              wkday5:'',
              wkday6:'',
              wkday7:'',
              deskwkday1:'',
              deskwkday2:'',
              deskwkday3:'',
              deskwkday4:'',
              deskwkday5:'',
              deskwkday6:'',
              deskwkday7:''
            
        }
        this.handlePeopleSelect = this.handlePeopleSelect.bind(this);
    }

    componentDidMount() {
    //     let ref = Firebase.database().ref('Booking/NewBooking/booking');
    // ref.on('value', snapshot => {
    //   const state = snapshot.val();
    //   this.setState(state);
    // });         

    db.ref("Booking/NewBooking/booking").on("value", snapshot =>{
        let allpeoples = [];
        snapshot.forEach(snap => {
          allpeoples.push(snap.val());
        });
        this.setState({peoples:allpeoples});
        console.log(allpeoples);
      });
    
      db.ref("Employee/Employeelist/employees").on("value", snapshot =>{
        let allemployees = [];
        snapshot.forEach(snap => {
          allemployees.push(snap.val());
        });
        this.setState({employees:allemployees});
        
      });
      
    // var ref = db.ref('Booking/NewBooking/booking');
    // ref.on('value', gotData);
    }

    // Dropdownbox = () => {
    //     <Select options={this.state.firstname} />
    // }

     handlePeopleSelect = (e) => {
        console.log("Selected Person", e.target.value);
        // const citiesSel = e.target.value;
        // setSelectedCity(citiesSel);

       
        
        let emprole = [];
        this.setState({firstname:e.target.value});
        {
         db.ref().child("Employee/Employeelist/employees").orderByChild("name").equalTo(e.target.value).on("child_added", function(data) {
            //  data.forEach(function(data) {
                console.log(data.val().role);                
                //   role.push(data.val().role);
                // role.push(data.val().role);
                emprole.push(data.val().role);
                
        })
        this.setState({designation:emprole});         
        
    }
               
        let stdate=[];
        let eddate=[];
        let empdeskno = [...this.state.deskno];
        
        db.ref().child("Booking/NewBooking/booking").orderByChild("firstname").equalTo(e.target.value).on("child_added", function(data) {
            
                console.log(data.val().startdate);
                console.log(data.val().enddate);
                console.log(data.val().deskno);                
                stdate.push(data.val().startdate);
                eddate.push(data.val().enddate);
                empdeskno.push(data.val().deskno);
                console.log(empdeskno);
               
        });    
            this.setState({stdate:stdate});
            this.setState({eddate:eddate});
            
           
            const d1 = new Date(stdate),
            d2 = new Date(eddate),
            diff = (d2-d1)/864e5,
            
            dateFormat = {weekday:'long',month:'short',day:'numeric'},
            dates = Array.from(
              {length: diff+1},
              (_,i) => {
                
                const date = new Date(stdate) 
                date.setDate(d1.getDate()+i) 
                const [weekdayStr, dateStr] = date.toLocaleDateString('en-US',dateFormat).split(', ')
                
                return <div> {dateStr} {weekdayStr} <span style={{position:"absolute",marginLeft:"10%"}}> {empdeskno} </span> </div>
                              }
            )
          //  let noofdays = diff;
          
          //  for (let n=0;n<=diff;n++){
          //    this.setState({empdeskno:[...this.state.deskno]});
          //  }
                // this.setState({
                //   empdeskno:[...this.state.deskno], empdeskno});
              
               
              
              // console.log("empdeskno", empdeskno);
            // }                 
            this.setState({wkday1:dates[0]});
            // this.setState({wkdesk1:empdeskno[0]});
            this.setState({wkday2:dates[1]});
            // this.setState({wkdesk2:empdeskno[1]});
            this.setState({wkday3:dates[2]});
            // this.setState({wkdesk3:empdeskno[2]});
            this.setState({wkday4:dates[3]});
            // this.setState({wkdesk4:empdeskno[3]});
            this.setState({wkday5:dates[4]});
            // this.setState({wkdesk5:empdeskno[4]});
            this.setState({wkday6:dates[5]});
            // this.setState({wkdesk6:empdeskno[5]});
            this.setState({wkday7:dates[6]});
            // this.setState({wkdesk7:empdeskno[6]});

            console.log(dates[0]);
            console.log(dates[1]);
            console.log(dates[2]);

          //   <h5>Designation: {cellNum}</h5>           
          
           
     }
       

     handleDeskSelect(e){
        console.log("Selected Desk", e.target.value);

        let deskstdate=[];
        let deskeddate=[];
        let fname=[];
        let dept=[];
        db.ref().child("Booking/NewBooking/booking").orderByChild("deskno").equalTo(e.target.value).on("child_added", function(data) {
          deskstdate.push(data.val().startdate);
          deskeddate.push(data.val().enddate);
          fname.push(data.val().firstname);
          dept.push(data.val().division);
                         
    });   
    
    this.setState({deskstdate:deskstdate});
    this.setState({deskeddate:deskeddate});
    console.log(deskstdate);
    console.log(deskeddate);
    this.setState({fname:fname});
    this.setState({dept:dept});
     const d1 = new Date(deskstdate),
     d2 = new Date(deskeddate),
     diff = (d2-d1)/864e5,
     
     dateFormat = {weekday:'long',month:'short',day:'numeric'},
     dates = Array.from(
       {length: diff+1},
       (_,i) => {
         
         const date = new Date(deskstdate) 
         date.setDate(d1.getDate()+i) 
         console.log(date);
         const [weekdayStr, dateStr] = date.toLocaleDateString('en-US',dateFormat).split(', ')
         console.log(weekdayStr);
         return <div style={{ width:"200px"}}> {dateStr} {weekdayStr} <span style={{position:"absolute", width:"200px", marginLeft:"4%"}} > {fname} </span> <span style={{position:"absolute", width:"200px", marginLeft:"20%"}} >  {dept} </span></div>
              }
              
     )
     console.log(dates);
     
     this.setState({deskwkday1:dates[0]});
    //  this.setState({deskwkdesk1:empdeskno[0]});
    console.log(dates[0]);
     this.setState({deskwkday2:dates[1]});
    //  this.setState({wkdesk2:empdeskno[1]});
     this.setState({deskwkday3:dates[2]});
    //  this.setState({wkdesk3:empdeskno[2]});
     this.setState({deskwkday4:dates[3]});
    //  this.setState({wkdesk4:empdeskno[3]});
     this.setState({deskwkday5:dates[4]});
    //  this.setState({wkdesk5:empdeskno[4]});
     this.setState({deskwkday6:dates[5]});
    //  this.setState({wkdesk6:empdeskno[5]});
     this.setState({deskwkday7:dates[6]});
    //  this.setState({wkdesk7:empdeskno[6]});



     }

      empdesignation(){
        // const {employees} = this.state;
        // {employees.map((employee) => {
             
        //     if (this.state.firstname === employee.name){
        //        return ( <h5> Designation:   {employee.role} </h5> )
        //        console.log('matches name');
        //     }
       
            
       
      }

render(){
    // let peoplelist = Firebase.database().ref('Booking/NewBooking');
    //   let peoples = this.state.peoples;
    //   let options = peoples.map((people) =>
    //         <option key={people.Name}>{people.Name}</option>
    //         );
    const { peoples } = this.state;
    const {designation} = this.state;
    return(
        <Tabs >
    
 <div label="People" >
 <img style={{float:'right', marginRight:'30%'}} src={offlayout} alt="Layout of Office" />             
 <div style={{width:'30%', marginLeft:'30px'}}>

   <h3> Select Employee Name</h3> <br/>
      
      
        <select style={{width:'100%', height:'10%'}} name="peoples" onChange={this.handlePeopleSelect.bind(this)}  >
          <option value="">Select the employee</option>
          
          {peoples.map((people) => (
            <option  value={people.firstname}>
              {people.firstname} {people.lastname}
            </option>
            
          ))}
        </select>
            <br/>
            
        
         <br />
         <Image style={{padding:"3%"}} src={person} rounded /> <br/>
         <label>Name: {this.state.firstname}</label> <br /> <br/>
         
            <label>Designation: {this.state.designation} </label>
                     
            
         
           
   <table >
     <tr>
         <th style={{paddingRight:'20px'}}>Week Days</th>
         <th style={{marginRight:"200px", position:"absolute"}} >DeskBooked</th>
         
     </tr>
     <tr >
         <td style={{padding:'10px'}}>{this.state.wkday1}</td>
         {/* <td style={{padding:'10px'}}>{this.state.wkdesk1}</td>            */}
         
     </tr>
     <tr >
         <td style={{padding:'10px'}}>{this.state.wkday2}</td>
         {/* <td style={{padding:'10px'}}>{this.state.wkdesk2}</td>            */}
         
     </tr>
     <tr >
         <td style={{padding:'10px'}}>{this.state.wkday3}</td>
         {/* <td style={{padding:'10px'}}>{this.state.wkdesk3}</td>            */}
         
     </tr>
     <tr >
         <td style={{padding:'10px'}}>{this.state.wkday4}</td>
         {/* <td style={{padding:'10px'}}>{this.state.wkdesk4}</td>            */}
         
     </tr>
     <tr >
         <td style={{padding:'10px'}}>{this.state.wkday5}</td>
         {/* <td style={{padding:'10px'}}>{this.state.wkdesk5}</td>            */}
         
     </tr>
     <tr >
         <td style={{padding:'10px'}}>{this.state.wkday6}</td>
         {/* <td style={{padding:'10px'}}>{this.state.wkdesk6}</td>            */}
         
     </tr>
     </table>
         <br/>
         </div>
         </div>
 <div label="Desk" style={{width:'30%'}}>
 <img style={{float:'right', marginRight:'10%'}} src={offlayout} alt="Layout of Office"  />             
     <h3>Select the Desk Number</h3> <br />
     <div style={{width:'30%', marginLeft:'30px'}}>
     {/* <DropdownButton id="dropdown-basic-button" title="Desk Number">
     <Dropdown.Item href="#/action-1">Action</Dropdown.Item> <br />
     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> <br />
     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </DropdownButton> <br /> */}
        {/* <Deskdropdown /> <br/> */}

        <select style={{width:'100%', height:'10%'}} name="Desks" onChange={this.handleDeskSelect.bind(this)}  >
          <option value="">Select the Deskno</option>
          {peoples.map((people) => (
            <option  value={people.deskno}>
              {people.deskno} 
            </option>
            
          ))}
        </select>
            

   <h3> Desk Assigned for People</h3> <br/>
   
   <table >
     <tr>
         <th style={{paddingRight:'10px'}}>Week Days</th>
         <th style={{paddingRight:'80px'}}>Person</th> 
         <th style={{marginLeft:'60px'}}>Department</th>
     </tr>
     <tr >
         <td>{this.state.deskwkday1}</td>
         {/* <td style={{padding:'10px'}}>{this.state.fname}</td>            */}
         {/* <td style={{padding:'10px'}}>{this.state.dept}</td> */}
     </tr>
     <tr >
         <td>{this.state.deskwkday2}</td>
         {/* <td style={{padding:'10px'}}>{this.state.fname}</td>            */}
         {/* <td style={{padding:'10px'}}>{this.state.dept}</td> */}
     </tr>
     <tr >
         <td>{this.state.deskwkday3}</td>
         {/* <td style={{padding:'10px'}}>{this.state.fname}</td>            */}
         {/* <td style={{padding:'10px'}}>{this.state.dept}</td> */}
     </tr>
     <tr >
         <td>{this.state.deskwkday4}</td>
         {/* <td style={{padding:'10px'}}>{this.state.fname}</td>            */}
         {/* <td style={{padding:'10px'}}>{this.state.dept}</td> */}
     </tr>
     <tr >
         <td>{this.state.deskwkday5}</td>
         {/* <td style={{padding:'10px'}}>{this.state.fname}</td>            */}
         {/* <td style={{padding:'10px'}}>{this.state.dept}</td> */}
     </tr>
     <tr >
         <td>{this.state.deskwkday6}</td>
         {/* <td style={{padding:'10px'}}>{this.state.fname}</td>            */}
         {/* <td style={{padding:'10px'}}>{this.state.dept}</td> */}
     </tr>
     </table>
 </div>
 </div>
</Tabs>

    )
}
}

export default Map;
 