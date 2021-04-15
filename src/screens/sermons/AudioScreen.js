import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import AudioBroadcast from '../../components/common/AudioBroadcast'
import SubscribeShareButtons from '../../components/common/SubscribeShareButtons'

const AudioScreen = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Audio On Demand</Text>
        <Text style={styles.description}>Join us for worship.</Text>
      </View>
      <View style={styles.broadcastContainer}>
        <AudioBroadcast />
      </View>
      <ScrollView>
        <View style={styles.playlistContainer}>{/* <AudioBroadcast /> */}</View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  broadcastContainer: {
    height: 200,
    marginHorizontal: 15,
    borderRadius: 20
    // marginBottom: 15
  },
  playlistContainer: {
    height: 600,
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

export default AudioScreen
