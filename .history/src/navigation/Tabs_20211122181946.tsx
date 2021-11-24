import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import Movies from '../screen/Movies'
import Tv from '../screen/Tv'
import Home from '../screen/Home'
import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = ()=>{
    const isDark = useColorScheme() === "dark";
    console.log(isDark)
    
    return(<Tab.Navigator 
    screenOptions={
        { tabBarStyle : {backgroundColor : isDark ? 'black':'white'} ,
        headerShown : false,
        tabBarActiveTintColor : isDark ? 'white':"blue", 
        tabBarInactiveTintColor:isDark ? 'tomato':"black", }}>
    <Tab.Screen name="Movies" component={Movies} options={{headerTitleStyle : {color : "tomato"}, headerRight : () => <View><Text>Hello</Text></View>}}/>
    <Tab.Screen name="Home" component={Home} options={{tabBarBadge:7}}/>
    <Tab.Screen name="Tv" component={Tv}/>
</Tab.Navigator>)}

export default Tabs