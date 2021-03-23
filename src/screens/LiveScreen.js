import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { WebView } from 'react-native-webview'

const LiveScreen = () => {
  const html =
    '<html><body><meta name="viewport" content="device-width, initial-scale=1, maximum-scale=1.0, user-scalable=1.0">' +
    `<iframe src='https://www.youtube.com/embed/FE4p8e6JvZo?modestbranding=1&autoplay=1' frameborder="0" style="position:absolute; width: 100%; height: 100%; border-radius: 20px; left: 0; top: 0" allow="autoplay; encrypted-media" allowfullscreen></iframe>` +
    '</body></html>'

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Watch On Demand</Text>
        <Text style={styles.description}>Join us for worship and the...</Text>
      </View>
      <View style={styles.videoContainer}>
        <WebView
          style={{ resizeMode: 'cover', flex: 1 }}
          allowsFullscreenVideo
          source={{
            // html: `<iframe width='100%' height='100%' src='https://www.youtube.com/embed/${videoId}?&autoplay=1' frameborder='0' allow='autoplay;' allowfullscreen></iframe>`
            html: html
          }}
          mediaPlaybackRequiresUserAction={
            Platform.OS !== 'android' || Platform.Version >= 17
              ? false
              : undefined
          }
          userAgent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'
        />
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          {/* <Text style={styles.title}>Watch On Demand</Text> */}
          {/* <Text style={styles.description}>Join us for worship and the...</Text> */}
          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <TouchableHighlight
                style={styles.iconContainer}
                onPress={() => {
                  Linking.openURL('https://google.com')
                }}
              >
                <Ionicons
                  style={styles.icon}
                  name='notifications-outline'
                  size={24}
                  color='black'
                />
              </TouchableHighlight>
              <Text style={styles.buttonText}>Subcribe</Text>
            </View>
            <View style={styles.button}>
              <TouchableHighlight
                style={styles.iconContainer}
                onPress={() => {
                  Linking.openURL('https://google.com')
                }}
              >
                <Feather name='play' size={24} color='black' />
              </TouchableHighlight>
              <Text style={styles.buttonText}>Listen</Text>
            </View>
            <View style={styles.button}>
              <TouchableHighlight
                style={styles.iconContainer}
                onPress={() => {
                  Linking.openURL('https://google.com')
                }}
              >
                <MaterialCommunityIcons
                  name='share-outline'
                  size={24}
                  color='black'
                />
              </TouchableHighlight>
              <Text style={styles.buttonText}>Share</Text>
            </View>
          </View>
          <Text style={styles.title}>Schedule</Text>
          <Text style={styles.description}>Weekly on Sunday and Wednesday</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  videoContainer: {
    height: 220,
    marginHorizontal: 15,
    borderRadius: 20
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 25,
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 2,
    fontWeight: 'bold'
  },
  description: {
    color: 'grey',
    marginBottom: 70
  },
  iconContainer: {
    backgroundColor: '#F6F8FA',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginBottom: 30
  },
  button: {
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold'
  }
})

export default LiveScreen
