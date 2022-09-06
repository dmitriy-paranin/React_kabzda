import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}
export type AccordionType={
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean)=>void
    items: ItemType[]
    onClick: (value: any) => void
}
type AccordionTitleType={
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean)=>void
}
type AccordionBodyType={
    items: ItemType[]
    onClick: (value: any) => void
}




export let Accordion = (props: AccordionType) => {
    return <div>
        <AccordionTitle title={props.title}
                        setCollapsed={props.setCollapsed}
                        collapsed={props.collapsed}

                        />
       {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </div>
}

let AccordionTitle = (props: AccordionTitleType) => {
    return <h3 onClick={()=>{props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
}

let AccordionBody = (props: AccordionBodyType) => {
    return <>
        <ul>
            {props.items.map((i, index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    </>
}