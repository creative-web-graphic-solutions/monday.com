import React, { Fragment, useState, useEffect } from "react";
import randomcolor from "randomcolor";
import bala from "./bala.jpg";


// import faker from "faker";

import data from "./data.json";

let Test = "Bala";
let designation = "CEO";

// Create a state



const Card = (props) => {
  const levelColor = randomcolor();
  const [filterInput, setFilterInput] = useState("");
  const [task, setTask] = useState("");
  const textInput = React.createRef();
// Update the state when input changes
const handleName = e => {
  const value = e.target.value || undefined;
  setFilterInput(value);
};

  return (
    <ul>
      {props.data.map((item) => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="image">
                <img
                  src={bala}
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                />
              </div>
              <div className="card-body">
                <h4>{<input value={filterInput} onChange={handleName} ref={textInput} />}</h4>
                <p>{designation}</p>
              </div>
              <div className="card-footer" style={{ background: levelColor }}>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/2950/2950657.svg"
                  alt="Chat"
                />
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/1034/1034131.svg"
                  alt="Call"
                />
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/570/570387.svg"
                  alt="Video"
                />
              </div>
              <div>
              <button class="collapsible"></button>
              </div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Chart;
