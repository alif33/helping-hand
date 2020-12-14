import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DrawerContent = props =>{

  return(
    <DrawerContentScrollView >
        <DrawerItem 
            labelStyle={{fontSize: 17, fontWeight: '700'}}
            icon={ ()=>(<MaterialCommunityIcons name="home-outline" size={24} color="#000" /> )}            
            label = "Home"
            onPress={() => { props.navigation.navigate('Home') }}
        />
        <DrawerItem 
            labelStyle={{fontSize: 17, fontWeight: '700'}}
            icon={ ()=>(<MaterialIcons name="favorite" size={24} color="#000" /> )}            
            label = "Favourite List"
            onPress={() => {}}
        />
        <View style = {styles.lineStyle} />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
   }
})
export default DrawerContent