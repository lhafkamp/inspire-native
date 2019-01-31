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
      categoryFilter: [],
      categories: [],
      searchQuery: ''
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
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
    this.setState({
      categoryFilter: e.nativeEvent.newValue
    })
  }

  searchHandler(query) {
    this.setState({ 
      searchQuery: query
    })
  }

  filters() {
    const { courses, searchFilter, categoryFilter, searchQuery } = this.state

    const filteredByCategory = courses
      .filter(course => categoryFilter !== 'all' ? course.category.includes(categoryFilter) : course.category)

    const filteredBySearch = courses
      .filter(course => course.name.includes(searchQuery) || course.description.includes(searchQuery))

    const allFilters = filteredByCategory
      .filter(course => filteredBySearch.includes(course))

    return allFilters
  }

  render() {
    return (
      <View>
        <FilterSection 
          onChange={this.changeHandler} 
          onSearch={this.searchHandler}
          query={this.state.searchQuery}
          categories={this.state.categories} 
        />
        <CourseSection courses={this.filters()} />
      </View>
    )
  }
}

export default CourseDisplayer
