import React from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import allCourses from '../allCourses'
import { Overlay, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons'
import Colors from '../constants/Colors'

import CourseSection from './CourseSection'
import FilterSection from './FilterSection'
import Nav from './Nav'

class CourseDisplayer extends React.Component {
  constructor() {
    super()
    this.state = {
      courses: [],
      categoryFilter: 'all',
      categories: [],
      searchQuery: '',
      isVisible: false,
    }

    this.searchHandler = this.searchHandler.bind(this)
    this.pressHandler = this.pressHandler.bind(this)
    this.valueChangeHandler = this.valueChangeHandler.bind(this)
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

  searchHandler(query) {
    this.setState({ 
      searchQuery: query
    })
  }

  pressHandler() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  valueChangeHandler(value) {
    this.setState({
      categoryFilter: value
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
      <View style={styles.courseDisplayer}>
        <SearchBar 
          platform="ios" 
          onChangeText={this.searchHandler}
          value={this.state.searchQuery}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.searchInputStyle}
        />
        <Overlay isVisible={this.state.isVisible}>
          <FilterSection 
            categories={this.state.categories}
            onPress={this.pressHandler}
            onValueChange={this.valueChangeHandler}
            categoryFilter={this.state.categoryFilter}
          />
        </Overlay>
        <CourseSection courses={this.filters()} />
        <Nav onPress={this.pressHandler} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  courseDisplayer: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: Colors.phc,
    padding: 5,
  },
  searchInputStyle: {
    borderRadius: 4,
    backgroundColor: Colors.phc,
  },
})

export default CourseDisplayer
