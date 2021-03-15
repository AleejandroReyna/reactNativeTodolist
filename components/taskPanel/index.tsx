import React from 'react'
import { Layout, Text, List, ListItem, Divider, Button } from '@ui-kitten/components'
import { Task } from '../../services/tasks/task.interface'
import { BottomTabNavigationProp, BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import { TabParamList } from '../../screens/tasks'
import { TaskCard } from '../taskCard'
import { StyleSheet } from 'react-native'

type NavigationProps = BottomTabNavigationProp<TabParamList, 'Todo'>

type Props = {
  navigation: NavigationProps,
  tasks: Task[]
}

interface renderItemProps {
  item: Task
}

export const TaskPanel = ({ navigation, tasks }:Props) => {

  const renderItem = ({item}:renderItemProps) => (
    <TaskCard task={item} />
  )

  return (
    <Layout style={{flex: 1}}>
      <List 
        data={tasks}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </Layout>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 4,
  }
});