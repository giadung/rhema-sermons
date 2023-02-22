import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/common/SearchBar";
import NewVideo from "../../components/NewVideo";
import VideoList from "../../components/VideosList";
import useYouTube from "../../hooks/useYouTube";
import recentVideos from "../../data/recentVideos";
import popularVideos from "../../data/popularVideos";

const VideoScreen = ({ navigation }) => {
  // console.log(navigation)
  const [term, setTerm] = useState("");
  const [
    searchVideos,
    results,
    errorMessage,
    getPopularVideos,
    getRecentVideos,
  ] = useYouTube();

  // console.log(popularVideos)

  // const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onCancel={() => setTerm("")}
        onTermSubmit={() => searchVideos(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      {!results || term === "" ? (
        <ScrollView nestedScrollEnabled>
          <NewVideo
            videoId={recentVideos[0].id.videoId}
            title={recentVideos[0].snippet.title}
            // description="The Rhema Experience Online"
            publishedAt={recentVideos[0].snippet.publishedAt}
            imageUrl={`https://i.ytimg.com/vi/${recentVideos[0].id.videoId}/hqdefault.jpg`}
            navigation={navigation}
          />
          <VideoList
            horizontal={true}
            title="Popular Sermons"
            videos={popularVideos}
            navigation={navigation}
          />
          <VideoList
            horizontal={true}
            title="Recent Sermons"
            videos={recentVideos}
            navigation={navigation}
          />
        </ScrollView>
      ) : (
        <>
          {
            <VideoList
              horizontal={false}
              title="Search Results"
              videos={results}
              navigation={navigation}
            />
          }
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
});

export default VideoScreen;
