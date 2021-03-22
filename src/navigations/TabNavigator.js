import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainStackNavigator, ContactStackNavigator } from './StackNavigator'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Sermons' component={MainStackNavigator} />
      <Tab.Screen name='Discovery' component={ContactStackNavigator} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
