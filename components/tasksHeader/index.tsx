import React from 'react'
import { TopNavigation, Icon, Button, IconProps} from '@ui-kitten/components'
import { SafeAreaView } from 'react-native'
import { StackHeaderProps } from '@react-navigation/stack'

const PlusIcon = (props:IconProps) => {
  return <Icon {...props} name="plus-outline" />
}

export const TasksHeader = (props:StackHeaderProps) => {

  const Right = () => {
    return (
      <Button 
        status="success"
        accessoryLeft={PlusIcon}
        size="small"
      />
    )
  } 
  return (
    <SafeAreaView>
      <TopNavigation 
        {...props}
        title="Dashboard"
        alignment='center'
        accessoryRight={Right}
      />
    </SafeAreaView>
  )
}