import React from 'react'
import { Layout, Text } from '@ui-kitten/components'

interface panelProps {
  title: string
}

export const TaskPanel = ({title}:panelProps) => {
  return (
    <Layout>
      <Text>{title}</Text>
    </Layout>
  )
}