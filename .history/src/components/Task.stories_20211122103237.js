import React from "react";
import { View } from "react-native";
import Task from "./Task";

const Template = (args) => <Task {...args} />;

export default Default = Template.bind({});
Default.args = { task: { title: "sehoon" } };
