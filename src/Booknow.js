import React from 'react';
import offlayout from "./officelayout.jpg";
import Image from 'react-bootstrap/Image';
import { Checkbox } from 'react-input-checkbox';
import { TextInput } from 'react-native';
import {db} from './config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import Firebase from 'firebase';
// const Checkbox = ({props}) => (
//     <Checkbox disabled={props.disabled} value={props.value} onChange={props.onChange} >
// )

const mapperclickhandler = (item, idx ) => {
  alert('clicked Item Id:'+ {item});
}

class Booknow extends React.Component{
    constructor(props){
        super(props);
        this.state = {            
            booking:[],
            // checkbox : 'yes'
            status: false,
            
        }
        this.show = this.show.bind(this);
    }

    // componentDidMount() {
    //     db.ref('Booking/NewBooking').on('value', querySnapShot => {
    //        let data = querySnapShot.val() ? querySnapShot.val() : {};         
    //        let allpeoples = {...data};
    //        this.setState({
    //          allpeople: allpeoples,
  
    //        });     
    //     });
    //  }

    //  addNewbooking() {
    //     let newpeople = db.ref('Booking/NewBooking').push({
    //        Name: this.state.Name,
    //        Startdate: this.state.Startdate,
    //        Enddate: this.state.Enddate,
    //        Department: this.state.Department,
    //        Deskno: this.state.Deskno,
    //        Inhousehour: this.state.Inhousehour,
    //        Onlinehour:this.state.Onlinehour
    //      });
         
    //     //  Alert('Action!', 'A new item was created');
    //      this.setState({
    //        Name: '',
    //        Startdate:'',
    //        Enddate:'',
    //        Department:'',
    //        DeskNo:'',
    //        Inhousehour:'',
    //        Onlinehour:''
  
    //      });
         
    //  }

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
  

    onClick = (e) =>{
        e.preventDefault()
        alert('You have clicked:' + e);
        
    }

