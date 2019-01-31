import React from 'react'
import { View } from 'react-native'
import allCourses from '../allCourses'

import CourseSection from './CourseSection'
import FilterSection from './FilterSection'

class CourseDisplayer extends React.Component {
  constructor() {
    super()
    this.state = {
      courses: [],
      searchFilter: [],
      categoryFilter: [],
      categories: []
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.filters = this.filters.bind(this)
  }

  componentDidMount() {
    const courseArr = []
    const categoryArr = []

    Object.keys(allCourses).map(key => courseArr.push(allCourses[key]))

    courseArr.map(course => !categoryArr.includes(course.category) ? categoryArr.push(course.category) : null)

    this.setState({
      courses: courseArr,
      categories: categoryArr
    })
  }

  changeHandler(e) {
    let state = null
    let value = null

    switch(e._dispatchInstances.type) {
      case 'RCTPicker':
        state = 'categoryFilter'
        value = e.nativeEvent.newValue
        break
      default:
        state = 'searchFilter'
        value = e.nativeEvent.text
    }
    
    this.setState({
      [state]: value
    })
  }

  filters() {
    const { courses, searchFilter, categoryFilter } = this.state

    const filteredByCategory = courses
      .filter(course => categoryFilter !== 'all' ? course.category.includes(categoryFilter) : course.category)

    const filteredBySearch = courses
      .filter(course => course.name.toLowerCase().includes(searchFilter) || course.description.toLowerCase().includes(searchFilter))

    const allFilters = filteredByCategory
      .filter(course => filteredBySearch.includes(course))

    return allFilters
  }

  render() {
    return (
      <View>
        <FilterSection onChange={this.changeHandler} categories={this.state.categories} />
        <CourseSection courses={this.filters()} />
      </View>
    )
  }
}

export default CourseDisplayer
