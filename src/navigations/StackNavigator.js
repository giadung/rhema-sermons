import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SermonsScreen from '../screens/SermonsScreen'
import VideoScreen from '../screens/VideoScreen'
import DiscoveryScreen from '../screens/DiscoveryScreen'
import GivingScreen from '../screens/GivingScreen'
import LocationScreen from '../screens/LocationScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator()

// const screenOptionStyle = {
//   headerStyle: {
//     backgroundColor: '#9AC4F8'
//   },
//   headerTintColor: 'white',
//   headerBackTitle: 'Back'
// }

const SermonsStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='Video' component={SermonsScreen} />
      <Stack.Screen name='Video Player' component={VideoScreen} />
    </Stack.Navigator>
  )
}

const DiscoveryStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='Discovery' component={DiscoveryScreen} />
    </Stack.Navigator>
  )
}
const GivingStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='Giving' component={GivingScreen} />
    </Stack.Navigator>
  )
}
const LocationStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='Location' component={LocationScreen} />
    </Stack.Navigator>
  )
}
const ProfileStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export {
  SermonsStack,
  DiscoveryStack,
  GivingStack,
  LocationStack,
  ProfileStack
}
