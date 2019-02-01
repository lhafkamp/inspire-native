import React from 'react'
import { StyleSheet, View } from 'react-native'

import CourseDisplayer from './CourseDisplayer'

const Layout = () => (
  <View style={styles.layout}>
    <CourseDisplayer />
  </View>
)

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingTop: 20,
  },
})

export default Layout
