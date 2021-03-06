import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import Movies from '../screen/Movies'
import Tv from '../screen/Tv'
import Home from '../screen/Home'
import Stack from './Stack'
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

const Tabs = ()=>{
    const isDark = useColorScheme() === "dark";

    return(<Tab.Navigator 
    screenOptions={
        { tabBarStyle : {backgroundColor : isDark ? 'black':'white'} ,
        tabBarActiveTintColor : isDark ? 'white':"black", 
        tabBarInactiveTintColor:isDark ? 'tomato':"gray", 
        headerStyle : {backgroundColor : isDark ? 'black': 'white'},
        headerTitleStyle : {color : isDark ? 'tomato':"tomato"},
        // headerShown : false
        }}>
    <Tab.Screen name="Movies" component={Movies} options={{tabBarIcon : ({focused, color, size})=> {
        return(<Ionicons name={focused ? 'film':'film-outline' } size={size} color={color} />)}}}/>
    <Tab.Screen name="Tv" component={Tv} options={{tabBarBadge:7, tabBarIcon : ({focused, color, size})=> {
        return <Ionicons name = {focused ? "tv" : "tv-outline"} size={size} color = {color}/>
    }}}/>
    <Tab.Screen name="Search" component={Home} options={{tabBarIcon : ({focused, size, color})=> <Ionicons name={focused ? "search" : "search-outline"} size={size} color={color}/>}}/>
    </Tab.Navigator>)
}

export default Tabs