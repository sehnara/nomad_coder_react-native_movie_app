import React from "react";
import { View } from "react-native";

export default function Task({ task: { title } }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
