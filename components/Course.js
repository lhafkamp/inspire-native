import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Course = ({ courseData }) => {
  const { name, description, category, price } = courseData

  return (
    <View style={styles.course}>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{category}</Text>
      <Text>{price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  course: {
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})

export default Course
