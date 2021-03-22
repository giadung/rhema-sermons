import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
// import { withNavigation } from 'react-navigation'
import VVideoDetail from './VVideoDetail'

const VideosList = ({ title, videos, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
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
              <VVideoDetail video={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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

export default VideosList
