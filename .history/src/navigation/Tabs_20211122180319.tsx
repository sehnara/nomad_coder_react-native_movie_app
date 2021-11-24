import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import Movies from '../screen/Movies'
import Tv from '../screen/Tv'
import Home from '../screen/Home'

const Tab = createBottomTabNavigator();

const Tabs = ()=>(<Tab.Navigator screenOptions={{tabBarActiveTintColor : "red", tabBarInactiveTintColor:"green", }}>
    <Tab.Screen name="Movies" component={Movies} options={{headerTitleStyle : {color : "tomato"}, headerRight : () => <View><Text>Hello</Text></View>}}/>
    <Tab.Screen name="Home" component={Home} options={{tabBarBadge:7}}/>
    <Tab.Screen name="Tv" component={Tv}/>
</Tab.Navigator>)

export default Tabs