import React, { useState } from 'react'
import {BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components'
import { TaskPanel } from '../../components/taskPanel'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Task } from '../../services/tasks/task.interface' 
import { SafeAreaView } from 'react-native'

export type TabParamList = {
  Todo: {tasks: Task[]},
  Doing: {tasks: Task[]},
  Inreview: {tasks: Task[]},
  Done: {tasks: Task[]}
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
    {id: "1", name: "test task", content: "task content", status: "todo"},
    {id: "2", name: "test task 2", content: "task content", status: "doing"},
    {id: "3", name: "test task 3", content: "task content", status: "inreview"},
    {id: "4", name: "test task 4", content: "task content", status: "done"},
  ])

  const getPanelTasks = (status:string):Task[] => tasks.filter(task => task.status === status)

  return (
    <SafeAreaView style={{flex: 1}}>
      <TabNavigator.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <TabNavigator.Screen name='Todo' 
        children={() => <TaskPanel title='To Do' tasks={getPanelTasks('todo')} />}/>
      <TabNavigator.Screen name='Doing' 
        children={() => <TaskPanel title='Doing' tasks={getPanelTasks('doing')} />}/>
      <TabNavigator.Screen name='Inreview' 
        children={() => <TaskPanel title='In Review' tasks={getPanelTasks('inreview')} />}/>
      <TabNavigator.Screen name='Done' 
        children={() => <TaskPanel title='Done' tasks={getPanelTasks('done')} />}/>
    </TabNavigator.Navigator>
    </SafeAreaView>
  )
}