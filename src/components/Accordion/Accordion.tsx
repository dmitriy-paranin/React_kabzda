import React, {useState} from "react";

export type AccordionType={
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean)=>void
}
type AccordionTitleType={
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean)=>void
}


export let Accordion = (props: AccordionType) => {


    return <div>
        <AccordionTitle title={props.title}
                        setCollapsed={props.setCollapsed}
                        collapsed={props.collapsed}
                        />
       {!props.collapsed && <AccordionBody/>}
    </div>
}

let AccordionTitle = (props: AccordionTitleType) => {
    return <h3 onClick={()=>{props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
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