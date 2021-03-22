import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import VDetail from './VDetail'

const VList = ({ title, videos, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={videos}
        keyExtractor={(video) => video.id.videoId}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => console.log('clicked')}>
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

export default VList
