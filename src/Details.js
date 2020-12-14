import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Item from './Item'
const Details = props =>{

  console.log(props.route.params.data)
  return(
    <FlatList
      data={props.route.params.data}
      renderItem={({item})=>{
        return(
          <Item 
            name={item.name}
          />
        )
      }}
    />
  )
}

export default Details