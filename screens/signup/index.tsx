import React, { useState } from 'react'
import { Text, Button, Input, Layout } from '@ui-kitten/components'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { DrawerParamList } from '../../App'

type NavigationProps = DrawerNavigationProp<DrawerParamList, 'Signup'>

type Props = {
  navigation: NavigationProps
}


export const SignupScreen = ({ navigation }:Props) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConf, setPasswordConf] = useState<string>('')
  
  const submit = () => {
    console.log({ username, password, passwordConf })
  }

  return (

    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1}}>
        <ScrollView>
          <Layout style={styles.content}>
            <Text category="h1" status="primary" style={styles.title}>Signup</Text>
            <Input
              label="Username:"
              value={username}
              style={styles.input}
              onChangeText={value => setUsername(value)}
            />
            <Input
              label="Password:"
              value={password}
              style={styles.input}
              onChangeText={value => setPassword(value)}
              secureTextEntry={true}
            />
            <Input
              label="Password Confirmation:"
              value={passwordConf}
              style={styles.input}
              onChangeText={value => setPasswordConf(value)}
              secureTextEntry={true}
            />
            <Layout style={styles.buttonsContainer}>
              <Button 
                style={{marginRight: 5}}
                status="basic"
                onPress={() => navigation.goBack()}
              >Cancel</Button>
              <Button onPress={submit} disabled={!username || !password || (password !== passwordConf)}>Signup</Button>
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
    marginBottom: 50
  },
  content: {
    padding: 20
  },
  input: {
    marginBottom: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})