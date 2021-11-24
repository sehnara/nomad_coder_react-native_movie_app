import React from "react";
import { View } from "react-native";
import Task from "./Task";

const Template = (args) => <Task {...args} />;

export default function Task({ task: { title } }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
