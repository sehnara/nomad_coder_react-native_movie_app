# Dark 모드

### 1. useColorScheme

#### 1) import { useColorScheme } from 'react-native';

#### 2) const isDark = useColorScheme()==='dark';

#### 3) shift + command + a : light <-> dark

- 색상의 경우, 파일 하나를 따로 파서 '상수'나 '오브젝트'로 export 해서 받아주는 방식이 좋다.

### 2. Appearance

### 3. Themes

: NavigationContainer와 관련된다.

#### 1) import {

NavigationContainer,
DarkTheme,
DefaultTheme,
} from "@react-navigation/native";

#### 2) isDark

import { useColorScheme } from "react-native";
const isDark = useColorScheme() === "dark";

#### 3) NavigationContainer에 반영

<NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
<Tabs />
</NavigationContainer>
