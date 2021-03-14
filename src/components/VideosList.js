import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { withNavigation } from 'react-navigation'
import VideoDetail from './VideoDetail'

const VideosList = ({ title, videos, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={videos}
        keyExtractor={(video) => video.snippet.resourceId.videoId}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={
                () =>
                  navigation.navigate('Video', {
                    id: item.snippet.resourceId.videoId
                  })
                // console.log(item.snippet.resourceId.videoId)
              }
            >
              <VideoDetail video={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  title: {
    marginLeft: 15,
    marginBottom: 8,
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1
  }
})

export default withNavigation(VideosList)
