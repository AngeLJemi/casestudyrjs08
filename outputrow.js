import React from "react";
import './outputrow.css';
const OutputRow =props =>{
    return(
        <div>
            <input type="text" readonly className="screen" style={props.textSize} value={props.value}></input>
        </div>
    )
};
export default OutputRow;