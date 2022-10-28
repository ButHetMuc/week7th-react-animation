import React, { useRef } from 'react';
import { Animated, Button, StyleSheet, Text, View, TouchableOpacity,Image,Easing } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import  Screen1  from './screens/screen1'
import  Screen2 from './screens/screen2';
import  Screen3  from './screens/screen3'
import  Screen4  from './screens/screen4'
import  Screen5  from './screens/screen5'
import  Screen6  from './screens/screen6'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


export default App = () => {
  return (
      <NavigationContainer style = {styles.container} >
        <Tab.Navigator tab initialRouteName='Screen1' screenOptions={{headerShown:false} }>
          <Tab.Screen
            name = 'Screen1'
            component={Screen1}
            options = {{tabBarLabel:'sc1'}}
          />
          <Tab.Screen
            name = 'Screen2'
            component={Screen2}
            options = {{tabBarLabel:'sc2'}}
          />
          <Tab.Screen
            name = 'Screen3'
            component={Screen3}
            options = {{tabBarLabel:'sc3'}}
          />
          <Tab.Screen
            name = 'Screen4'
            component={Screen4}
            options = {{tabBarLabel:'sc4'}}
          />
          <Tab.Screen
            name = 'Screen5'
            component={Screen5}
            options = {{tabBarLabel:'sc5'}}
          />
          <Tab.Screen
            name = 'Screen6'
            component={Screen6}
            options = {{tabBarLabel:'sc6'}}
          />
        </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});