    show(){
        return(
            'The seat Number is:'+ this.seatno
        )
    }
    changeStatus = (event) => {
       this.setState((prevState) => {
         return {
           ...prevState,
           status:!prevState.status
         }
       })
    }

render(){
    
    
    return(
        <div >
           <div style={{float:'right', marginRight:'20%', marginTop:'5%'}}>       
        <h3>My Booking Details</h3> 
        
      <form onSubmit={ this.handleSubmit } style={{background:'white', padding:'40px'}} >
            <div className="form-group" >
              <input type='hidden' ref='uid' />
              <div  className="form-group">
                <label for="firstname">FirstName:</label>
                <input style={{marginLeft:'20px'}} type="text" ref='firstname'  placeholder="FirstName" />
              </div>
              <div className="form-group">
                <label>LastName:</label>
                <input style={{marginLeft:'20px'}} type="text" ref='lastname' placeholder="LastName" />
              </div>
              <div className="form-group">
                <label>Start Date:</label>
                <input style={{marginLeft:'20px'}} type="date" ref='startdate' placeholder="Start Date" />
              </div>
              <div className="form-group">
                <label>End Date:</label>
                <input style={{marginLeft:'22px'}} type="date" ref='enddate' placeholder="End Date" />
              </div>
              <div className="form-group ">
                <label>DeskNo:</label>
                <input style={{marginLeft:'25px'}} type="text" ref='deskno'  placeholder="DeskNo" />
              </div>
              <div className="form-group ">
                <label>Division:</label>
                <input  style={{marginLeft:'27px'}} type="text" ref='division' placeholder="Division" />
              </div>
              
              <div className={"form-group"}>
                
                <input type="checkbox" className="form-check-input" value={this.state.status} ref='onlinehour' onChange={this.changeStatus} />
                <label style={{width:'200px'}}> Online Hours</label>
                <input type="checkbox" style={{float:'right'}} value={!this.state.status} ref='inhousehour' onChange={this.changeStatus} className="form-check-input" />
                <label> Inhouse Hours</label>
              </div>
            </div>
            <button type="submit" style={{marginLeft:'120px'}} className="btn btn-primary">Save</button>
          </form>

        </div>
        <h1 style={{marginLeft:'5%'}}> Block Selected Dates</h1>
        <img src={offlayout} usemap="#imagemap" style={{marginLeft:'4%'}} />

        <map name="imagemap" >
        <area shape="rect" coords="75,412,357,489" alt="front desk" href="" title="front desk"   />
        <area target="" alt="100" title="100" value="100" id="100" onClick={this.onClick} coords="10,469,35,491" shape="rect" />
        <area target="" alt="101" title="101" href="" onClick={this.onClick} coords="11,441,35,463" shape="rect"/>
      <area target="" alt="102" title="102" href="" id="102" onPress={(item, idx) => mapperclickhandler(item, idx) } coords="11,412,36,431" shape="rect"/>
      <area target="" alt="103" title="103" href="" coords="10,382,35,401" shape="rect"/>
      <area target="" alt="104" title="104" href="" coords="13,352,35,371" shape="rect"/>
      <area target="" alt="105" title="105" href="" coords="11,321,33,340" shape="rect"/>
      <area target="" alt="106" title="106" href="" coords="11,293,35,309" shape="rect"/>
      <area target="" alt="107" title="107" href="" coords="12,259,35,277" shape="rect"/>
      <area target="" alt="108" title="108" href="" coords="10,228,37,251" shape="rect"/>
      <area target="" alt="109" title="109" href="" coords="13,202,36,220" shape="rect"/>
      <area target="" alt="110" title="110" href="" coords="8,172,37,193" shape="rect"/>
      <area target="" alt="111" title="111" href="" coords="12,139,37,162" shape="rect"/>
      <area target="" alt="112" title="112" href="" coords="42,95,68,116" shape="rect"/>
      <area target="" alt="113" title="113" href="" coords="74,94,99,116" shape="rect"/>
      <area target="" alt="114" title="114" href="" coords="107,94,129,114" shape="rect"/>
      <area target="" alt="115" title="115" href="" coords="136,94,162,115" shape="rect"/>
      <area target="" alt="116" title="116" href="" coords="168,93,195,119" shape="rect"/>
      <area target="" alt="117" title="117" href="" coords="201,95,228,116" shape="rect"/>
      <area target="" alt="118" title="118" href="" coords="233,96,257,116" shape="rect"/>
      <area target="" alt="119" title="119" href="" coords="264,94,290,115" shape="rect"/>
      <area target="" alt="120" title="120" href="" coords="296,94,322,115" shape="rect"/>
      <area target="" alt="121" title="121" href="" coords="326,94,349,115" shape="rect"/>
      <area target="" alt="122" title="122" href="" coords="386,126,408,148" shape="rect"/>
      <area target="" alt="123" title="123" href="" coords="383,155,410,176" shape="rect"/>
      <area target="" alt="124" title="124" href="" coords="385,184,408,209" shape="rect"/>
      <area target="" alt="125" title="125" href="" coords="383,218,409,236" shape="rect"/>
      <area target="" alt="126" title="126" href="" coords="385,244,410,266" shape="rect"/>
      <area target="" alt="127" title="127" href="" coords="384,276,410,297" shape="rect"/>
      <area target="" alt="128" title="128" href="" coords="385,308,408,327" shape="rect"/>
      <area target="" alt="129" title="129" href="" coords="384,338,407,359" shape="rect"/>
      <area target="" alt="130" title="130" href="" coords="383,368,408,387" shape="rect"/>
      <area target="" alt="131" title="131" href="" coords="382,395,407,416" shape="rect"/>
      <area target="" alt="132" title="132" href="" coords="383,427,411,447" shape="rect"/>
      <area target="" alt="133" title="133" href="" coords="385,457,409,476" shape="rect"/>
      <area target="" alt="Conference hall" title="Conference hall" href="" coords="76,151,173,237" shape="rect"/>
      <area target="" alt="Meeting Room" title="Meeting Room" href="" coords="75,243,117,297" shape="rect"/>
      {/* <area target="" alt="Cabin5" title="Cabin5" href="" coords="124,243,177,294" shape="rect"/>
      <area target="" alt="Cabin1" title="Cabin1" href="" coords="296,246,353,293" shape="rect"/>
      <area target="" alt="Cabin2" title="Cabin2" href="" coords="266,357,324,408" shape="rect"/>
      <area target="" alt="Cabin3" title="Cabin3" href="" coords="75,325,139,407" shape="rect"/>
      <area target="" alt="Cabin4" title="Cabin4" href="" coords="146,326,207,407" shape="rect"/> */}
      <area target="" alt="135" title="135" href="" coords="233,323,261,350" shape="rect"/>
      <area target="" alt="136" title="136" href="" coords="233,354,258,380" shape="rect"/>
      <area target="" alt="137" title="137" href="" coords="234,386,257,407" shape="rect"/>
      <area target="" alt="138" title="138" href="" coords="264,325,291,347" shape="rect"/>
      <area target="" alt="139" title="139" href="" coords="297,324,325,346" shape="rect"/>
      <area target="" alt="140" title="140" href="" coords="329,325,354,348" shape="rect"/>
      <area target="" alt="141" title="141" href="" coords="330,355,351,374" shape="rect"/>
      <area target="" alt="142" title="142" href="" coords="265,247,290,295" shape="rect"/>
      <area target="" alt="143" title="143" href="" coords="233,247,259,266" shape="rect"/>
      <area target="" alt="144" title="144" href="" coords="233,273,258,296" shape="rect"/>
      <area target="" alt="145" title="145" href="" coords="183,272,206,292" shape="rect"/>
      <area target="" alt="146" title="146" href="" coords="181,241,206,263" shape="rect"/>
      <area target="" alt="147" title="147" href="" coords="181,215,204,235" shape="rect"/>
      <area target="" alt="148" title="148" href="" coords="179,182,204,203" shape="rect"/>
      <area target="" alt="149" title="149" href="" coords="179,150,208,174" shape="rect"/>
        </map>
        </div>
    )
}

handleSubmit = (event) => {
  event.preventDefault();
  let firstname = this.refs.firstname.value;
  let lastname = this.refs.lastname.value;
  let deskno = this.refs.deskno.value;
  let division = this.refs.division.value;
  let startdate = this.refs.startdate.value;
  let enddate = this.refs.enddate.value;
  let onlinehour = this.refs.onlinehour.value;
  let inhousehour = this.refs.inhousehour.value;
  // let role = this.refs.role.value;
  let uid = this.refs.uid.value;

  if (uid && firstname && lastname){
    const { booking } = this.state;
    const devIndex = booking.findIndex(data => {
      return data.uid === uid 
    });
    booking[devIndex].firstname = firstname;
    booking[devIndex].lastname = lastname;
    booking[devIndex].deskno = deskno;
    booking[devIndex].division = division;
    booking[devIndex].startdate = startdate;
    booking[devIndex].enddate = enddate;
    booking[devIndex].onlinehour = onlinehour;
    booking[devIndex].inhousehour = inhousehour;
    // schedules[devIndex].role = role;
    this.setState({ booking });
  }
  else if (firstname && lastname ) {
    const uid = new Date().getTime().toString();
    const { booking } = this.state;
    booking.push({ uid, firstname, lastname, deskno, division, startdate, enddate, onlinehour, inhousehour })
    this.setState({ booking });
  }

  this.refs.firstname.value = '';
  this.refs.lastname.value = '';
  this.refs.deskno.value = '';
  this.refs.division.value = '';
  this.refs.startdate.value = '';
  this.refs.enddate.value = '';
  this.refs.onlinehour.value = '';
  this.refs.inhousehour.value = '';
  this.refs.uid.value = '';
}

}

export default Booknow;