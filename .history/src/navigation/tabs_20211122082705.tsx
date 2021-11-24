import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'

const Tab = createBottomTabNavigator();

const Tabs = ()=>(<Tab.Navigator>
    <Tab.Screen name="Movies" component={}/>
    <Tab.Screen name="Home" component={}/>
    <Tab.Screen name="Tv" component={}/>
</Tab.Navigator>)