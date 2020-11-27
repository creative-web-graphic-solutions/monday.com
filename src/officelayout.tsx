import React, { useCallback, useState } from "react";
import offlayout from "./officelayout.jpg";
import {DropFile, DisplayFile} from 'react-image-edit';


function officeLayout() {
    console.log(offlayout);
    
    return(
        <React.Fragment>
        <div className="layout">
            <img src={offlayout} alt="Layout of Office" height={600} width={600} />
        </div>
        
            
            
        </React.Fragment>
    );
}

export default officeLayout;