import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Colors from '../constants/Colors'

const SearchInput = ({ onChange }) => (
  <View>
    <Text style={styles.label}>Search</Text>
    <TextInput style={styles.search} onChange={onChange} placeholder="Search for courses.." />
  </View>
)

const styles = StyleSheet.create({
  label: {
    color: Colors.textc,
    fontSize: 18,
    paddingVertical: 10,
  },
  search: {
    backgroundColor: '#fff',
    height: 60,
    padding: 20,
    fontSize: 18,
  },
})

export default SearchInput
