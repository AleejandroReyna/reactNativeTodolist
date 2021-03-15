import React from 'react'
import {BottomNavigation, BottomNavigationTab, Layout, Text} from '@ui-kitten/components'
import { TaskPanel } from '../../components/taskPanel'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigator = createBottomTabNavigator()

export const TasksScreen = () => {

  const TodoPanel = () => <TaskPanel title='To Do' />
  const DoingPanel = () => <TaskPanel title='Doing' />
  const InReviewPanel = () => <TaskPanel title='In Review' />
  const DonePanel = () => <TaskPanel title='Done' />

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

  return (
    <TabNavigator.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <TabNavigator.Screen name='To Do' component={TodoPanel}/>
    <TabNavigator.Screen name='Doing' component={DoingPanel}/>
    <TabNavigator.Screen name='In Review' component={InReviewPanel}/>
    <TabNavigator.Screen name='Done' component={DonePanel}/>
  </TabNavigator.Navigator>
  )
}