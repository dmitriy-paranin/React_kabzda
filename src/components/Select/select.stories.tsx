import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./select";

export default {
    title: 'components/Select',
    component: Select,
};


export const WithValue = () =>{
    const [value, setValue] = useState("2");

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {title: "Minsk", value: "1"},
                    {title: "Kiev", value: "2"},
                    {title: "London", value: "3"}
                ]}
        />
    </>
}


export const WithoutValue = () =>{
    const [value, setValue] = useState("2");

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {title: "Minsk", value: "1"},
                    {title: "Kiev", value: "2"},
                    {title: "London", value: "3"}
                ]}
        />
    </>

}


