import React from 'react'
import { StyleSheet, Text, View, Picker } from 'react-native'
import { Button } from 'react-native-elements'
import Colors from '../constants/Colors'

const SortingSection = ({ onPress, onValueChange, sortingOption }) => (
  <View style={styles.sortingSection}>
    <View style={styles.border}>
      <Text style={styles.header}>Sorting options</Text>
    </View>
    <Picker 
      selectedValue={sortingOption} 
      onValueChange={onValueChange} 
      itemStyle={styles.pickerItem}
    >
      <Picker.Item label="title - a-z (default)" value="a-z" />
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
    justifyContent: 'space-between',
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
  label: {
    color: Colors.textc,
    fontSize: 18,
    paddingVertical: 10,
  },
  pickerItem: {
    marginTop: -40,
  },
})

export default SortingSection
