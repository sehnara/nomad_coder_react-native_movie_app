import React from "react"
import { StyleSheet, View, Text } from "react-native"
const Tv = (props:Props) => {
   return (
    <View><Text>Hello World</Text></View>
   )
}
interface Props {}
Tv.defaultProps = {} as const
const styles = StyleSheet.create({})
export default Tv