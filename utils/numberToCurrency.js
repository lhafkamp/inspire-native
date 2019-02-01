function numberToCurrency(number) {
  return number.toLocaleString('default', {
    style: 'currency', 
    currency: 'USD',
  })
}

export default numberToCurrency
