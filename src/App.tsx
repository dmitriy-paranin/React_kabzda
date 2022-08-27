import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff";

export function App() {
    let  [collapsed, setCollapsed] = useState (true);


    return (
        <div>
            <AppTitle/>
            Article 1
            <Accordion
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                title={"Title-1"}/>
            <OnOff/>
            <Rating />

        </div>
    )
}

let AppTitle = () => {
    return <h2>Name App / header</h2>
}

