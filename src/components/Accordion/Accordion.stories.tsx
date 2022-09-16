import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'components/Accordion',
    component: Accordion
};

const onClickCallback = action("some item was clicked")

const Template: Story<AccordionType> = (args) => <Accordion {...args} />;
export const CollapsedMode2 = Template.bind({});
CollapsedMode2.args = {
    onClick:,
    items:,
    title: "New title"
}

export const CollapsedMode = () => <Accordion title={"Title"}
                                              items={[{title: "Dima", value: 1},
                                                  {title: "Tanya", value: 2},
                                                  {title: "Liza", value: 3}]}
                                              />;
export const UncollapsedMode = () => <Accordion title={"Title"}
                                                items={[{title: "Dima", value: 1},
                                                    {title: "Tanya", value: 2},
                                                    {title: "Liza", value: 3}]}
                                                />;

export const ModeChanging = () => {

    return <Accordion title={"Title"}
                      items={[{title: "Dima", value: 1},
                          {title: "Tanya", value: 2},
                          {title: "Liza", value: 3}]}
                      onClick={}/>
};