import React from 'react'
import { View } from 'react-native'
import allCourses from '../allCourses'

import CourseSection from './CourseSection'

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
      <CourseSection courses={this.state.courses} />
    )
  }
}

export default CourseDisplayer
