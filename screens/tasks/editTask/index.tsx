import React, { useState } from 'react'
import { Button, Input, Layout, Text, IndexPath, Select, SelectItem } from '@ui-kitten/components'
import {ScrollView, StyleSheet } from 'react-native'
import { DashboardParamList } from '../../dashboard'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native';


type NavigationProps = StackNavigationProp<DashboardParamList, 'EditTask'>
type RouteProps = RouteProp<DashboardParamList, 'EditTask'>

type Props = {
  navigation: NavigationProps,
  route: RouteProps
}

interface statusType {
  type: string,
  label: string
}

const statusList:statusType[] = [
  {type: 'todo', label: 'To Do' },
  {type: 'doing', label: 'Doing'},
  {type: 'inreview', label: 'In Review'} ,
  {type: 'done', label: 'Done'}]

export const EditTaskScreen = ({route, navigation}:Props) => {
  const { params } = route
  const [name, setName] = useState<string>(params.name)
  const [content, setContent] = useState<string>(params.content)
  const [status, setStatus] = useState<string>(params.status)
  
  const setDefaultValue = ():number => {
    let filtering = statusList.find(statusItem => statusItem.type === status)
      return filtering ? statusList.indexOf(filtering) : 0
  }
  
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(new IndexPath(setDefaultValue()));
  const displayValue = "row" in selectedIndex ? statusList[selectedIndex.row].label : ""
  const renderOption = (item:statusType) => <SelectItem key={item.type} title={item.label}/> 
  
  const changeStatusValue = (item: IndexPath | IndexPath[]) => {
    setSelectedIndex(item)
    if("row" in item) {
      setStatus(statusList[item.row].type)
    }
  }

  const submit = () => {
    console.log({name, content, status})
  } 

  return (
    <Layout style={styles.mainLayout}>
      <ScrollView>
        <Layout style={styles.contentLayout}>
        <Text style={styles.title} status="primary" category="h4">Edit Task</Text>
        <Input
          label="Name:"
          style={styles.input}
          value={name}
          onChangeText={value => setName(value)}
        />
        <Input 
          label="content:"
          value={content}
          multiline={true}
          textStyle={{ minHeight: 64 }}
          style={styles.input}
          onChangeText={value => setContent(value)}
        />
        <Select
          label="status: "
          selectedIndex={selectedIndex}
          value={displayValue}
          style={styles.input}
          onSelect={changeStatusValue}>
          {statusList.map(renderOption)}
        </Select>
        <Layout style={styles.buttonsContent}>
            <Button style={styles.buttonLeft} status="basic">Cancel</Button>
            <Button onPress={submit} status="success">Edit Task</Button>
        </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  )
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1
  },
  input: {
    marginBottom: 10
  },
  contentLayout: {
    padding: 20
  },
  title: {
    marginBottom: 30
  },
  buttonsContent: {
    flexDirection: 'row',
    marginTop: 10
  },
  buttonLeft: {
    marginRight: 5
  }
})