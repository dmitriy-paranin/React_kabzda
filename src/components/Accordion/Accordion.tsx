import React, {useState, KeyboardEvent, useEffect} from "react";
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

    let [active, setActive] = useState<boolean>(true);
    let [value, setValue] = useState(1);
    let [hoveredElementValue, setHoveredElementValue] = useState(value);

    const toggleItems = () => setActive(!active);
    const selectedItem = props.items.find(i => i.value === value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(value);
    }, [value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        setValue(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                setValue(props.items[0].value)
                return;
            }
        }

        if (e.key === "Escaper" || e.key === "Enter") {
            setActive(false);
        }

        setValue(props.items[0].value)
    }

    return <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
        <div className={styles.main}>
            <AccordionTitle items={props.items}
                            onClickTitle={toggleItems}
                            value={value}
                            selectedItem={selectedItem}
            />
        </div>
        {!active && <div className={styles.items}>
            <AccordionBody onChangeItem={setValue}
                           items={props.items}
                           toggleItems={toggleItems}
                           hoveredItem={hoveredItem}
                           sethoveredElementValue={setHoveredElementValue}
            />
        </div>}
    </div>
}

type AccordionTitleType = {
    items: ItemType[]
    onClickTitle: () => void
    value: any
    selectedItem?: ItemType
}

let AccordionTitle = (props: AccordionTitleType) => {
    return <div onClick={() => props.onClickTitle()}>{props.selectedItem && props.selectedItem.title}</div>
}

type AccordionBodyType = {
    items: ItemType[]
    onChangeItem: (value: any) => void
    toggleItems: () => void
    hoveredItem?: ItemType
    sethoveredElementValue: (value: any) => void
}

let AccordionBody = (props: AccordionBodyType) => {
    const onItemClick = (value: any) => {
        props.onChangeItem(value);
        props.toggleItems()
    };
    return <>
        <div>
            {props.items.map((i, index) => <div
                onMouseEnter={() => {
                    props.sethoveredElementValue(i.value)
                }}
                className={styles.item + " " + (props.hoveredItem === i ? styles.selected : "")}
                onClick={() => {
                    onItemClick(i.value)
                }}
                key={index}>{i.title}</div>)}
        </div>
    </>
}