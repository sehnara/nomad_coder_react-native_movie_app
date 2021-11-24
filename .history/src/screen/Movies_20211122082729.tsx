import React from "react"
import { StyleSheet, View, Text } from "react-native"
const Movies = (props:Props) => {
   return (
    <View><Text>Hello World</Text></View>
   )
}
interface Props {}
Movies.defaultProps = {} as const
const styles = StyleSheet.create({})
export default Movies