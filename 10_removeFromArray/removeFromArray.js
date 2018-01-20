var removeFromArray = function(...args) {
  //Refactored using Array.filter()

  const array = args[0]

  return array.filter(val => !args.includes(val))
}

module.exports = removeFromArray