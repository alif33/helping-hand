import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './src/DrawerContent'
import Home from './src/Home' 
import Details from './src/Details' 

const Drawer = createDrawerNavigator()

const App = props =>{
  console.log(props)
  return(
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
         <Drawer.Screen name="Home" component={ Home }/>
         <Drawer.Screen name="Details" component={ Details }/>         
     </Drawer.Navigator> 
    </NavigationContainer>
  )
}

export default App