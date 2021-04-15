import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Video from '../../components/common/Video'
import SubscribeShareButtons from '../../components/common/SubscribeShareButtons'

const LiveScreen = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Watch On Demand</Text>
        <Text style={styles.description}>Join us for worship.</Text>
      </View>
      <View style={styles.videoContainer}>
        <Video videoId='FE4p8e6JvZo' borderRadius='20' />
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Schedule</Text>
          <Text style={styles.description}>Weekly on Sunday and Wednesday</Text>
        </View>
        <SubscribeShareButtons />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  videoContainer: {
    height: 220,
    marginHorizontal: 15,
    borderRadius: 20
    // marginBottom: 15
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 25
  },
  title: {
    fontSize: 20,
    marginBottom: 2,
    fontWeight: 'bold'
  },
  description: {
    color: 'grey',
    marginBottom: 15
  }
})

export default LiveScreen
