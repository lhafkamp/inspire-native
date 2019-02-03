import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import Colors from '../constants/Colors'

const Controls = ({ showFilterOverlay, showSortOverlay }) => (
  <View style={styles.nav}>
    <Icon 
      onPress={showSortOverlay} 
      type="material-community" 
      name="sort-alphabetical"
      color={Colors.iosBlue}
      reverse
      containerStyle={styles.sortingIcon}
    />
    <Icon 
      onPress={showFilterOverlay} 
      type="octicon" 
      name="settings"
      color={Colors.iosBlue}
      reverse
      containerStyle={styles.filterIcon}
    />
  </View>
)

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: Colors.phc,
  },
  sortingIcon: {
    paddingLeft: 20,
    borderLeftWidth: 1, 
    borderColor: Colors.phc
  },
  filterIcon: {
    marginLeft: 10, 
    paddingRight: 20, 
    borderRightWidth: 1, 
    borderColor: Colors.phc
  }
})

export default Controls
