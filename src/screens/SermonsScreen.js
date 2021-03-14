import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import VideosList from '../components/VideosList'
import useYouTube from '../hooks/useYouTube'

const SermonsScreen = () => {
  const [term, setTerm] = useState('')
  const [
    searchVideos,
    results,
    errorMessage,
    getPopularVideos,
    popularVideos,
    getRecentVideos,
    recentVideos
  ] = useYouTube()

  // console.log(popularVideos)

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchVideos(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={{ marginTop: 10 }}>
        <VideosList title='Popular Sermons' videos={popularVideos} />
        <VideosList title='Recent Sermons' videos={recentVideos} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  }
})

export default SermonsScreen
