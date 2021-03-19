import React from 'react'
import { Feather } from '@expo/vector-icons'
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const SearchBar = ({ term, onCancel, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name='search' style={styles.icon} />
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.textInput}
          placeholder='Search'
          value={term}
          onChangeText={onTermChange}
          // onTextInput={onTermSubmit}
          onEndEditing={onTermSubmit}
        />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 8
  },
  searchContainer: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 4
  },
  icon: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  textInput: {
    fontSize: 18
  },
  cancelButton: {
    height: 50,
    backgroundColor: '#f0eeee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 5
  }
})

export default SearchBar
