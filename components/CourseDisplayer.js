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
      categoryFilter: [],
      categories: [],
      searchQuery: '',
      isVisible: false,
      pickerValue: 'all',
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
    this.pressHandler = this.pressHandler.bind(this)
    this.ValueChangeHandler = this.ValueChangeHandler.bind(this)
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

  pressHandler() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  ValueChangeHandler(value) {
    this.setState({
      pickerValue: value
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
        />
        <Overlay isVisible={this.state.isVisible}>
          <FilterSection 
            onChange={this.changeHandler} 
            categories={this.state.categories}
            onPress={this.pressHandler}
            onValueChange={this.ValueChangeHandler}
            pickerValue={this.state.pickerValue}
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
  },
})

export default CourseDisplayer
