import React, { useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import { cardInfo } from './data'
import Header from './component/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Card from './component/Card'
import images from './common/images'
const Home = props =>{
  const [splashEnd, setSplashEnd] = React.useState(null);

  useEffect(()=>{
    setInterval(()=>{
      setSplashEnd(true)
    },2000)
  },[])
  console.log(images)
  return(
    <View style={styles.container}>  
      <Header navigation={props.navigation}/>
      <View style={{flex: .93}}>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', height: 90,paddingTop: 40 }}> 
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#1dbf73'}}>যোগদান করুন</Text>
            <TouchableOpacity><MaterialCommunityIcons name="plus-circle-outline" size={28} color="#1dbf73" /></TouchableOpacity>
          </View>
          <View style={styles.row}> 
            <Card 
              image={images.home} 
              height={60} 
              width={60} 
              title="বাসা খুজুন" 
              navigate={()=>{props.navigation.navigate("Details",{ pass: 'ismail' }) }} 
              />
            <Card 
              image={images.tutor} 
              height={70} width={70} 
              title="টিউশনি" 
              navigate={()=>{props.navigation.navigate("Details", { pass: 'alif' }) }} />
          </View> 
          <View style={styles.row}> 
            <Card 
              image={images.home} 
              height={60} 
              width={60} 
              title="ডাক্তার" 
              navigate={()=>{props.navigation.navigate("Details", { pass: 'hello' }) }} 
            />
            <Card 
              image={images.tutor} 
              height={70} 
              width={70} 
              title="টিউশনি" 
              navigate={()=>{props.navigation.navigate("Details", { pass: 'hello' }) }} 
            />
          </View> 
        </ScrollView> 
      </View>                                     
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
     flex: 1, 
     flexDirection: 'row',
     paddingHorizontal: 15
  }
})
export default Home