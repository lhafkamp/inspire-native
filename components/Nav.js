import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import Colors from '../constants/Colors'

const Nav = ({ onPress }) => (
  <View style={styles.nav}>
    <Icon 
      onPress={onPress} 
      type="octicon" 
      name="settings"
      color="#4287D7"
      reverse
    />
  </View>
)

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingTop: 1,
    paddingHorizontal: 10,
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: Colors.phc,
  },
})

export default Nav
