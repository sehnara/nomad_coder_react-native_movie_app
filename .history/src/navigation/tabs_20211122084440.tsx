import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import Movies from '../screen/Movies'
import Tv from '../screen/Tv'
import Home from '../screen/Home'

const Tab = createBottomTabNavigator();

const Tabs = ()=>(<Tab.Navigator initialRouteName = "Home">
    <Tab.Screen name="Movies" component={Movies}/>
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Tv" component={Tv}/>
</Tab.Navigator>)

export default Tabs