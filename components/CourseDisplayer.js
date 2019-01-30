import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import allCourses from '../allCourses'

import Course from './Course'

class CourseDisplayer extends React.Component {
  constructor() {
    super()
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    const arr = []
    Object.keys(allCourses).map(key => arr.push(allCourses[key]))

    this.setState({
      courses: arr
    })
  }

  render() {
    return (
      <ScrollView style={styles.courseDisplayer}>
        {this.state.courses.map(course => <Course courseData={course} key={course.name} />)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  courseDisplayer: {

  },
})

export default CourseDisplayer
