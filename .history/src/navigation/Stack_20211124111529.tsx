import React from "react"
import {} from "react-native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Movies from "../screen/Movies"
import Tv from "../screen/Tv"
import Search from "../screen/Home"

const stack = createNativeStackNavigator();
const Stack = () => {
   return (
    <stack.Navigator initialRouteName={"Tv"}>
        <stack.Screen name="Movies" component={Movies}/>
        <stack.Screen name="Tv" component={Tv}/>
        <stack.Screen name="Search" component={Search}/>
    </stack.Navigator>    
   )
}

export default Stack