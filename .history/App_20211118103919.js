import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ModalTest from "./src/components/ModalTest";

export default function App() {
  const [isShow, setIsShow] = useState(undefined);

  return (
    <SafeAreaView style={styles.container}>
      <Text>dddddd</Text>
      <TouchableOpacity
        onPress={() => {
          setIsShow(true);
        }}
      >
        <Text>click</Text>
      </TouchableOpacity>

      {isShow && <ModalTest isShow={isShow} setIsShow={setIsShow} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
