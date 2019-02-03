import React from 'react'
import { Dimensions, Animated, StyleSheet, View } from 'react-native'
import allCourses from '../allCourses'
import { Overlay, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons'
import Colors from '../constants/Colors'
import sortItems from '../utils/sortItems'

import CourseSection from './CourseSection'
import FilterSection from './FilterSection'
import SortingSection from './SortingSection'
import Controls from './Controls'

class CourseDisplayer extends React.Component {
  constructor() {
    super()
    this.state = {
      courses: [],
      searchQuery: '',
      categories: [],
      categoryFilter: 'all',
      rangeFilter: [0, 1000],
      rangeMax: 1000,
      sortingOption: 'a-z',
      isVisible: false,
      showFilterOverlay: true,
    }

    this.searchHandler = this.searchHandler.bind(this)
    this.valueChangeHandler = this.valueChangeHandler.bind(this)
    this.sortSelectHandler = this.sortSelectHandler.bind(this)
    this.showSortOverlay = this.showSortOverlay.bind(this)
    this.showFilterOverlay = this.showFilterOverlay.bind(this)
    this.filters = this.filters.bind(this)
    this.sorting = this.sorting.bind(this)
    this.sortAndFilter = this.sortAndFilter.bind(this)
  }

  componentDidMount() {
    const courseArr = []
    const categoryArr = []

    Object.keys(allCourses).map(key => courseArr.push(allCourses[key]))

    courseArr.map(course => !categoryArr.includes(course.category) ? categoryArr.push(course.category) : null)
    
    const priceArr = courseArr.map(course => course.price)
    const maxPrice = Math.round(Math.max(...priceArr))

    this.setState({
      courses: courseArr,
      categories: categoryArr,
      rangeFilter: [0, maxPrice],
      rangeMax: maxPrice,
    })
  }

  searchHandler(query) {
    this.setState({ 
      searchQuery: query
    })
  }

  showFilterOverlay() {
    this.setState({
      showFilterOverlay: true,
      isVisible: !this.state.isVisible
    })
  }

  showSortOverlay() {
    this.setState({
      showFilterOverlay: false,
      isVisible: !this.state.isVisible
    })
  }

  valueChangeHandler(value) {
    let state = null

    if (typeof value === 'string') {
      state = 'categoryFilter'
    } else {
      state = 'rangeFilter'
    }

    this.setState({
      [state]: value
    })
  }

  sortSelectHandler(value) {
    this.setState({
      sortingOption: value
    })
  }

  sorting(courses) {
    switch(this.state.sortingOption) {
      case 'z-a':
        return sortItems(courses, { sortOn: 'name', reverse: true })
        break
      case 'lo-hi':
        return sortItems(courses, { sortOn: 'price' })
        break
      case 'hi-lo':
        return sortItems(courses, { sortOn: 'price', reverse: true })
        break
      default:
        return sortItems(courses, { sortOn: 'name' })
    }
  }

  filters() {
    const { courses, searchQuery, searchFilter, categoryFilter, rangeFilter } = this.state

    const filteredByCategory = courses
      .filter(course => categoryFilter !== 'all' ? course.category.includes(categoryFilter) : course.category)

    const filteredBySearch = courses
      .filter(course => course.name.toLowerCase().includes(searchQuery.toLowerCase()) || course.description.toLowerCase().includes(searchQuery.toLowerCase()))

    const filteredByRange = courses
      .filter(course => course.price >= rangeFilter[0] && course.price <= rangeFilter[1] ? course.price : null)

    const allFilters = filteredByCategory
      .filter(course => filteredBySearch.includes(course))
      .filter(course => filteredByRange.includes(course))

    return allFilters
  }

  sortAndFilter() {
    return this.sorting(this.filters())
  }

  render() {
    const { searchQuery, isVisible, categories, categoryFilter, rangeFilter, rangeMax } = this.state

    return (
      <View style={styles.courseDisplayer}>
        <SearchBar 
          platform="ios" 
          onChangeText={this.searchHandler}
          value={searchQuery}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInput}
          placeholder="Search for courses.."
        />
        <Overlay 
          isVisible={isVisible} 
          width={width - width * 10 / 100}
          height={height - height * 10 / 100}>

          {this.state.showFilterOverlay ?
            <FilterSection 
              categories={categories}
              onPress={this.showFilterOverlay}
              onValueChange={this.valueChangeHandler}
              categoryFilter={categoryFilter}
              range={rangeFilter}
              rangeMax={rangeMax}
            />
          :
            <SortingSection 
              onPress={this.showSortOverlay}
              sortingOption={this.state.sortingOption} 
              onValueChange={this.sortSelectHandler} 
            />
          }
        </Overlay>
        <CourseSection courses={this.sortAndFilter()} />
        <Controls 
          showFilterOverlay={this.showFilterOverlay} 
          showSortOverlay={this.showSortOverlay} 
        />
      </View>
    )
  }
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
  courseDisplayer: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: Colors.phc,
    padding: 8,
  },
  searchInput: {
    borderRadius: 4,
    backgroundColor: Colors.phc,
  },
})

export default CourseDisplayer
