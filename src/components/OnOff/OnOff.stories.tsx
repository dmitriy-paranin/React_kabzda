import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'components/OnOff',
    component: OnOff
};

export const OnMode = () => <OnOff on={true} setOn={action("clicked")}/> ;
export const OffMode = () => <OnOff on={false} setOn={action("clicked")}/> ;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} setOn={setValue}/>
};