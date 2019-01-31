import React from 'react'
import { Picker, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

class CategoryPicker extends React.Component {
  constructor() {
    super()
    this.state = {
      pickerValue: 'all'
    }

    this.ValueChangeHandler = this.ValueChangeHandler.bind(this)
  }

  ValueChangeHandler(e) {
    this.setState({
      pickerValue: e
    })
  }

  render() {
    const { onChange, categories } = this.props

    return (
      <View style={styles.categoryPicker}>
        <Text style={styles.label}>Categories</Text>
        <Picker onChange={onChange}
          selectedValue={this.state.pickerValue}
          onValueChange={this.ValueChangeHandler}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label="all categories" value="all" />
          {categories.map(category => <Picker.Item key ={category} label={category} value={category} />)}
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoryPicker: {
    marginTop: 20,
  },
  label: {
    color: Colors.textc,
    fontSize: 18,
    paddingVertical: 10,
  },
  pickerItem: {
    marginTop: -40,
  }
})

export default CategoryPicker
