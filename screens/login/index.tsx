import React, { useState } from 'react'
import { Text, Button, Input, Layout } from '@ui-kitten/components'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

export const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const submit = () => {
    console.log({ username, password })
  }

  return (

    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1}}>
        <ScrollView>
          <Layout style={styles.content}>
            <Text category="h1" status="primary" style={styles.title}>Login</Text>
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
            <Layout style={styles.buttonsContainer}>
              <Button 
                style={{marginRight: 5}}
                status="basic"
                onPress={() => navigation.navigate('Home')}
              >Cancel</Button>
              <Button onPress={submit} disabled={!username || !password}>Login</Button>
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