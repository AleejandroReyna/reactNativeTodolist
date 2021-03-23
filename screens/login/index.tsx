import React, { useState } from 'react'
import { Text, Button, Input, Layout } from '@ui-kitten/components'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { DrawerParamList } from '../../App'
import { UserContext } from '../../contexts/user.context'
import { User } from '../../services/user/user.interface'
import { loginService } from '../../services/user/login.service'

type NavigationProps = DrawerNavigationProp<DrawerParamList, 'Login'>

type Props = {
  navigation: NavigationProps
}

type ViewProps = {
  navigation: NavigationProps,
  addUser(user: User): void 
}

const LoginTemplate = ({ navigation, addUser }:ViewProps) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const submit = async () => {
    const response = await loginService({username, password})
    if(response.status === 200 && response.data) {
      addUser(response.data)
      navigation.navigate('Dashboard')
    }
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
                onPress={() => navigation.goBack()}
              >Cancel</Button>
              <Button 
                disabled={!username || !password} 
                onPress={submit}>Login</Button>
            </Layout>
          </Layout>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  )
}


export const LoginScreen = ({ navigation }:Props) => (
  <UserContext.Consumer>
    {({ addUser }) => 
      <LoginTemplate navigation={navigation} addUser={addUser} />
    }
  </UserContext.Consumer>
)

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