import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
const Movies = ({navigation : {navigate}}) => {
   return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
       <TouchableOpacity onPress={()=>navigate('Stack',{screen : "Two"})}>
       <Text>Movies</Text>
       </TouchableOpacity>
      </View>
   )
}

export default Movies