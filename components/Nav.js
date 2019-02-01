import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'

const Nav = ({ onPress }) => (
  <View style={styles.nav}>
    <Button title="press me" onPress={onPress} />
  </View>
)

const styles = StyleSheet.create({
  nav: {
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: Colors.phc,
  },
})

export default Nav
