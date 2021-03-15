import React from 'react'
import { Task } from '../../services/tasks/task.interface'
import { Card, Text, Button, Icon} from '@ui-kitten/components'
import { View, StyleSheet, ViewProps } from 'react-native'
import { RenderProp } from '@ui-kitten/components/devsupport'

interface TaskProps {
  task: Task
}

export const TaskCard = ({task }:TaskProps) => {
  const statusTypes = [{type: 'todo', label: 'To Do'},
                       {type: 'doing', label: 'Doing'},
                       {type: 'inreview', label: 'In Review'},
                       {type: 'done', label: 'Done'}]

  const getStatusIndex = (status:string):number => {
    const item = statusTypes.find(statusType => statusType.type === status )
    return item ? statusTypes.indexOf(item) : 0
  }

  const Header:RenderProp<ViewProps> = (headerProps) => (
    <View {...headerProps} style={[headerProps?.style, styles.header]}>
      <Text category='h6'>
        { task.name }
      </Text>
      <Button size="small" accessoryLeft={(props) => <Icon {...props} name="eye" />} />
    </View>
  );

  const Footer:RenderProp<ViewProps> = (footerProps) => (
    <View {...footerProps} style={[footerProps?.style, styles.footer]}>
      <Text>Switch to: </Text>
      {getStatusIndex(task.status) > 0 &&
        <Button status="basic">{statusTypes[getStatusIndex(task.status) - 1].label}</Button>
      }
      {getStatusIndex(task.status) < statusTypes.length - 1 &&
        <Button status="basic" style={styles.rightButton}>{statusTypes[getStatusIndex(task.status) + 1].label}</Button>
      }
    </View>
  );

  return (
    <Card
      style={styles.item}
      status='basic'
      header={Header}
      footer={Footer}
    >
      <Text>{task.content}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightButton: {
    marginLeft: 6
  }
});