import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TasksScreen } from '../tasks'
import { DetailTaskScreen } from '../tasks/detailTask'
import { EditTaskScreen } from '../tasks/editTask'
import { CreateTaskScreen } from '../tasks/createTask'
import { TasksHeader } from '../../components/tasksHeader'
import { TaskHeader } from '../../components/taskHeader'
import { SafeAreaView } from 'react-native'

export type DashboardParamList = {
  Tasks: undefined,
  DetailTask: {id:string},
  EditTask: {
    id: string,
    name: string,
    content: string,
    status: string,
  },
  CreateTask: undefined
}

const Stack = createStackNavigator()

export const DashboardScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <Stack.Navigator initialRouteName="Tasks">
        <Stack.Screen 
          name="Tasks" 
          component={TasksScreen} 
          options={{header: (props) => <TasksHeader {...props} />}}/>
        <Stack.Screen 
          name="CreateTask" 
          component={CreateTaskScreen}
          options={{
            title: 'Create Task',
            header: (props) => <TaskHeader {...props} />
          }} />
        <Stack.Screen 
          name="DetailTask" 
          component={DetailTaskScreen}
          options={{
            title: 'Task Detail',
            header: (props) => <TaskHeader {...props} />
          }} />
        <Stack.Screen 
          name="EditTask" 
          component={EditTaskScreen}
          options={{
            title: 'Edit Task',
            header: (props) => <TaskHeader {...props} />
          }} />
    </Stack.Navigator>
    </SafeAreaView>
  )
}