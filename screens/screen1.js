import React, { useEffect, useRef } from "react"
import { Animated, StyleSheet, Text, View } from "react-native"

const FadeText = (props)=> {
    const fadeAnimation = useRef( new Animated.Value(0)).current
    useEffect (()=>{
        Animated.timing(fadeAnimation,
            {
            toValue:3,
            duration:10000,
            useNativeDriver:true,
            }).start()
    },[fadeAnimation])

    return (
        <Animated.View style = {{...props.style, opacity: fadeAnimation }}>
            {props.children}
        </Animated.View>
    )
}
const Screen1 = (props)=>{
    return (
        <View style = {styles.container}>
            <FadeText style = {styles.fade}>
                <Text> Hello react navtive Animation</Text>
            </FadeText>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    fade:{
    }
})
export default Screen1;
