import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TasksScreen } from '../tasks'

const Stack = createStackNavigator()

export const DashboardScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Tasks">
        <Stack.Screen name="Tasks" component={TasksScreen} />
    </Stack.Navigator>
  )
}