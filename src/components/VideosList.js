import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
// import { withNavigation } from 'react-navigation'
// import { useNavigation } from '@react-navigation/native'

import VideoDetail from './VideoDetail'

const VideoList = ({ horizontal, title, videos, navigation }) => {
  // const navigation = useNavigation()

  return (
    <View style={[horizontal ? styles.containerH : styles.containerV]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={horizontal}
        showsHorizontalScrollIndicator={!horizontal}
        data={videos}
        keyExtractor={(video) => video.id.videoId}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={
                () =>
                  navigation.navigate('Video Player', {
                    id: item.id.videoId,
                    title: item.snippet.title,
                    publishedAt: item.snippet.publishedAt,
                    description: item.snippet.description
                  })
                // console.log(item.snippet.publishedAt)
              }
            >
              <VideoDetail horizontal={horizontal} video={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerH: {
    flex: 1,
    marginBottom: 20
  },
  containerV: {
    flex: 1
  },
  title: {
    marginLeft: 15,
    marginBottom: 8,
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1
  }
})

export default VideoList
