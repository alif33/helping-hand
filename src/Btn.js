import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Btn = props =>{
    console.log(props.navigation)
  return(
    <TouchableOpacity
        onPress={()=>{
            props.navigation.navigate('Details')
        }}
    > 
        <Text>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default Btn