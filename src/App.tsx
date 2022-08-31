import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, ValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

export function App() {
    let [collapsed, setCollapsed] = useState(true);
    let [value, setValue] = useState<ValueType>(1);
    let [on, setOn] = useState(false);

    return (
        <div>
            <AppTitle/>
            Article 1
            <Accordion
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                title={"Title-1"}/>
            <OnOff on={on}
                   setOn={setOn}/>
            <Rating value={value}
                    setValue={setValue}/>

        </div>
    )
}

let AppTitle = () => {
    return <h2>Name App / header</h2>
}

