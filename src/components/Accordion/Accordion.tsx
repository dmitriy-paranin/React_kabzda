import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}
export type AccordionType={
    title: string
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionBodyType={
    items: ItemType[]
    onClickBody: (value: any) => void
}




export let Accordion = (props: AccordionType) => {
    let [collapsed, setСollapsed] = useState<boolean>(true);

    return <div>
        <AccordionTitle title={props.title}
                        onClickTitle={()=>setСollapsed(!collapsed)}
                        />
       {!collapsed && <AccordionBody onClickBody={props.onClick} items={props.items}/>}
    </div>
}


type AccordionTitleType={
    title: string
    onClickTitle: ()=>void
}

let AccordionTitle = (props: AccordionTitleType) => {
    return <h3 onClick={ () => props.onClickTitle() }>{props.title}</h3>
}

let AccordionBody = (props: AccordionBodyType) => {
    return <>
        <ul>
            {props.items.map((i, index) => <li onClick={()=>{props.onClickBody(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    </>
}