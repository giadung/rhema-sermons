import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Video from '../../components/common/Video'
import YoutubePlayer from 'react-native-youtube-iframe'
import AudioBC from '../../components/common/AudioBC'

const AudioScreen = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Audio On Demand</Text>
        <Text style={styles.description}>Join us for worship.</Text>
      </View>
      <View style={styles.videoContainer}>
        <AudioBC />
      </View>
      {/* <ScrollView>
        <View style={styles.textContainer}>
          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  Linking.openURL('https://google.com')
                }}
              >
                <Ionicons
                  style={styles.icon}
                  name='notifications-outline'
                  size={24}
                  color='black'
                />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Subcribe</Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  Linking.openURL('https://google.com')
                }}
              >
                <Feather name='play' size={24} color='black' />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Listen</Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  Linking.openURL('https://google.com')
                }}
              >
                <MaterialCommunityIcons
                  name='share-outline'
                  size={24}
                  color='black'
                />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Share</Text>
            </View>
          </View>
          <Text style={styles.title}>Schedule</Text>
          <Text style={styles.description}>Weekly on Sunday and Wednesday</Text>
        </View>
      </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  videoContainer: {
    height: 240,
    marginHorizontal: 15,
    borderRadius: 20
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
    marginBottom: 10
  },
  iconContainer: {
    backgroundColor: '#F6F8FA',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginBottom: 30
  },
  button: {
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold'
  }
})

export default AudioScreen
