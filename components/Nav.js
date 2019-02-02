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
      color={Colors.iosBlue}
      reverse
    />
  </View>
)

const styles = StyleSheet.create({
  nav: {
    alignItems: 'center',
    paddingTop: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: Colors.phc,
  },
})

export default Nav
