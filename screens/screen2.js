import React, { useRef } from "react"
import { Animated, Button, StyleSheet, Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Screen2 = (props)=>{

    const airplaneAnimate = useRef( new Animated.Value(0)).current

    const moveAirplane = () =>{
        Animated.timing(airplaneAnimate,
            {
                toValue: 1,
                duration: 7777,
                useNativeDriver:true,
            }).start(()=>{
                airplaneAnimate.setValue(0) 
            })
    }
    const xValue = airplaneAnimate.interpolate({
        inputRange: [0,1],
        outputRange: [0,350],
    })
    const yValue = airplaneAnimate.interpolate({
        inputRange: [0,1],
        outputRange: [0,350]
    })
    const animationStyle = {
        transform: [
            {
                translateX: xValue
            }
        ]
    }
    
    return (
        <View style = {styles.container}>
            <Animated.View style = {[styles.animation,animationStyle]}>
                <Text> butpro </Text>
                <MaterialCommunityIcons name="airplane-takeoff" size={44} color="purple" />
            </Animated.View>
            <View style = {styles.button}>
                <Button title='start animation' onPress={moveAirplane} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',

    },
    animation:{

    },
    button:{
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Screen2;
