### 1. Apploading

#### 1) Asset

- 로컬에 있는 이미지 파일을 Asset으로 가져오기 위한 API
- 일반적으로 로고 preload할 때 주로 사용

1. import { Asset } from "expo-asset";
2. await Asset.loadAsync(require("./assets/test.png"));

#### 1-1) Image

- 서버에 있는 이미지 로드 시, 'Image' API 이용

1. import {Image } from "react-native";
2. await Image.prefetch("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png");

#### 2) Font

1. import \* as Font from "expo-font";
2. import { IonIcons } from "@expo/vector-icons";
3. const staryLoading = async () => {
   // 이미지나 폰트, 데이터베이스 등의 preload
   await Font.loadAsync(IonIcons.font);
   };

#### 3) 중복 피하기

export default function App() {
const [isReady, setIsReady] = useState(false);
const loadFonts = (fonts) => {
fonts.map((font) => Font.loadAsync(font));
};
const loadAssets = (assets) => {
assets.map((asset) => {
if (typeof asset === "string") {
return Image.prefetch(asset);
} else {
return Asset.loadAsync(asset);
}
});
};
const staryLoading = async () => {
// 이미지나 폰트, 데이터베이스 등의 preload
const fonts = loadFonts([IonIcons.font]);
const assets = loadAssets([
require("./assets/test.png"),
"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
]);
await new Promise([...fonts, ...assets]); // 모든 promise들이 끝날 때까지 기다린다.
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

#### 4) HOOK

- 단지 Asset(local), font를 preload할 때만 사용 가능
- 코드가 확 줄지만, 로딩 함수를 이용할 수는 없다.
- useAssets의 경우, 서버의 이미지를 prefetch할 수는 없다.

## 2. NAVIGATION

### 1. 설치

#### 1) npm install @react-navigation/native

#### 2) expo install react-native-screens react-native-safe-area-context

#### 3) [IOS] npx pod-install ios

#### \_

### 2. [TAB Nav] bottom tabs navigation

#### 1) npm install @react-navigation/bottom-tabs

#### 2) navigation 폴더 - 'createBottomTabNavigator()'

#### 3) Screen 폴더 - 각 컴포넌트 생성

#### 4) App.js - '<NavigationContainer>' 내에서 Tab 내비게이션 구현한 거 넣으면 됨
