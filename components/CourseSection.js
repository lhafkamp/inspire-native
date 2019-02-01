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
    backgroundColor: '#fafafa',
  }
})

export default CourseSection
