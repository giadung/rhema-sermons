import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import VideosList from '../components/VideosList'
import useYouTube from '../hooks/useYouTube'
import NewVideo from '../components/NewVideo'

const SermonsScreen = () => {
  // console.log(props)
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
      <ScrollView>
        <NewVideo
          videoId='FY2pEqb5GH8'
          title='THE STORM - PART 1 LEARNING THE STORMS'
          description='The Rhema Experience Online'
          imageUrl='https://j.gifs.com/BNz5y2.gif'
        />
        <VideosList title='Popular Sermons' videos={popularVideos} />
        <VideosList title='Recent Sermons' videos={recentVideos} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  }
})

export default SermonsScreen
