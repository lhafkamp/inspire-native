import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

import SearchInput from './SearchInput'
import CategoryPicker from './CategoryPicker'

const FilterSection = ({ onChange, categories }) => (
  <View style={styles.filterSection}>
    <Text style={styles.header}>Find your course</Text>
    <SearchInput onChange={onChange} />
    <CategoryPicker onChange={onChange} categories={categories} />
  </View>
)

const styles = StyleSheet.create({
  filterSection: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: Colors.phc,
    marginBottom: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
})

export default FilterSection
