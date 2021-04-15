import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { WebView } from 'react-native-webview'
import AudioBroadcast from '../../components/common/AudioBroadcast'
import SubscribeShareButtons from '../../components/common/SubscribeShareButtons'

const AudioScreen = () => {
  const iframe =
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/581727729&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-237366092" title="Rhema Christian Ministries" target="_blank" style="color: #cccccc; text-decoration: none;">Rhema Christian Ministries</a> · <a href="https://soundcloud.com/user-237366092/sets/sermons-1" title="Sermons" target="_blank" style="color: #cccccc; text-decoration: none;">Sermons</a></div>'

  const html =
    '<html><body><meta name="viewport" content="device-width, initial-scale=1, user-scalable=1.0">' +
    `${iframe}` +
    '</body></html>'

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Audio On Demand</Text>
        <Text style={styles.description}>Join us for worship.</Text>
      </View>
      <View style={styles.broadcastContainer}>
        <AudioBroadcast />
      </View>
      <ScrollView>
        <View style={styles.playlistContainer}>
          {/* <AudioBroadcast /> */}
          <WebView
            style={{
              resizeMode: 'cover',
              flex: 1,
              opacity: 0.99,
              overflow: 'hidden'
            }}
            source={{ html: html }}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  broadcastContainer: {
    height: 200,
    marginHorizontal: 15,
    borderRadius: 20
    // marginBottom: 15
  },
  playlistContainer: {
    height: 600,
    marginHorizontal: 15,
    borderRadius: 20
    // marginBottom: 15
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 25
  },
  title: {
    fontSize: 20,
    marginBottom: 2,
    fontWeight: 'bold'
  },
  description: {
    color: 'grey',
    marginBottom: 15
  }
})

export default AudioScreen
