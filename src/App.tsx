import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff";

export function App() {
    return (
        <div>
            <AppTitle/>
            Article 1
            <Accordion title={"Title-1"}/>
            <OnOff/>
            Article 2
            <Accordion title={"Title-2"}/>
            <Rating />

        </div>
    )
}

let AppTitle = () => {
    return <h2>Name App / header</h2>
}

