import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

export function App() {
    return (
        <div>
            <AppTitle/>
            Article 1
            <Accordion title={"Title-1"}/>
            <Rating value={3}/>
            Article 2
            <Accordion title={"Title-2"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    )
}

let AppTitle = () => {
    return <h2>Name App / header</h2>
}

