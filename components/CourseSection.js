import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import Colors from '../constants/Colors'

import Course from './Course'

const CourseSection = ({ courses }) => (
  <ScrollView style={styles.courseSection}>
    {courses.length ? courses
      .map((course, i) => <Course courseData={course} key={course.name} index={i} length={courses.length} />) : <Text style={styles.noResults}>No results found</Text>}
  </ScrollView>
)

const styles = StyleSheet.create({
  courseSection: {
    backgroundColor: '#fafafa',
    paddingHorizontal: 10,
  },
  noResults: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textc,
    alignSelf: 'center',
    paddingTop: 20,
  }
})

export default CourseSection
