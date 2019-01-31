import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

const Course = ({ courseData }) => {
  const { name, description, category, price } = courseData

  return (
    <View style={styles.course}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.desc}>{description}</Text>
      <Text style={styles.tag}>{category}</Text>
      <Text style={styles.priceTag}>${price}</Text>
    </View>
  )
}

const width = Dimensions.get('window').width - 40
const styles = StyleSheet.create({
  course: {
    height: 300,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.80,
    shadowRadius: 4,

    elevation: 5,
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
    marginTop: 70,
    fontSize: 18,
  },
  tag: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    color: '#fff',
    fontSize: 18,
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 10,
    backgroundColor: Colors.lightblue,
    borderColor: Colors.lightblue,
    borderWidth: 1,
  },
  priceTag: {
    color: Colors.textc,
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 18,
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  }
})

export default Course
