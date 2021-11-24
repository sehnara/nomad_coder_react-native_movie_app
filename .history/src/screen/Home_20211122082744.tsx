 import React from "react"
 import { StyleSheet, View, Text } from "react-native"
 const Home = (props:Props) => {
    return (
     <View><Text>Hello World</Text></View>
    )
 }
 interface Props {}
 Home.defaultProps = {} as const
 const styles = StyleSheet.create({})
 export default Home