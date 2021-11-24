import React from "react"
import {} from "react-native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Movies from "../screen/Movies"
import Tv from "../screen/Tv"
import Search from "../screen/Home"

const stack = createNativeStackNavigator();
const Stack = () => {
   return (
    <Stack.Navigator>
        <Stack.Screen name="Movies" component={Movies}/>
        <Stack.Screen name="Tv" component={Tv}/>
        <Stack.Screen name="Movies" component={Movies}/>
    </Stack.Navigator>    
   )
}

export default Stack