import React from 'react'
import { Dimensions, Animated, StyleSheet, View } from 'react-native'
import allCourses from '../allCourses'
import { Overlay, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons'
import Colors from '../constants/Colors'

import CourseSection from './CourseSection'
import FilterSection from './FilterSection'
import SortingSection from './SortingSection'
import Controls from './Controls'

class CourseDisplayer extends React.Component {
  constructor() {
    super()
    this.state = {
      courses: [],
      categoryFilter: 'all',
      categories: [],
      searchQuery: '',
      isVisible: false,
      rangeFilter: [0, 1000],
      rangeMax: 1000,
      sortingVisible: false,
      sortingOption: '',
    }

    this.searchHandler = this.searchHandler.bind(this)
    this.pressHandler = this.pressHandler.bind(this)
    this.valueChangeHandler = this.valueChangeHandler.bind(this)
    this.sortHandler = this.sortHandler.bind(this)
    this.filters = this.filters.bind(this)
    this.sorting = this.sorting.bind(this)
    this.sortSelectHandler = this.sortSelectHandler.bind(this)
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

  pressHandler() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  sortHandler() {
    this.setState({
      sortingVisible: !this.state.sortingVisible
    })
  }

  valueChangeHandler(value) {
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
      case 'a-z':
        return courses.sort((a, b) => a.name > b.name)
        break
      case 'z-a':
        return courses.sort((a, b) => a.name < b.name)
        break
      case 'hi-lo':
        return courses.sort((a, b) => a.price < b.price)
        break
      case 'lo-hi':
        return courses.sort((a, b) => a.price > b.price)
        break
      default:
        return courses
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

    const sortAndFilters = this.sorting(allFilters)
    return sortAndFilters
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
          width={Dimensions.get('window').width - 40} 
          height={Dimensions.get('window').height - 120}>
          <FilterSection 
            categories={categories}
            onPress={this.pressHandler}
            onValueChange={this.valueChangeHandler}
            categoryFilter={categoryFilter}
            range={rangeFilter}
            rangeMax={rangeMax}
          />
        </Overlay>

        <Overlay
          isVisible={this.state.sortingVisible} 
          width={Dimensions.get('window').width - 40} 
          height={Dimensions.get('window').height - 120}>

          <SortingSection 
            onPress={this.sortHandler} 
            sortingOption={this.state.sortingOption} 
            sortSelect={this.sortSelectHandler} 
          />
        </Overlay>
        <CourseSection courses={this.filters()} />
        <Controls onPress={this.pressHandler} onSortPress={this.sortHandler}/>
      </View>
    )
  }
}

const width = Dimensions.get('window').width
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
