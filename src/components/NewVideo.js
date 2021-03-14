import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const NewVideo = ({
  videoId,
  title,
  publishedAt,
  description,
  imageUrl,
  navigation
}) => {
  // console.log(navigation)
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Video Player', {
          id: videoId,
          title: title,
          publishedAt: publishedAt,
          description: description
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.imageCover}>
          <View style={styles.textContainer}>
            <Text style={styles.newText}>Featured</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
        <Image
          source={{ uri: imageUrl }}
          style={{
            flex: 1,
            borderRadius: 16,
            overlayColor: '#fff'
          }}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 165,
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 16
  },
  imageCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 16,
    zIndex: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%'
  },
  textContainer: {
    // backgroundColor: 'red',
    // opacity: 0.9,
    marginHorizontal: 15,
    marginVertical: 15,
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'space-between'
  },
  newText: {
    backgroundColor: '#F75925',
    width: 92,
    height: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    borderRadius: 100,
    marginBottom: 5
  },
  title: {
    backgroundColor: '#FFD600',
    textAlign: 'left',
    textAlignVertical: 'center',
    color: '#000',
    fontSize: 20,
    maxWidth: 245,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  description: {
    color: '#fff',
    fontSize: 18
  }
})

export default NewVideo
