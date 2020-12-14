import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Item = props =>{
    const [show, setshow] = React.useState(null);
  return(
    <View> 
        <Text>{props.name}</Text>
        <TouchableOpacity 
        onPress={()=>{
            setshow(true)
        }}
        >
        <Text>Ans</Text>
        {show && <Text>Right</Text>}
        </TouchableOpacity>
    </View>
  )
}

export default Item