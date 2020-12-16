import React from 'react'
import { FlatList } from 'react-native'
import Card from './Card'

const HomeMenu = props =>{
  return(
    <FlatList
    style={{
      alignSelf: 'center'
    }}
    data={props.cardInfo}
    numColumns={2}
    renderItem={({item})=>{
        return (

            <Card
              item={item}
            /> 
        )
    }}
/>
  )
}

export default HomeMenu