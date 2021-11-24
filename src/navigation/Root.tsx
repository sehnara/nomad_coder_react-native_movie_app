import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Stack from './Stack';

const RootNav = createNativeStackNavigator();

const Root = () =>{
    return (
        <RootNav.Navigator screenOptions={{headerShown : false, presentation : "modal"}} initialRouteName = {"Tab"}>
            <RootNav.Screen name="Tab" component={Tabs}/>
            <RootNav.Screen name="Stack" component={Stack}/>
        </RootNav.Navigator>
    )
}

export default Root;