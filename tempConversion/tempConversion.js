var ftoc = function(fahrenheit) {
  return (fahrenheit - 32) / 1.8
}

var ctof = function(celsius) {
  return (celsius * 1.8) + 32
}

module.exports = {
  ftoc,
  ctof
}
