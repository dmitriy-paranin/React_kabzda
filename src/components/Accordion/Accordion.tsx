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


export let Accordion = (props: AccordionType) => {

    let [collapsed, setСollapsed] = useState<boolean>(true);
    const toggleItems = () => setСollapsed(!collapsed);


    return <div>
        <AccordionTitle title={props.title}
                        slectedItem={slectedItem}
                        onClickTitle={toggleItems}
                        />
       {!collapsed && <AccordionBody onChangeItem={setValue}
                                     items={props.items}/>}
    </div>
}

type AccordionTitleType={
    slectedItem: ItemType
    title: string
    onClickTitle: ()=>void
}

let AccordionTitle = (props: AccordionTitleType) => {
    let [value, setValue] = useState(1);
    const slectedItem = props.items.find(i => i.value === props.value);

    return <h3 onClick={ () => props.onClickTitle() }>{props.slectedItem && props.slectedItem.title}</h3>
}

type AccordionBodyType={
    items: ItemType[]
    onChangeItem: (value: any) => void
}

let AccordionBody = (props: AccordionBodyType) => {
    return <>
        <ul>
            {props.items.map((i, index) => <li onClick={()=>{props.onChangeItem(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    </>
}