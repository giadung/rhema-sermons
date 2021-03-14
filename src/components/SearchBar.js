import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.textInput}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 8,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  icon: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  textInput: {
    flex: 1,
    fontSize: 18
  }
})

export default SearchBar
