import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

const VideoDetail = ({ video }) => {
  const pastor = video.snippet.description.split('\n')[0]

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://i.ytimg.com/vi/${video.snippet.resourceId.videoId}/mqdefault.jpg`
        }}
      />
      <Text numberOfLines={1} style={styles.title}>
        {video.snippet.title}
      </Text>
      <Text numberOfLines={1} style={styles.description}>
        {pastor}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    maxWidth: 250
  },
  description: {
    color: 'grey',
    fontSize: 12,
    maxWidth: 250
  }
})

export default VideoDetail
