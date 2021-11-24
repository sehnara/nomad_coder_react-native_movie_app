import React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Text, TouchableOpacity } from 'react-native'

const stack = createNativeStackNavigator();

const ScreenOne =({navigation: {navigate}}) => <TouchableOpacity onPress={()=>navigate("Two")}><Text>one</Text></TouchableOpacity>
const ScreenTwo =({navigation: {navigate}}) => <TouchableOpacity onPress={()=>navigate("Tab", {screen : "Tv"})}><Text>two</Text></TouchableOpacity>
const ScreenThree =({navigation: {setOptions}}) => <TouchableOpacity onPress={()=>setOptions({title : "SEHOON"})}><Text>three</Text></TouchableOpacity>

const Stack = () => {
   return (
    <stack.Navigator 
        initialRouteName={"One"} 
        screenOptions={{
            // presentation : "modal",
            headerBackTitleVisible : false,
            animation : "default", 
            headerTintColor : "pink", 
            // headerBackTitleVisible : false,
        }}>
        <stack.Screen name="One" component={ScreenOne}/>
        <stack.Screen name="Two" component={ScreenTwo}/>
        <stack.Screen name="Three" component={ScreenThree}/>
    </stack.Navigator>    
   )
}
export default Stack