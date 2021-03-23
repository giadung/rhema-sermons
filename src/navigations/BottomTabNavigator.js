import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  SermonsStack,
  DiscoveryStack,
  GivingStack,
  LocationStack,
  ProfileStack
} from './StackNavigator'
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5
} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon
          if (route.name === 'Sermons') {
            icon = focused ? (
              <Ionicons name='play-circle' size={size} color={color} />
            ) : (
              <Ionicons name='play-circle-outline' size={size} color={color} />
            )
          } else if (route.name === 'Discovery') {
            icon = focused ? (
              <AntDesign name='appstore1' size={size} color={color} />
            ) : (
              <AntDesign name='appstore-o' size={size} color={color} />
            )
          } else if (route.name === 'Giving') {
            icon = focused ? (
              <FontAwesome5
                name='hand-holding-heart'
                size={size}
                color={color}
              />
            ) : (
              <FontAwesome5
                name='hand-holding-heart'
                size={size}
                color={color}
              />
            )
          } else if (route.name === 'Location') {
            icon = focused ? (
              <Ionicons name='location' size={size} color={color} />
            ) : (
              <Ionicons name='location-outline' size={size} color={color} />
            )
          } else if (route.name === 'Profile') {
            icon = focused ? (
              <FontAwesome name='user-circle' size={size} color={color} />
            ) : (
              <FontAwesome name='user-circle-o' size={size} color={color} />
            )
          }

          return icon
        }
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name='Sermons' component={SermonsStack} />
      <Tab.Screen name='Discovery' component={DiscoveryStack} />
      <Tab.Screen name='Giving' component={GivingStack} />
      <Tab.Screen name='Location' component={LocationStack} />
      <Tab.Screen name='Profile' component={ProfileStack} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
