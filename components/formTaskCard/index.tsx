import React, { useState } from 'react'
import { Card, Input, Button, Text, IndexPath, SelectItem, Select, Layout } from '@ui-kitten/components'
import {View, ViewProps, StyleSheet } from 'react-native'
import { RenderProp } from '@ui-kitten/components/devsupport'
import { Task } from '../../services/tasks/task.interface'

interface Props {
  title: string,
  action: string,
  task: Task,
  onCancel?(): void,
  onSubmit(task:Task): void
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

export const FormTaskCard = ({ title, action, task , onCancel, onSubmit}:Props) => {
  const [name, setName] = useState<string>(task.name)
  const [content, setContent] = useState<string>(task.content)
  const [status, setStatus] = useState<string>(task.status)

  const setDefaultValue = ():number => {
    let filtering = statusList.find(statusItem => statusItem.type === status)
      return filtering ? statusList.indexOf(filtering) : 0
  }
  
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(new IndexPath(setDefaultValue()))
  const displayValue = "row" in selectedIndex ? statusList[selectedIndex.row].label : ""
  const renderOption = (item:statusType) => <SelectItem key={item.type} title={item.label}/> 
  
  const changeStatusValue = (item: IndexPath | IndexPath[]) => {
    setSelectedIndex(item)
    if("row" in item) {
      setStatus(statusList[item.row].type)
    }
  }

  const submit = () => onSubmit({name, content, status})

  const Header:RenderProp<ViewProps> = (headerProps) => (
    <View {...headerProps}>
      <Text category="s1">{title}</Text>
    </View>
  )

  const Footer:RenderProp<ViewProps> = (footerProps) => (
    <View {...footerProps}>
      <Layout style={styles.buttonsContent}>
        {onCancel &&
          <Button style={styles.buttonLeft} onPress={onCancel} status="basic">Cancel</Button>
        }
        <Button onPress={() => {submit()}} status="success">
          {bProps => <Text {...bProps}>{action} Task</Text>}
        </Button>
      </Layout>
    </View>
  )

  return (
    <Card
      header={Header}
      footer={Footer}
    >
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
          onSelect={changeStatusValue}>
          {statusList.map(renderOption)}
        </Select>
    </Card>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10
  },
  buttonsContent: {
    flexDirection: 'row'
  },
  buttonLeft: {
    marginRight: 5
  }
})