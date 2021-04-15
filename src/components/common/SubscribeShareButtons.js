import React from 'react'
import { View, TouchableOpacity, Linking, Text, StyleSheet } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const SubscribeShareButtons = () => {
  return (
    <View style={styles.buttonWrapper}>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            Linking.openURL(
              'https://visitor.r20.constantcontact.com/manage/optin?v=001BRl1GnvqHBSmpUgt0bWkn1MfFFgc1eWZnLBSjeq8hPkIyEhXoERcP_p-E94Tuo8i-n6WMjixEVWfoTusoH241Xry9A65AaaC8uzGvinLhOc%3D'
            )
          }}
        >
          <Ionicons
            style={styles.icon}
            name='notifications-outline'
            size={24}
            color='black'
          />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Subcribe</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
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
        </TouchableOpacity>
        <Text style={styles.buttonText}>Share</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
    marginTop: 25,
    marginBottom: 25
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 50
  },
  iconContainer: {
    backgroundColor: '#F6F8FA',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonText: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold'
  }
})

export default SubscribeShareButtons
