import React from 'react'
import { Platform } from 'react-native'
import { WebView } from 'react-native-webview'

const Video = ({ videoId }) => {
  const html =
    '<html><body><meta name="viewport" content="device-width, initial-scale=1, maximum-scale=1.0, user-scalable=1.0">' +
    `<iframe src='https://www.youtube.com/embed/${videoId}?modestbranding=1&autoplay=1' frameborder="0" style="position:absolute; width: 100%; height: 100%; left: 0; top: 0" allow="autoplay; encrypted-media" allowfullscreen></iframe>` +
    '</body></html>'
  return (
    <WebView
      // style={{ resizeMode: 'cover', flex: 1 }}
      allowsFullscreenVideo
      source={{ html: html }}
      mediaPlaybackRequiresUserAction={
        Platform.OS !== 'android' || Platform.Version >= 17 ? false : undefined
      }
      userAgent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'
    />
  )
}

export default Video
