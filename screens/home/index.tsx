import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Layout, Text, Divider } from '@ui-kitten/components'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1}}>
        <ScrollView>
          <Layout level="2" style={styles.banner}>
            <Text 
              category="h1" 
              status="primary" 
              style={styles.bannerTitle}
              >React Native Todolist</Text>
              <Divider />
            <Text 
              style={styles.bannerSubtitle}
            >A simple todolist app with Django Todolist!</Text>
          </Layout>
          <Layout style={styles.content}>
            <Text
              category="h2"
              style={styles.contentTitle}
            >Get Started
            </Text>
            <Text
              style={styles.contentSubtitle}
              category="c2"
            >
            Step by Step guide to run React Native Todolist
            </Text>
            <Text
              category="h4"
              status="info"
            >
              Step 01:
            </Text>
            <Text>Download and run Django Todolist</Text>
          </Layout>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  banner: {
    paddingTop: 150,
    paddingBottom: 150,
    paddingLeft: 20,
    paddingRight: 20
  },
  bannerTitle: {
    marginBottom: 10,
    textAlign: "center", 
    width: "100%",
  },
  bannerSubtitle: {
    marginTop: 10,
    textAlign: "center", 
    width: "100%",
  },
  content: {
    padding: 20
  },
  contentTitle: {
    textAlign: "center", 
    width: "100%",
    marginTop: 30
  },
  contentSubtitle: {
    textAlign: "center", 
    width: "100%",
    marginBottom: 50
  } 
})