/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Spinner } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/home'
import { LoginScreen } from './screens/login'
import { SignupScreen } from './screens/signup'
import { CreditsScreen } from './screens/credits'
import { DashboardScreen } from './screens/dashboard'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { DrawerContent } from './components/drawerContent'
import { LogoutScreen } from './screens/logout'
import { UserContext } from './contexts/user.context'
import { User } from './services/user/user.interface'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type DrawerParamList = {
  Home: undefined,
  Login: undefined,
  Signup: undefined,
  Credits: undefined,
  Dashboard: undefined,
  Logout: undefined
}

const Drawer = createDrawerNavigator<DrawerParamList>()

interface RouterProps {
  user: User | null | undefined
}

const Router = ({ user }:RouterProps) => {
  console.log('user: ', user)
  
  return (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      {user ? 
        <>
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Logout" component={LogoutScreen} />
        </> :
        <>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Signup" component={SignupScreen} />
        </>
      }
      <Drawer.Screen name="Credits" component={CreditsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
    )
}

const App = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const clearUser = () => {
    setUser(null)
  }

  const addUser = (_user:User) => {
    setUser(_user)
  }

  useEffect(() => {
    const getData = async () => {
      let username = await AsyncStorage.getItem("username")
      let refresh = await AsyncStorage.getItem("refresh")
      console.log("run app: ", username, refresh)
      if(username && refresh) {
        setUser({username, refresh, access: null})
      }
      setLoading(false)
    }
    getData()
  }, [loading])

  return (
    <UserContext.Provider value={{user, addUser, clearUser}}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {
          loading ?
            <Layout style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Spinner />
            </Layout>
          :
            <UserContext.Consumer>
              {({user}) =>
                <Router user={user} />
              }
            </UserContext.Consumer>
        }
      </ApplicationProvider>
    </UserContext.Provider>
  );
};

export default App;
