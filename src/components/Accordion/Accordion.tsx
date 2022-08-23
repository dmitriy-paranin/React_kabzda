import React from "react";

type AccordionType={
    title: string
    collapsed: boolean
}
type AccordionTitleType={
    title: string
}

export let Accordion = (props: AccordionType) => {
    return <div>
        <AccordionTitle title={props.title}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

let AccordionTitle = (props: AccordionTitleType) => {
    return <h3>{props.title}</h3>
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