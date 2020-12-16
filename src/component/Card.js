import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet, Image } from 'react-native'
const { width, height } = Dimensions.get('window')
const Card = props =>{
     console.log(props.navigation)
  return(    
        <TouchableOpacity 
            style={styles.container}
            onPress={props.navigate}
        >
                <Image
                    style={{...styles.image, height: props.height, width: props.width}}
                    source={props.image}
                    resizeMode="contain"               
                />
                <Text style={styles.title}>
                    {props.title}
                </Text>
        </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        width: width/2-25,
        height: width/2-30,
        margin: 5,
        backgroundColor: '#1dbf73',
        borderRadius: 15
    },
    image: {
        flex: .5,  
        alignSelf: 'center', 
        marginTop: 10
    },
    title: {
        flex: .5, 
        textAlign: 'center', 
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold', 
        paddingTop: 2
    }
})
export default Card