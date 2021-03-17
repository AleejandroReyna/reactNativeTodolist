import React, { useState, useEffect } from 'react'
import { Layout, Text, Spinner, Button } from '@ui-kitten/components'
import { Task } from '../../../services/tasks/task.interface'
import { StyleSheet, ScrollView } from 'react-native'
import { DashboardParamList } from '../../dashboard'
import { StackNavigationProp } from '@react-navigation/stack'

type NavigationProps = StackNavigationProp<DashboardParamList, 'DetailTask'>

type Props = {
  navigation: NavigationProps,
  id: string
}

const defaultTask:Task = {
  id: "1", 
  name: "Test Name", 
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut sequi illum amet animi corporis sapiente officiis voluptatibus doloremque minus!", 
  status: "todo"}

export const DetailTaskScreen = ({navigation, id}:Props) => {
  const [task, setTask] = useState<Task | null >(null)

  useEffect(() => {
    const getTask = setTimeout(() => {
      setTask(defaultTask)
    }, 2000)
    return () => {
      clearTimeout(getTask)
    }
  }, [task])

  return (
    <Layout style={{flex: 1}}>
        {task !== null ?
          <ScrollView>
            <Layout style={styles.contentContainer}>
              <Text style={styles.listItem}><><Text category="s1">ID: </Text>{task.id}</></Text>
              <Text style={styles.listItem}><><Text category="s1">Name: </Text>{task.name}</></Text>
              <Text style={styles.listItem}><><Text category="s1">Content: </Text>{task.content}</></Text>
              <Text style={styles.listItem}><><Text category="s1">Status: </Text>{task.status}</></Text>
              <Layout style={styles.buttonsContent}>
                <Button status="success">Edit</Button>
                <Button style={styles.deleteButton} status="danger">Delete</Button>
              </Layout>
            </Layout>
          </ScrollView>
        :
        
        <Layout style={styles.loadingContainer}>
          <Spinner />
        </Layout>
        }
    </Layout>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    padding: 20
  },
  listItem: {
    marginBottom: 10
  },
  buttonsContent: {
    flexDirection: 'row'
  },
  deleteButton: {
    marginLeft: 5
  }
})
