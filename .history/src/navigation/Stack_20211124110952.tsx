import React from "react"
import { StyleSheet, View, Text } from "react-native"
const Stack = (props:Props) => {
   return (
    <View><Text>Hello World</Text></View>
   )
}
interface Props {}
Stack.defaultProps = {} as const
const styles = StyleSheet.create({})
export default Stack