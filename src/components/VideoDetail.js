import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

const VideoDetail = ({ horizontal, video }) => {
  const description = video.snippet.description.split('\n')[0]

  return (
    <View style={[horizontal ? styles.containerH : styles.containerV]}>
      <Image
        style={[horizontal ? styles.imageH : styles.imageV]}
        source={{
          uri: `https://i.ytimg.com/vi/${video.id.videoId}/hqdefault.jpg`
        }}
      />
      <Text numberOfLines={1} style={styles.title}>
        {video.snippet.title}
      </Text>
      {!description ? null : (
        <Text numberOfLines={1} style={styles.description}>
          {description}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  containerH: {
    marginLeft: 15
  },
  containerV: {
    marginHorizontal: 15,
    marginBottom: 20
  },
  imageH: {
    width: 250,
    height: 120,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 50
  },
  imageV: {
    width: '100%',
    height: 175,
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
    fontSize: 13,
    maxWidth: 250
  }
})

export default VideoDetail
