import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Video from '../../components/common/Video'
import YoutubePlayer from 'react-native-youtube-iframe'

const VideoPlayerScreen = ({ route }) => {
  const videoId = route.params.id
  const videoTitle = route.params.title
  const publishedAt = route.params.publishedAt
  const videoDescription = route.params.description
  const publishedDate = publishedAt.substring(0, 10)

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.videoContainer}>
        {/* <Video videoId={videoId} /> */}
        <YoutubePlayer
          style={{ opacity: 0.99, overflow: 'hidden' }}
          height={220}
          play={true}
          videoId={videoId}
        />
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{videoTitle}</Text>
          <Text style={styles.date}>Published on: {publishedDate}</Text>
          <Text style={styles.description}>{videoDescription}</Text>
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
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  videoContainer: {
    height: 220
  },
  textContainer: {
    marginTop: 25,
    marginHorizontal: 25,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  date: {
    color: 'grey',
    marginBottom: 15
  },
  description: {
    color: 'grey',
    marginBottom: 25
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
    marginBottom: 50
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

export default VideoPlayerScreen
