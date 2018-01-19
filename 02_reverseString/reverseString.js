var reverseString = function(str) {
  split_string = str.split('');
  reversed_string = split_string.reverse();
  return reversed_string.join('');
}

module.exports = reverseString