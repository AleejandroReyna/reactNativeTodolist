import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { DashboardParamList } from '../../dashboard'
import { StackNavigationProp } from '@react-navigation/stack'
import { FormTaskCard  } from '../../../components/formTaskCard'
import { Task } from '../../../services/tasks/task.interface'

type NavigationProps = StackNavigationProp<DashboardParamList, 'CreateTask'>

type Props = {
  navigation: NavigationProps
}

export const CreateTaskScreen = ({ navigation }:Props) => {
  const task:Task = {name: "", content: "", status: "todo"}

  const onCancel = () => {
    navigation.goBack()
  }

  const onSubmit = (_task:Task) => {
    console.log(_task)
  }

 return (
   <ScrollView style={styles.container}>
    <FormTaskCard 
      title="Create Task" 
      action="Create" 
      task={task}
      onCancel={onCancel}
      onSubmit={onSubmit}
    />
   </ScrollView>
 )
}


const styles = StyleSheet.create({
  container: {
    padding: 4
  }
})