import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Header = props =>{
  return(
    <View style={styles.container}>
        <StatusBar backgroundColor="#1dbf73"/>
          <View style={styles.header}> 
            <TouchableOpacity
              onPress={
                ()=>{
                  props.navigation.openDrawer() 
                }
              }
            > 
              <MaterialCommunityIcons name="menu" size={28} color="#fff" />
            </TouchableOpacity> 
            <TouchableOpacity> 
              <MaterialCommunityIcons name="dots-vertical" size={28} color="#fff" />
            </TouchableOpacity> 
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: .07,
      backgroundColor: '#1dbf73'
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      width: '90%',
      paddingTop: 12
    }
})
export default Header