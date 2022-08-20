import React from 'react';
import './App.css';

export function App() {
    return (
        <div>
            <AppTitle/>
            <Accordion/>
            <Raiting/>
        </div>
    )
}

let AppTitle = () => {
    return <>Name App / header</>
}

let Accordion = () => {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}

let AccordionTitle = () => {
    return <h3>Menu</h3>
}

let AccordionBody = () => {
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </>

}

let Raiting = () => {
    return (<div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </div>)
}

let Star = () => {
    return <>star</>
}