import React from 'react'
import { StyleSheet, Text, View, Picker } from 'react-native'
import { Button } from 'react-native-elements'
import Colors from '../constants/Colors'

const SortingSection = ({ onPress, sortingOption, sortSelect }) => (
  <View style={styles.sortingSection}>
    <View style={styles.border}>
      <Text style={styles.header}>Sorting options</Text>
    </View>
    <Text>Sort on</Text>
    <Picker selectedValue={sortingOption} onValueChange={sortSelect}>
      <Picker.Item label="title - a-z" value="a-z" />
      <Picker.Item label="title - z-a" value="z-a" />
      <Picker.Item label="price - low to high" value="lo-hi" />
      <Picker.Item label="price - high to low" value="hi-lo" />
    </Picker>
    <Button title="done" onPress={onPress} />
  </View>
)

const styles = StyleSheet.create({
  sortingSection: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    color: Colors.textc,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
})

export default SortingSection
