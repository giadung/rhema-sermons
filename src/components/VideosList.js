import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import VideoDetail from './VideoDetail'

const VideosList = ({ title, videos }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={videos}
        keyExtractor={(video) => video.snippet.resourceId.videoId}
        renderItem={({ item }) => {
          return <VideoDetail video={item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  title: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1
  }
})

export default VideosList
