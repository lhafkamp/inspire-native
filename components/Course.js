import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import Colors from '../constants/Colors'

const Course = ({ courseData }) => {
  const { name, description, category, price } = courseData

  return (
    <Card title={name} containerStyle={styles.course}>
      <Text style={styles.desc}>{description}</Text>
      <Text style={styles.tag}>{category}</Text>
      <Text style={styles.priceTag}>${price}</Text>
    </Card>
  )
}

const width = Dimensions.get('window').width - 40
const styles = StyleSheet.create({
  course: {
    borderRadius: 4,
    shadowOpacity: 0,
  },
  header: {
    color: Colors.textc,
    alignSelf: 'stretch',
    backgroundColor: Colors.lightgreen,
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    position: 'absolute',
    width: width,
  },
  desc: {
    color: Colors.textc,
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 80,
    minHeight: 160,
    lineHeight: 30,
  },
  tag: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    color: '#fff',
    fontSize: 18,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#4287D7',
    borderColor: '#4287D7',
    borderWidth: 1,
    overflow: 'hidden',
  },
  priceTag: {
    color: Colors.textc,
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 18,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  }
})

export default Course
