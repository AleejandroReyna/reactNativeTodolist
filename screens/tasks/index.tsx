import React, { useState } from 'react'
import {BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import { TaskPanel } from '../../components/taskPanel'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Task } from '../../services/tasks/task.interface' 
import { SafeAreaView } from 'react-native'

export type TabParamList = {
  Todo: {tasks: Task[], title: string},
  Doing: {tasks: Task[], title: string},
  Inreview: {tasks: Task[], title: string},
  Done: {tasks: Task[], title: string}
}

const TabNavigator = createBottomTabNavigator<TabParamList>()

const BottomTabBar = ({ navigation, state }:BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='To Do'/>
    <BottomNavigationTab title='Doing'/>
    <BottomNavigationTab title='In Review'/>
    <BottomNavigationTab title='Done'/>
  </BottomNavigation>
);

export const TasksScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {id: "1", name: "test task", content: "task content", status: "todo"},
    {id: "2", name: "test task 2", content: "task content", status: "doing"},
    {id: "3", name: "test task 3", content: "task content", status: "inreview"},
    {id: "4", name: "test task 4", content: "task content", status: "done"},
    {id: "5", name: "test task 5", content: "task content", status: "todo"},
    {id: "6", name: "test task 6", content: "task content", status: "doing"},
    {id: "7", name: "test task 7", content: "task content", status: "inreview"},
    {id: "8", name: "test task 8", content: "task content", status: "done"},
  ])

  const getPanelTasks = (status:string):Task[] => tasks.filter(task => task.status === status)

  return (
      <TabNavigator.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <TabNavigator.Screen name='Todo' 
        children={(navigation) => <TaskPanel {...navigation} tasks={getPanelTasks('todo')} />}/>
      <TabNavigator.Screen name='Doing' 
        children={(navigation) => <TaskPanel {...navigation} tasks={getPanelTasks('doing')} />}/>
      <TabNavigator.Screen name='Inreview' 
        children={(navigation) => <TaskPanel {...navigation} tasks={getPanelTasks('inreview')} />}/>
      <TabNavigator.Screen name='Done' 
        children={(navigation) => <TaskPanel {...navigation} tasks={getPanelTasks('done')} />}/>
    </TabNavigator.Navigator>
  )
}