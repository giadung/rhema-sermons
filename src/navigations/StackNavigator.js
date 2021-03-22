import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SermonsScreen from '../screens/SermonsScreen'
import VideoScreen from '../screens/VideoScreen'
import DiscoveryScreen from '../screens/DiscoveryScreen'

const Stack = createStackNavigator()

// const screenOptionStyle = {
//   headerStyle: {
//     backgroundColor: '#9AC4F8'
//   },
//   headerTintColor: 'white',
//   headerBackTitle: 'Back'
// }

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='Sermons' component={SermonsScreen} />
      <Stack.Screen name='Video' component={VideoScreen} />
    </Stack.Navigator>
  )
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='Discovery' component={DiscoveryScreen} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator, ContactStackNavigator }
