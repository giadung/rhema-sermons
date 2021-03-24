import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Platform, StatusBar } from 'react-native'

import VideoScreen from './VideoScreen'
import AudioScreen from './AudioScreen'
import LiveScreen from './LiveScreen'

const Tab = createMaterialTopTabNavigator()

const SermonsScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: { backgroundColor: 'black' },
        style: {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }
      }}
    >
      <Tab.Screen name='Video' component={VideoScreen} />
      <Tab.Screen name='Audio' component={AudioScreen} />
      <Tab.Screen name='Live' component={LiveScreen} />
    </Tab.Navigator>
  )
}

export default SermonsScreen
