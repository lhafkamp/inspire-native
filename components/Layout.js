import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import CourseDisplayer from './CourseDisplayer'

const Layout = () => (
  <SafeAreaView style={styles.layout}>
    <CourseDisplayer />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
})

export default Layout
