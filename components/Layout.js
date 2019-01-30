import React from 'react'
import { StyleSheet, View } from 'react-native'

import CourseDisplayer from './CourseDisplayer'
import Nav from './Nav'

const Layout = () => (
  <View style={styles.layout}>
    <CourseDisplayer />
    <Nav />
  </View>
)

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default Layout
