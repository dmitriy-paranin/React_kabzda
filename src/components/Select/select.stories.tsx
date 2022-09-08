import React from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./select";

export default {
    title: 'components/Select',
    component: Select,
};


export const WithValue = () =>
    <Select anChange={action("value chainged")}
            value={"3"}
            items={[
                {title: "Minsk", value: "1"},
                {title: "Kiev", value: "2"},
                {title: "London", value: "3"}
            ]}
    />;

export const WithoutValue = () =>
    <Select anChange={action("value chainged")}
            items={[
                {title: "Minsk", value: "1"},
                {title: "Kiev", value: "2"},
                {title: "London", value: "3"}
            ]}
    />;

