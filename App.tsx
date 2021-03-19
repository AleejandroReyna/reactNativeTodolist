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
import React from 'react'

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/home'
import { LoginScreen } from './screens/login'
import { SignupScreen } from './screens/signup'
import { CreditsScreen } from './screens/credits'
import { DashboardScreen } from './screens/dashboard'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { DrawerContent } from './components/drawerContent'

export type DrawerParamList = {
  Home: undefined,
  Login: undefined,
  Signup: undefined,
  Credits: undefined,
  Dashboard: undefined
}

const Drawer = createDrawerNavigator<DrawerParamList>()

const App = () => {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Signup" component={SignupScreen} />
          <Drawer.Screen name="Credits" component={CreditsScreen} />
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
    </>
  );
};

export default App;
