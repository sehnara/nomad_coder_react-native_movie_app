import React, { useState } from "react";
import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { IonIcons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";

export default function App() {
  const [assets] = useAssets(["./assets/test.png"]);
const [fonts] = Font.useFonts(IonIcons.font)
  if (!assets || ) {
    return <AppLoading />;
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
