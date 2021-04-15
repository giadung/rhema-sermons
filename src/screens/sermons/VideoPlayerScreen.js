import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import YoutubePlayer from 'react-native-youtube-iframe'
import SubscribeShareButtons from '../../components/common/SubscribeShareButtons'

const VideoPlayerScreen = ({ route }) => {
  const videoId = route.params.id
  const videoTitle = route.params.title
  const publishedAt = route.params.publishedAt
  const videoDescription = route.params.description
  const publishedDate = publishedAt.substring(0, 10)

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.videoContainer}>
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
        </View>
        <SubscribeShareButtons />
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
    marginBottom: 15
  }
})

export default VideoPlayerScreen
