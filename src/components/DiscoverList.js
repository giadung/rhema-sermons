import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import VDetail from './VDetail'

const VList = ({ title, videos, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginLeft: 15,
    marginBottom: 8,
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1
  }
})

export default VList
