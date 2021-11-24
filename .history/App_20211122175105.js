import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { Font } from "expo-font";
import Constants from "expo-constants";
import { IonIcons } from "@expo/vector-icons";

// You can import from local files
import AssetExample from "./components/AssetExample";

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = (fonts) => {
    fonts.map((font) => Font.loadAsync(font));
  };
  const loadAssets = (assets) => {
    assets.map((asset) => Asset.loadAsync(asset));
  };
  const staryLoading = async () => {
    const fonts = loadFonts([IonIcons.font]);
    const assets = Asset.loadAsync(require("./assets/snack-icon.png"));
    await new Promise([...fonts, ...assets]);
  };
  const onFinish = () => {
    setIsReady(true);
  };

  if (!isReady) {
    return <AppLoading startAsync={staryLoading} onFinish={onFinish} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get
        a shareable url.
      </Text>
      {/* <Card>
        {/* <AssetExample /> */}
      </Card> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
