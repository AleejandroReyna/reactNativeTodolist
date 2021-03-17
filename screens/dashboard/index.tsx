import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TasksScreen } from '../tasks'
import { DetailTaskScreen } from '../tasks/detailTask'

export type DashboardParamList = {
  Tasks: undefined,
  DetailTask: {id:string}
}

const Stack = createStackNavigator()

export const DashboardScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Tasks">
        <Stack.Screen name="Tasks" component={TasksScreen} />
        <Stack.Screen 
          name="DetailTask" 
          component={DetailTaskScreen}
          options={{title: 'Detail'}} />
    </Stack.Navigator>
  )
}