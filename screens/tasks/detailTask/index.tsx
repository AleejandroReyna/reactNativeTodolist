import React, { useState, useEffect } from 'react'
import { Layout, Text, Spinner, Button } from '@ui-kitten/components'
import { Task } from '../../../services/tasks/task.interface'
import { StyleSheet, ScrollView, SafeAreaView} from 'react-native'
import { DashboardParamList } from '../../dashboard'
import { StackNavigationProp } from '@react-navigation/stack'
import { DeleteTaskModal } from '../../../components/deleteTaskModal'

type NavigationProps = StackNavigationProp<DashboardParamList, 'DetailTask'>

type Props = {
  navigation: NavigationProps
}

const defaultTask:Task = {
  id: "1", 
  name: "Test Name", 
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut sequi illum amet animi corporis sapiente officiis voluptatibus doloremque minus!", 
  status: "inreview"}

export const DetailTaskScreen = ({navigation }:Props) => {
  const [task, setTask] = useState<Task | null >(null)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [isDeleting, setDeleting] = useState<boolean>(false)
 
  useEffect(() => {
    const getTask = setTimeout(() => {
      setTask(defaultTask)
    }, 1000)
    return () => {
      clearTimeout(getTask)
    }
  }, [task])

  const _showModal = () => setShowModal(true)
  const _hideModal = () => setShowModal(false)

  const toEdit = () => {
    if(task) {
      if(task.id) {
        navigation.navigate('EditTask', {
          id: task?.id,
          name: task?.name,
          content: task?.content,
          status: task?.status
        })
      }
    }
  }

  const submitDelete = () => {
    setDeleting(true)
    setTimeout(() => {setShowModal(false); setDeleting(false)}, 1000)
    
  }

  return (
    <Layout style={{flex: 1}}>
        {task !== null  && task.id?
          <>
          <ScrollView>
            <Layout style={styles.contentContainer}>
              <Text style={styles.listItem}><><Text category="s1">ID: </Text>{task.id}</></Text>
              <Text style={styles.listItem}><><Text category="s1">Name: </Text>{task.name}</></Text>
              <Text style={styles.listItem}><><Text category="s1">Content: </Text>{task.content}</></Text>
              <Text style={styles.listItem}><><Text category="s1">Status: </Text>{task.status}</></Text>
              <Layout style={styles.buttonsContent}>
                <Button status="success" onPress={toEdit}>Edit</Button>
                <Button 
                  style={styles.deleteButton} 
                  status="danger"
                  onPress={_showModal}
                >Delete</Button>
              </Layout>
            </Layout>
          </ScrollView>
          {showModal &&
            <DeleteTaskModal id={task.id} hideModal={_hideModal} isDeleting={isDeleting} submit={submitDelete} />
          }
          </>
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
