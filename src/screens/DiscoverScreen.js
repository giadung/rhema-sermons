import React from 'react'
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import DiscoverDetail from '../components/DiscoverDetail'

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.subTitle}>
            Discover more about Rhema Ministries.
          </Text>
        </View>
        <DiscoverDetail
          link='https://rhemaonline.ca/events/'
          imgUrl='https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80'
          title='Events'
          buttonText='Find Events'
        />
        <DiscoverDetail
          link='https://rhemaonline.ca/connect'
          imgUrl='https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=664&q=80'
          title='Support'
          description='The We Care team is the central hub of our ministry. They are the “one stop destination” for all of our member and staff needs.'
          buttonText='Contact Us'
        />
        <DiscoverDetail
          link='https://rhemaonline.ca/get-connected/#groups'
          imgUrl='https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80'
          title='Groups'
          description='That’s changing and affecting lives.'
          buttonText='Join a Group'
        />
        <DiscoverDetail
          link='https://www.bible.com/'
          imgUrl='https://images.unsplash.com/photo-1469228252629-cbe7cb7db2c8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1566&q=80'
          title='Bible'
          buttonText='Read the Bible Now'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default DiscoverScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20
  },
  textWrapper: {
    marginHorizontal: 15
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
  },
  subTitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 15
  }
})
