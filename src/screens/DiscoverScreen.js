import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar
} from 'react-native'
import DiscoverDetail from '../components/DiscoverDetail'

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.subTitle}>Discover something here...</Text>
        </View>
        <DiscoverDetail
          link='https://google.com'
          imgUrl='https://picsum.photos/400'
          title='Event'
          description='Description'
          buttonText='Call to action'
        />
        <DiscoverDetail
          link='https://google.com'
          imgUrl='https://picsum.photos/400'
          title='Support'
          description='Description'
          buttonText='Call to action'
        />
        <DiscoverDetail
          link='https://google.com'
          imgUrl='https://picsum.photos/400'
          title='Groups'
          description='Description'
          buttonText='Call to action'
        />
        <DiscoverDetail
          link='https://google.com'
          imgUrl='https://picsum.photos/400'
          title='Connect'
          description='Description'
          buttonText='Call to action'
        />
        <DiscoverDetail
          link='https://google.com'
          imgUrl='https://picsum.photos/400'
          title='Bible'
          description='Description'
          buttonText='Call to action'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default DiscoverScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
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
