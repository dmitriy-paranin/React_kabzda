import React, {useState} from 'react';



export let OnOff = () => {

    let [on, setOn] = useState (false);

    let onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        padding: "3px",
        marginLeft: "3px",
        display: "inline-block",
        backgroundColor: on? "green" : "white"
    }
    let offStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        padding: "3px",
        marginLeft: "3px",
        display: "inline-block",
        backgroundColor: on? "white" : "red"
    }
    let indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        marginLeft: "3px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on? "green" : "red"
    }

    return <div>
        <div style={onStyle} onClick={()=>{setOn(true)}}>ON</div>
        <div style={offStyle} onClick={()=>{setOn(false)}}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>


}