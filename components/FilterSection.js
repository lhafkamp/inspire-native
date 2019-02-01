import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons'
import Colors from '../constants/Colors'

import CategoryPicker from './CategoryPicker'
import PriceSlider from './PriceSlider'

const FilterSection = ({ categories, onPress, onValueChange, categoryFilter, rangeMax, range }) => (
  <View style={styles.filterSection}>
    <View style={styles.border}>
      <Text style={styles.header}>Filter options</Text>
    </View>
    <CategoryPicker 
      categories={categories} 
      onValueChange={onValueChange} 
      categoryFilter={categoryFilter} 
    />
    <PriceSlider rangeMax={rangeMax} range={range} onValueChange={onValueChange} />
    <Button title="done" onPress={onPress} style={styles.button} />
  </View>
)

const styles = StyleSheet.create({
  filterSection: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    position: 'absolute',
    bottom: -90,
    width: '100%',
  }
})

export default FilterSection
