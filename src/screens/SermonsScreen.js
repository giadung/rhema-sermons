import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import VideoScreen from '../screens/VideoScreen'
import AudioScreen from '../screens/AudioScreen'
import LiveScreen from '../screens/LiveScreen'

const Tab = createMaterialTopTabNavigator()

const SermonsScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: { backgroundColor: 'black' },
        style: { paddingTop: 25 }
      }}
    >
      <Tab.Screen name='Video' component={VideoScreen} />
      <Tab.Screen name='Audio' component={AudioScreen} />
      <Tab.Screen name='Live' component={LiveScreen} />
    </Tab.Navigator>
  )
}

export default SermonsScreen
