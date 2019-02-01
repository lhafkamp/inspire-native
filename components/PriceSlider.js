import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Colors from '../constants/Colors'

const PriceSlider = ({ rangeMax, range, onValueChange }) => (
  <View>
    <Text style={styles.label}>Price range</Text>
    <View style={styles.prices}>
      <Text style={styles.price}>${range[0]}</Text>
      <Text style={styles.price}>${range[1]}</Text>
    </View>
    <MultiSlider values={[range[0], range[1]]} min={0} max={rangeMax} onValuesChange={onValueChange} />
  </View>
)

const styles = StyleSheet.create({
  label: {
    color: Colors.textc,
    fontSize: 18,
    paddingVertical: 10,
  },
  prices: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
})

export default PriceSlider
