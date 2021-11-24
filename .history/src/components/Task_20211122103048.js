import React from "react";
import { View } from "react-native";

export default function Task({ task: { title } }) {
  return (
    <View>
      <input type="text" value={title} readOnly={true} />
    </View>
  );
}
