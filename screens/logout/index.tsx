import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { Text, Layout, Button } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { DrawerParamList } from '../../App'

type NavigationProps = DrawerNavigationProp<DrawerParamList, 'Login'>

type Props = {
  navigation: NavigationProps
}


export const LogoutScreen = ({navigation}:Props) => {

  const { goBack } = navigation

  const logout = () => {
    console.log("logout here")
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1}}>
        <ScrollView>
          <Layout style={styles.content}>
            <Text category="h1" status="primary" style={styles.title}>Logout</Text>
            <Text>Are you sure to close session?</Text>
          <Layout style={styles.buttonsContainer}>
            <Button status="basic" onPress={() => goBack()}>Cancel</Button>
            <Button 
              status="danger" 
              style={{marginLeft: 5}}
              onPress={() => logout()}>Logout</Button>
          </Layout>
          </Layout>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    width: "100%",
    marginTop: 50,
    textAlign: "center",
    marginBottom: 20
  },
  content: {
    padding: 20,
    alignItems: 'center'
  },
  buttonsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})