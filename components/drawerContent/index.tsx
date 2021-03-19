import React from 'react'
import { Drawer, DrawerItem, Layout, Text, IndexPath, Divider } from '@ui-kitten/components'
import {DrawerContentComponentProps} from '@react-navigation/drawer'
import { StyleSheet, SafeAreaView } from 'react-native'

export const DrawerContent = ({ navigation, state, style }:DrawerContentComponentProps) => {

  return (
    <SafeAreaView>
      <Text status="primary" category="h3" style={styles.title}>RN TODOLIST</Text>
      <Drawer
        selectedIndex={new IndexPath(state.index)}
        onSelect={index => navigation.navigate(state.routeNames[index.row])}>
        {state.routeNames.map(route =>
          <DrawerItem title={route} key={route} />
        )}
      </Drawer>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  title: {
    padding: 10,
    paddingTop: 0
  }
})