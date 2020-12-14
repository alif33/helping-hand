import React from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../searchIndex.json'
import Btn from './Btn'


const Home = props =>{

  return(
      <View> 
          <Btn 
            navigation = {props.navigation}
            name="Check The name"
          />
          <Btn 
            navigation = {props.navigation}
            name="Check The name"
          />
          <Btn 
            navigation = {props.navigation}
            name="Check The name"
          />
          <Btn 
            navigation = {props.navigation}
            name="Check The name"
          />
      </View>
    // <FlatList
    //     data={data.first}
    //     renderItem={({item})=>{
    //         return (
    //             <View> 
    //                 <Text>{item.name}</Text>
    //             </View>
    //         )
    //     }}
    // />
  )
}

export default Home