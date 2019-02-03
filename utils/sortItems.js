function sortItems(data, options = { sortOn: '', reverse: false }) {
  if (options.reverse) {
    return data.sort((a, b) => a[options.sortOn] < b[options.sortOn])
  } else {
    return data.sort((a, b) => a[options.sortOn] > b[options.sortOn])
  }
}

export default sortItems
