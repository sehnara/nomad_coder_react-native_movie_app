import React from "react"
import {} from "react-native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Movies from "../screen/Movies"

const stack = createNativeStackNavigator();
const Stack = () => {
   return (
    <Stack.Navigator>
        <Stack.Screen name="Movies" component={Movies}/>
        <Stack.Screen name="Movies" component={Movies}/>
        <Stack.Screen name="Movies" component={Movies}/>
    </Stack.Navigator>    
   )
}

export default Stack