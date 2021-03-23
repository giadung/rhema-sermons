import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import HVideosList from '../components/HVideosList'
import VVideosList from '../components/VVideosList'
import useYouTube from '../hooks/useYouTube'
import NewVideo from '../components/NewVideo'

const VideoScreen = ({ navigation }) => {
  // console.log(navigation)
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

  // const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onCancel={() => setTerm('')}
        onTermSubmit={() => searchVideos(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      {!results || term === '' ? (
        <ScrollView nestedScrollEnabled>
          <NewVideo
            videoId='FY2pEqb5GH8'
            title='THE STORM - PART 1 LEARNING THE STORMS'
            description='The Rhema Experience Online'
            publishedAt='2021-03-07'
            imageUrl='https://j.gifs.com/BNz5y2.gif'
            navigation={navigation}
          />
          <HVideosList
            title='Popular Sermons'
            videos={popularVideos}
            navigation={navigation}
          />
          <HVideosList
            title='Recent Sermons'
            videos={recentVideos}
            navigation={navigation}
          />
        </ScrollView>
      ) : (
        <>
          {
            <VVideosList
              title='Search Results'
              videos={results}
              navigation={navigation}
            />
          }
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  }
})

export default VideoScreen
