import React from 'react'
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const VideoDetail = ({ link, imgUrl, title, description, buttonText }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(link)
      }}
    >
      <View style={styles.container}>
        <View style={styles.imgWrapper}>
          <View style={styles.overColor}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
          </View>
          <Image
            style={styles.image}
            source={{
              uri: imgUrl
            }}
          />
        </View>
        <View style={styles.textWrapper}>
          {description && (
            <Text numberOfLines={4} style={styles.description}>
              {description}
            </Text>
          )}
          <TouchableOpacity>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 20,
    maxHeight: 300
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    position: 'absolute',
    bottom: 15,
    left: 15
  },
  imgWrapper: {
    width: '100%',
    height: 175,
    position: 'relative'
  },
  overColor: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 175,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    zIndex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 175,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden'
  },
  textWrapper: {
    position: 'relative',
    margin: 10
  },
  description: {
    color: 'grey',
    fontSize: 13,
    marginBottom: 10
  },
  buttonText: {
    color: 'tomato',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5
  }
})

export default VideoDetail
