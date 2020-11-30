import React, { Children } from 'react';
import Chart from './chart';
import Imageupload from './uploadlayout';
// import Layout from './officelayout.js';
import offlayout from "./officelayout.jpg";
import person from "./bala.jpg";
import Schedules from "./schedules";
// import ScheduleItem from "./ScheduleItem";
// import ScheduleItem from "./ScheduleItem";
import Map from "./map";
import Tree from "./tree";
import Booknow from "./Booknow";
// import Analytics from "./analytics";
import Empanalytics from "./Empanalytics";
import Empanalyticsbackup from "./Empanalyticsbackup";

const LayoutOne = ({Children}) => 
   <div>
        <h2 style={{marginLeft:'30%'}}> Employee Profile</h2>
        {Children}
        <Chart />
        <div style={{float:'right'}}>
            
        <h5> Organization Chart </h5>
        <br/>
         <Tree />
         </div>
   </div>;

const LayoutTwo = ({Children}) =>
<div>
    <h2>Upload Office Layout </h2>
    {Children}
    <Imageupload />
</div>;

const LayoutThree = ({Children}) =>
<div>
    {/* <h2> Book Now</h2> */}
    {Children}
    <Booknow />
    {/* <img src={offlayout} alt="Layout of Office" height={600} width={1000} usemap="#workmap" /> */}
    {/* <img src={offlayout} usemap="#image-map" />

      <map name="image-map" >
      <area target="" alt="front desk" title="front desk" href="" coords="75,412,357,489" shape="rect"/>
      <area target="" alt="100" title="100" href="javascript:booknow();" coords="10,469,35,491" shape="rect" />
      <area target="" alt="101" title="101" href="" coords="11,441,35,463" shape="rect"/>
    <area target="" alt="102" title="102" href="" coords="11,412,36,431" shape="rect"/>
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
    { <area target="" alt="Cabin5" title="Cabin5" href="" coords="124,243,177,294" shape="rect"/>
    <area target="" alt="Cabin1" title="Cabin1" href="" coords="296,246,353,293" shape="rect"/>
    <area target="" alt="Cabin2" title="Cabin2" href="" coords="266,357,324,408" shape="rect"/>
    <area target="" alt="Cabin3" title="Cabin3" href="" coords="75,325,139,407" shape="rect"/>
    <area target="" alt="Cabin4" title="Cabin4" href="" coords="146,326,207,407" shape="rect"/> }
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
      </map> */}

    </div>


const LayoutFour = ({Children}) =>
<div>
<h2 style={{textAlign: 'center'}}> Schedules</h2>
    <h4 style={{textAlign: 'center'}}>Everyone At Office</h4>
    <Schedules />
    {/* <ScheduleItem /> */}
</div>

const LayoutFive = ({Children}) =>
<div>
    <h2 style={{textAlign:'center'}}> Analytics</h2>
    {Children}
    <Empanalytics />
    {/* <Analytics /> */}
</div>

const LayoutSix = ({Children}) =>
<div>
    <h2 style={{textAlign:'center'}}> Map</h2>
    {Children}
    < Map />
     {/* <Empanalyticsbackup /> */}
    </div>
    
    


export {LayoutOne, LayoutTwo, LayoutThree, LayoutFour, LayoutFive, LayoutSix}
