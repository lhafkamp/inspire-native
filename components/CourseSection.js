import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import Colors from '../constants/Colors'

import Course from './Course'

const CourseSection = ({ courses }) => (
  <ScrollView style={styles.courseSection}>
    {courses.length ? courses
      .map(course => <Course courseData={course} key={course.name} />) : <Text>No results found</Text>}
  </ScrollView>
)

const styles = StyleSheet.create({
  courseSection: {
    paddingVertical: 20,
    backgroundColor: Colors.phc,
  }
})

export default CourseSection
