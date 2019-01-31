import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons'
import Colors from '../constants/Colors'

import CategoryPicker from './CategoryPicker'

const FilterSection = ({ onChange, onSearch, query, categories }) => (
  <View style={styles.filterSection}>
    <Text style={styles.header}>Find your course</Text>
    <SearchBar 
      platform="ios" 
      onChangeText={onSearch} 
      value={query}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle} 
    />
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
  containerStyle: {
    backgroundColor: Colors.phc,
  },
  inputContainerStyle: {
    backgroundColor: '#fff',
  }
})

export default FilterSection
