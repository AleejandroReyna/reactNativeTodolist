import React from 'react'
import {BottomNavigation, BottomNavigationTab, Layout, Text} from '@ui-kitten/components'
import { TaskPanel } from '../../components/taskPanel'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigator = createBottomTabNavigator()

const BottomTabBar = ({ navigation, state }) => (
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

  return (
    <TabNavigator.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <TabNavigator.Screen name='To Do' children={() => <TaskPanel title='To Do' />}/>
    <TabNavigator.Screen name='Doing' children={() => <TaskPanel title='Doing' />}/>
    <TabNavigator.Screen name='In Review' children={() => <TaskPanel title='In Review' />}/>
    <TabNavigator.Screen name='Done' children={() => <TaskPanel title='Done' />}/>
  </TabNavigator.Navigator>
  )
}