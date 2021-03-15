import React from 'react'
import { Layout, Text, List, ListItem, Divider, Button } from '@ui-kitten/components'
import { Task } from '../../services/tasks/task.interface'

interface panelProps {
  title: string,
  tasks: Task[]
}

interface renderItemProps {
  item: Task,
  index: number,
  accessoryRight: any
}

export const TaskPanel = ({ tasks }:panelProps) => {

  const renderRight = (props) => <Button size='tiny'>View</Button>
  const renderItem = ({item, index}:renderItemProps) => (
    <ListItem 
      title={item.name}
      description={item.content}
      key={index}
      accessoryRight={renderRight}
    />
  )

  return (
    <Layout style={{flex: 1}}>
      <List 
        data={tasks}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </Layout>
  )
}