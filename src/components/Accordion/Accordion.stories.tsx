import React, {useState} from 'react';
import {Accordion, AccordionType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'components/Accordion',
    component: Accordion
};

const Template: Story<AccordionType> = (args) => <Accordion {...args} />;
export const CollapsedMode2 = Template.bind({});
CollapsedMode2.args = {
    items:[{title: "Dima", value: 1},
        {title: "Tanya", value: 2},
        {title: "Liza", value: 3}],
    title: "New title"
}



export const ModeChanging = () => {

    return <Accordion title={"Title"}
                      items={[{title: "Dima", value: 1},
                          {title: "Tanya", value: 2},
                          {title: "Liza", value: 3}]}
                      />
};