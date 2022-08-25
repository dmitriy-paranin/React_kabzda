import React, {useState} from "react";

type StarType = {
    selected: boolean
}
type RatingType = {
    setValue: ()=>void
}

export let Rating = (props: RatingType) => {
    let [value, setValue] = useState(1)
    return <div>
        <Star selected={value > 0}/>
        <Star selected={value > 1}/>
        <Star selected={value > 2}/>
        <Star selected={value > 3}/>
        <Star selected={value > 4} />
    </div>
}

let Star = (props: StarType) => {
    let onClickBHandler = () => {

    }
    let onClickHandler = () => {

    }

    return props.selected ?
        <span onClick={onClickBHandler}><b>star </b></span> :
        <span onClick={onClickHandler}>star </span>
}