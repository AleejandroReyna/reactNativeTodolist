import React, { useState } from 'react'
import {ScrollView, StyleSheet } from 'react-native'
import { DashboardParamList } from '../../dashboard'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { FormTaskCard  } from '../../../components/formTaskCard'
import { Task } from '../../../services/tasks/task.interface'


type NavigationProps = StackNavigationProp<DashboardParamList, 'EditTask'>
type RouteProps = RouteProp<DashboardParamList, 'EditTask'>

type Props = {
  navigation: NavigationProps,
  route: RouteProps
}

export const EditTaskScreen = ({route, navigation}:Props) => {
  const { params } = route
  const task:Task = {...params}

  const onCancel = () => {
    navigation.goBack()
  }

  const onSubmit = (_task:Task) => {
    console.log(_task)
  }

  return (
    <ScrollView style={styles.container}>
    <FormTaskCard 
      title="Edit Task" 
      action="Edit" 
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