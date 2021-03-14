import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Layout, Text, Divider } from '@ui-kitten/components'
import { HomeLink } from '../../components/homeLink'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1}}>
        <ScrollView>
          <Layout level="3" style={styles.banner}>
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
              category="h5"
              status="info"
              style={styles.stepTitle}
            >
              Step 01:
            </Text>
            <Text style={styles.stepParragraph}>Download and run{' '}
              <HomeLink 
                title="Django Todolist" 
                url="https://github.com/AleejandroReyna/django-todolist" />
            </Text>
            <Text
              category="h5"
              status="info"
              style={styles.stepTitle}
            >
              Step 02:
            </Text>
            <Text style={styles.stepParragraph}>Clone the app repo{' '}
              <HomeLink 
                title="here!!!" 
                url="https://github.com/AleejandroReyna/react-native-todolist" />
            </Text>
            <Text
              category="h5"
              status="info"
              style={styles.stepTitle}
            >
              Step 03:
            </Text>
            <Text style={styles.stepParragraph}>
              Install the node modules with{' '}
            <Text appearance="hint">yarn install</Text> or{' '}
            <Text appearance="hint">npm install</Text>
            </Text>
            <Text
              category="h5"
              status="info"
              style={styles.stepTitle}
            >
              Step 04:
            </Text>
            <Text style={styles.stepParragraph}>Set the enviroment variables.
            </Text>
            <Text
              category="h5"
              status="info"
              style={styles.stepTitle}
            >
              Step 05:
            </Text>
            <Text style={styles.stepParragraph}>Give me an star on{' '}
              <HomeLink 
                title="Github" 
                url="https://github.com/AleejandroReyna/react-native-todolist" />
            </Text>
            <Text
              category="h5"
              status="info"
              style={styles.stepTitle}
            >
              Step 06:
            </Text>
            <Text style={styles.stepParragraph}>
              that's it all! Run the command{' '}
              <Text appearance="hint">npx react-native run-ios</Text> or{' '}
              <Text appearance="hint">npx react-native run-android</Text>
            </Text>
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
  },
  stepTitle: {
    marginBottom: 5
  },
  stepParragraph: {
    marginBottom: 40
  }
})