import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Btn = props =>{
    // console.log(props.navigation)
    console.log(props.data)
  return(
    <TouchableOpacity
        onPress={()=>{
            props.navigation.navigate('Details', { data: props.data })
        }}
    > 
        <Text>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default Btn