import React from 'react'
import { TopNavigation, Icon, IconProps, TopNavigationAction } from '@ui-kitten/components'
import { StackHeaderProps } from '@react-navigation/stack'

export const TaskHeader = (props:StackHeaderProps) => {
  const { navigation: { goBack }, scene: {descriptor: {options: { title }}} } = props

  const BackIcon = (_props:IconProps) => (
    <Icon {..._props} name='arrow-back'/>
  );
  
  const BackAction = () => (
    <TopNavigationAction onPress={goBack} icon={BackIcon}/>
  );

  return (
      <TopNavigation 
        {...props}
        accessoryLeft={BackAction}
        title={title}
        alignment='center'
      />
  )
}