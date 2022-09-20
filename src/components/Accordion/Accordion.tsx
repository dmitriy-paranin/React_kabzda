import React, {useState} from "react";
import styles from "./Accordion.module.css"



type ItemType = {
    title: string
    value: any
}
export type AccordionType = {
    title: string
    items: ItemType[]
}


export let Accordion = (props: AccordionType) => {

    let [collapsed, setСollapsed] = useState<boolean>(true);
    const toggleItems = () => setСollapsed(!collapsed);

    let [value, setValue] = useState(1);

    return <div className={styles.select}>
        <div className={styles.main}>
            <AccordionTitle items={props.items}
                            onClickTitle={toggleItems}
                            value={value}
            />
        </div>
        {!collapsed && <div className={styles.items}>
            <AccordionBody onChangeItem={setValue}
                           items={props.items}
                           toggleItems={toggleItems}
            />
        </div>}
    </div>
}

type AccordionTitleType = {
    items: ItemType[]
    onClickTitle: () => void
    value: any
}

let AccordionTitle = (props: AccordionTitleType) => {
    const selectedItem = props.items.find(i => i.value === props.value);
    return <h3 onClick={() => props.onClickTitle()}>{selectedItem && selectedItem.title}</h3>
}

type AccordionBodyType = {
    items: ItemType[]
    onChangeItem: (value: any) => void
    toggleItems: () => void
}

let AccordionBody = (props: AccordionBodyType) => {
    const onItemClick = (value: any) => {
        props.onChangeItem(value);
        props.toggleItems()
    };
    return <>
        <ul>
            {props.items.map((i, index) => <div onClick={() => {
                onItemClick(i.value)
            }} key={index}>{i.title}</div>)}
        </ul>
    </>
}