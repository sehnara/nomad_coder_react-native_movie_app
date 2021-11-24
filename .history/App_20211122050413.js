import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const staryLoading = async () => {};
  const onError = () => {
    console.warn;
  };
  const onFinish = () => {
    console.log("FINISH");
  };
  if (!isReady) {
    return <AppLoading>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>a</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});