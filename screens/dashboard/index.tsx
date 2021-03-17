import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TasksScreen } from '../tasks'
import { DetailTaskScreen } from '../tasks/detailTask'
import { EditTaskScreen } from '../tasks/editTask'

export type DashboardParamList = {
  Tasks: undefined,
  DetailTask: {id:string},
  EditTask: {
    id: string,
    name: string,
    content: string,
    status: string,
  }
}

const Stack = createStackNavigator()

export const DashboardScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Tasks">
        <Stack.Screen name="Tasks" component={TasksScreen} />
        <Stack.Screen 
          name="DetailTask" 
          component={DetailTaskScreen}
          options={{title: 'Task Detail'}} />
        <Stack.Screen 
          name="EditTask" 
          component={EditTaskScreen}
          options={{title: 'Edit Task'}} />
    </Stack.Navigator>
  )
}