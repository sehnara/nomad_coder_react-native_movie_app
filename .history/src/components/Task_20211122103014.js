import React from "react";
import { View } from "react-native";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <View className="list-item">
      <input type="text" value={title} readOnly={true} />
    </View>
  );
}
