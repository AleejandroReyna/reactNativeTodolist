import React from 'react'
import { SafeAreaView } from 'react-native'
import { Layout, Text, Icon } from '@ui-kitten/components'
import { HomeLink } from '../../components/homeLink'

export const CreditsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20}}>
        <Layout style={{flexDirection: 'row'}}>
          <Text>Made with </Text>
          <Icon 
            name="heart" 
            fill='#000' 
            style={{width: 16, height: 16}} />
          <Text> by </Text>
          <HomeLink title="Alejandro Reyna" url="https://github.com/AleejandroReyna" />
          </Layout>
      </Layout>
    </SafeAreaView>
  )
}