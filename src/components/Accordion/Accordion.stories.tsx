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
    collapsed: true,
    setCollapsed: action("collapsed or uncollapsed clicked"),
    title: "New title"
}

export const CollapsedMode = () => <Accordion collapsed={true}
                                              setCollapsed={action("collapsed or uncollapsed clicked")} title={"Title"}
                                              items={[{title: "Dima", value: 1},
                                                  {title: "Tanya", value: 2},
                                                  {title: "Liza", value: 3}]}
                                              onClick={onClickCallback}/>;
export const UncollapsedMode = () => <Accordion collapsed={false}
                                                setCollapsed={action("collapsed or uncollapsed clicked")}
                                                title={"Title"}
                                                items={[{title: "Dima", value: 1},
                                                    {title: "Tanya", value: 2},
                                                    {title: "Liza", value: 3}]}
                                                onClick={onClickCallback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion collapsed={value}
                      setCollapsed={setValue}
                      title={"Title"}
                      items={[{title: "Dima", value: 1},
                          {title: "Tanya", value: 2},
                          {title: "Liza", value: 3}]}
                      onClick={onClickCallback}/>
};