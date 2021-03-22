import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

const VideoDetail = ({}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `/#`
        }}
      />
      <Text numberOfLines={1} style={styles.title}>
        title
      </Text>
      {!pastor ? null : (
        <Text numberOfLines={1} style={styles.description}>
          description
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 20
  },
  image: {
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
    fontSize: 16
  },
  description: {
    color: 'grey',
    fontSize: 13
  }
})

export default VideoDetail
