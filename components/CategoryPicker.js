import React from 'react'
import { Picker, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

const CategoryPicker = ({ categories, onValueChange, categoryFilter }) => (
  <View style={styles.categoryPicker}>
    <Text style={styles.label}>Categories</Text>
    <Picker
      selectedValue={categoryFilter}
      onValueChange={onValueChange}
      itemStyle={styles.pickerItem}
    >
      <Picker.Item label="all categories" value="all" />
      {categories.map(category => <Picker.Item key ={category} label={category} value={category} />)}
    </Picker>
  </View>
)

const styles = StyleSheet.create({
  categoryPicker: {
    marginTop: 20,
  },
  label: {
    color: Colors.textc,
    fontSize: 18,
    paddingVertical: 10,
  },
  pickerItem: {
    marginTop: -40,
  }
})

export default CategoryPicker
