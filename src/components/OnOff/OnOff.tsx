import React, {useState} from 'react';

type OnOffType = {
    on: boolean
    setOn: (value: boolean)=>void
}


export let OnOff = (props: OnOffType) => {

    let onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        padding: "3px",
        marginLeft: "3px",
        display: "inline-block",
        backgroundColor: props.on? "green" : "white"
    }
    let offStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        padding: "3px",
        marginLeft: "3px",
        display: "inline-block",
        backgroundColor: props.on? "white" : "red"
    }
    let indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        marginLeft: "10px",
        marginTop: "10px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on? "green" : "red"
    }
    let allStyle = {
        display: "flex"
    }

    return <div style={allStyle}>
        <div style={onStyle} onClick={()=>{props.setOn(true)}}><b>ON</b></div>
        <div style={offStyle} onClick={()=>{props.setOn(false)}}><b>OFF</b></div>
        <div style={indicatorStyle}></div>
    </div>
}