import React from 'react'
import { Card, Modal, Text, Button } from '@ui-kitten/components'
import { StyleSheet, View, ViewProps } from 'react-native'
import { RenderProp } from '@ui-kitten/components/devsupport'

const Header:RenderProp<ViewProps> = (props) => (
  <View {...props}>
    <Text category="h5">Delete Task</Text>
  </View>
)


interface Props {
  id: string,
  hideModal(): void,
  isDeleting: boolean,
  submit(): void
}

export const DeleteTaskModal = ({ id, hideModal, isDeleting, submit }:Props) => {

  const Footer:RenderProp<ViewProps> = (props) => (
    <View {...props} style={[props?.style, styles.footer]}>
      <Button disabled={isDeleting} status="basic" onPress={hideModal}>Cancel</Button>
      <Button disabled={isDeleting} style={styles.deleteButton} onPress={submit} status="danger">Delete</Button>
    </View>
  )
  
  return (
    <Modal
      visible={true}
      backdropStyle={styles.backdrop}
    >
      <Card
        header={Header}
        footer={Footer}
      >
        <Text>Are you sure to delete task with ID: {id}</Text>
      </Card>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  deleteButton: {
    marginLeft: 5
  }
});