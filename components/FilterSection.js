import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons'
import Colors from '../constants/Colors'

import CategoryPicker from './CategoryPicker'

const FilterSection = ({ onChange, categories, onPress, onValueChange, pickerValue }) => (
  <View style={styles.filterSection}>
    <Text style={styles.header}>Find your course</Text>
    <CategoryPicker 
      onChange={onChange} 
      categories={categories} 
      onValueChange={onValueChange} 
      pickerValue={pickerValue} 
    />
    <Button title="done" onPress={onPress} />
  </View>
)

const styles = StyleSheet.create({
  filterSection: {
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
})

export default FilterSection
