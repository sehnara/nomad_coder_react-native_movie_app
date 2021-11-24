import React, { useState } from "react";
import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { IonIcons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadFonts = (fonts) => {
    fonts.map((font) => Font.loadAsync(font));
  };
  const staryLoading = async () => {
    // 이미지나 폰트, 데이터베이스 등의 preload
    const fonts = loadFonts([IonIcons.font]);
    await Asset.loadAsync(require("./assets/test.png"));
    await Image.prefetch(
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
    );
  };
  const onError = () => {
    console.warn;
  };
  const onFinish = () => {
    setIsReady(true);
  };
  if (!isReady) {
    return (
      <AppLoading
        startAsync={staryLoading}
        onError={onError}
        onFinish={onFinish}
      />
    );
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
